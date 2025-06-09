import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // 백엔드 API 호출 예시
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/join`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await response.json();

  return new NextResponse(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
