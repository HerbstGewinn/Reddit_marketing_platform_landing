import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Redirect www to non-www (301 permanent redirect for SEO)
  // This ensures non-www is the canonical version
  if (hostname === 'www.leadlift.app' || hostname.startsWith('www.')) {
    const url = new URL(request.url)
    url.hostname = 'leadlift.app'
    return NextResponse.redirect(url.toString(), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

