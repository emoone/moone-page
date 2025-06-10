import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PROTECTED_ROUTES = ['/picsum', '/dashbord'];

// 인증된 사용자 제한
const RESTRICTED_AUTH_ROUTES = ['/auth/login', '/auth/join'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // 로그인 검증
  const isProtected = PROTECTED_ROUTES.some(path =>
    req.nextUrl.pathname.startsWith(path),
  );
  // 인증된 사용자 제한
  const isRestrictedAuth = RESTRICTED_AUTH_ROUTES.some(path =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  if (isRestrictedAuth && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  console.log('✅ Middleware completed');
  return NextResponse.next();
}

export const config = {
  matcher: ['/picsum/:path*', '/dashbord/:path*', '/auth/:path*'],
};
