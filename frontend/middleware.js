import { NextResponse } from 'next/server'

export function middleware(request) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/register')

  // Always allow access to auth pages
  if (isAuthPage) {
    return NextResponse.next()
  }

  // Always allow access to all other pages
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', "/profile"],
} 