import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeadLift.app - Reddit Marketing Without Getting Banned',
    short_name: 'LeadLift',
    description: 'Reddit marketing software that helps you find buyers, generate leads, and convert without getting banned.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7f4dff',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ]
  }
}

