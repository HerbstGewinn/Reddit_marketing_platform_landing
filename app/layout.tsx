import './globals.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://redditmarketing.co'
const titleDefault = 'Reddit Marketing Tool — Get Customers from Reddit | redditmarketing.co'
const descriptionDefault = 'Reddit marketing software that finds buyers, drafts helpful replies, and turns Reddit conversations into customers. Safe, authentic, and built for growth.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: '%s · redditmarketing.co'
  },
  description: descriptionDefault,
  keywords: [
    'reddit marketing',
    'reddit marketing tool',
    'reddit lead generation',
    'reddit advertising',
    'find customers on reddit',
    'reddit marketing software'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'redditmarketing.co',
    title: 'Reddit Marketing Tool — Get Customers from Reddit',
    description: descriptionDefault,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'redditmarketing.co' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@redditmarketing',
    title: 'Reddit Marketing Tool — Get Customers from Reddit',
    description: descriptionDefault,
    images: ['/og.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'redditmarketing.co',
    url: siteUrl,
    logo: `${siteUrl}/og.png`,
    sameAs: []
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this against Reddit rules?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help you participate authentically. You approve all replies before posting.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who is this for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indie founders, B2B, and consumer products that benefit from community-driven discovery.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much time does it take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A few minutes to set up. After that, check your inbox to approve replies and chat.'
        }
      }
    ]
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
