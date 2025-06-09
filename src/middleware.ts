import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PROTECTED_ROUTES = ['/picsum', '/dashbord'];

export async function middleware(req: NextRequest) {
  console.log('🔒 Middleware executing for path:', req.nextUrl.pathname);

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log('🔑 Token status:', token ? 'Token exists' : 'No token');

  const isProtected = PROTECTED_ROUTES.some(path =>
    req.nextUrl.pathname.startsWith(path),
  );
  console.log('🛡️ Is protected route:', isProtected);

  if (isProtected && !token) {
    console.log('⚠️ Redirecting to login');
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  console.log('✅ Middleware completed');
  return NextResponse.next();
}

export const config = {
  matcher: ['/picsum/:path*', '/dashbord/:path*', '/auth/:path*'],
};
