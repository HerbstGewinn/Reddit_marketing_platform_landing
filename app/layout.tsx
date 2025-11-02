import './globals.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://leadlift.app'
const titleDefault = 'Reddit Marketing Without Getting Banned | LeadLift.app'
const descriptionDefault = 'Reddit marketing software that helps you find buyers, generate leads, and convert without getting banned. AI-powered comment generation, subreddit targeting, and authentic engagement tools for growth.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: '%s · LeadLift.app'
  },
  description: descriptionDefault,
  keywords: [
    'reddit marketing',
    'reddit marketing tool',
    'reddit lead generation',
    'reddit without getting banned',
    'reddit marketing software',
    'reddit comment generator',
    'reddit subreddit targeting',
    'AI reddit marketing',
    'reddit growth tool'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'LeadLift.app',
    title: 'Reddit Marketing Without Getting Banned | LeadLift.app',
    description: descriptionDefault,
    images: [{ url: '/icon.svg', width: 1200, height: 630, alt: 'LeadLift.app' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@herbst_laurin',
    title: 'Reddit Marketing Without Getting Banned | LeadLift.app',
    description: descriptionDefault,
    images: ['/icon.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LeadLift.app',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/icon.svg`,
      width: 32,
      height: 32
    },
    image: `${siteUrl}/icon.svg`,
    sameAs: [
      'https://www.reddit.com/user/InternetVisible8661/',
      'https://x.com/herbst_laurin/',
      'https://www.linkedin.com/in/laurin-herbst/'
    ]
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
