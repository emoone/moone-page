import * as bcrypt from 'bcrypt';

import prisma from '@/app/lib/prisma';

interface RequestBodyType {
  name?: string;
  email: string;
  password: string;
}

/**
 * 여기서 회원가입 api 만들것이다
 * 여기가 api 주소가 되겠지?
 * /api/auth/user
 * @param request
 */
export async function POST(request: Request) {
  const body: RequestBodyType = await request.json();

  // User 테이블에 데이터 입력
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10), // 비밀번호 hash로 암호화
    },
  });
  console.log('user', user);

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
