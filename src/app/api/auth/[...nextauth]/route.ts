import NextAuth, { AuthOptions, User } from 'next-auth';

import { Adapter } from 'next-auth/adapters';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

/**
 * credentionProvider는 로그인 또는 회원가입 form 만들어주는 기능인듯 하다
 */
const authOptions: AuthOptions = {
  callbacks: {
    session({ session, token, user }) {
      console.log('apiAuth', session, token, user);
      return session;
    },
  },
  providers: [],
  // providers: [
  //   CredentialsProvider({
  //     // The name to display on the sign in form (e.g. "Sign in with...")
  //     name: 'email',
  //     // `credentials` is used to generate a form on the sign in page.
  //     // You can specify which fields should be submitted, by adding keys to the `credentials` object.
  //     // e.g. domain, username, password, 2FA token, etc.
  //     // You can pass any HTML attribute to the <input> tag through the object.
  //     // `credentials`는 로그인 페이지에서 양식을 생성하는 데 사용됩니다.
  //     // `credentials` 개체에 키를 추가하여 제출해야 하는 필드를 지정할 수 있습니다.
  //     // 예를 들어 도메인, 사용자 이름, 비밀번호, 2FA 토큰 등
  //     // 객체를 통해 HTML 속성을 <input> 태그에 전달할 수 있습니다.
  //     credentials: {
  //       username: {
  //         label: '이름',
  //         type: 'text',
  //         placeholder: 'userNamePlaceHolder',
  //       },
  //       password: {
  //         label: '비밀번호',
  //         type: 'password',
  //         placeholder: 'passwordPlaceHolder',
  //         autoComplete: 'false',
  //       },
  //     },

  //     /**
  //      * ANCHOR: 여기가 로그인 로직 담당 구간
  //      * @param credentials
  //      * @returns
  //      */
  //     authorize: async (credentials, req) => {
  //       const user: User = {
  //         id: '1',
  //         name: 'moon lee',
  //         email: 'moonlee@toptoon.com',
  //       };
  //       console.log('???', user, credentials, req);
  //       if (!user) return null;
  //       return user;
  //     },
  //   }),
  // ],
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
