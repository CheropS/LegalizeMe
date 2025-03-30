import { NextResponse } from 'next/server'

export function middleware(request) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/register')

  if (isAuthPage) {
    return NextResponse.next()
  }

  // Get the user token from cookies
  const token = request.cookies.get("token")?.value

  // Check if the user is trying to access protected routes
  if (request.nextUrl.pathname.startsWith("/profile")) {
    if (!token) {
      // Redirect to login page if no token is found
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', "/profile"],
} 