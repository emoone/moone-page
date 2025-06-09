import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
interface ExtendedSession extends Session {
  user: {
    id: string;
    email: string;
  };
}
export const authOptions: NextAuthOptions = {
  providers: [
    // EmailProvider({
    //   sendVerificationRequest: async ({ identifier, url, provider }) => {
    //     // identifier: 이메일 주소?
    //     // url: 로그인 링크?
    //     // provicder.from: ??
    //     //
    //     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/join`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({
    //         email: identifier,
    //         link: url,
    //         // redirect: url,
    //       }),
    //     });
    //   },

    //   // maxAge: 24 * 60 * 60, // 유효시간??기본 (1시간)
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          );

          const data = await res.json();

          // 로그인 성공
          if (res.status === 200 && data.user) {
            return data.user;
          }

          // 로그인 실패 시 원본 상태 코드와 함께 에러 전달
          throw new Error(
            JSON.stringify({
              status: res.status,
              message: data.message || '로그인 실패',
            }),
          );
        } catch (error) {
          // 네트워크 에러 등 기타 에러 처리
          if (error instanceof Error) {
            try {
              const errorData = JSON.parse(error.message);
              throw new Error(JSON.stringify(errorData));
            } catch {
              throw new Error(
                JSON.stringify({
                  status: 500,
                  message: error.message || '서버 에러가 발생했습니다.',
                }),
              );
            }
          }
          throw error;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt', // or 'database' (DB 사용 시)
    maxAge: 60 * 60 * 24 * 7, // 7일
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...(session.user || {}),
        id: token.id as number,
        email: token.email as string,
        name: token.name as string,
      } as any;

      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith('/') ? `${baseUrl}${url}` : url;
    },
  },
};
