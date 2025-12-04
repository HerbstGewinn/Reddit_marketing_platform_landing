'use client'

import { useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200 blur-xl md:blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-12 h-80 w-80 rounded-full bg-brand-100 blur-xl md:blur-3xl" />
      <div className="container-page pt-24 pb-16 text-center md:pt-32 md:pb-32 lg:pt-40 lg:pb-40 relative z-10">
        <span className="mx-auto inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">NEXT GENERATION OF REDDIT MARKETING</span>
        <h1 className="mx-auto mt-8 max-w-6xl text-4xl font-bold leading-[1.15] pb-1 tracking-tight text-gray-900 sm:text-5xl sm:font-extrabold sm:leading-[1.2] md:text-7xl lg:text-8xl" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility', WebkitTextSizeAdjust: '100%' }}>
          Reddit Marketing
          <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent pb-2" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', WebkitTextSizeAdjust: '100%' }}>without getting banned</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 leading-relaxed sm:mt-10 sm:text-xl" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', WebkitTextSizeAdjust: '100%' }}>
          Describe your product, and our AI finds buyers on Reddit 24/7 — helping you
          join conversations, build trust, and convert.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="https://app.leadlift.app/" className="btn-primary text-lg px-8 py-4">Start Getting Customers for Free</a>
          <a href="#how" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">See how it works</a>
        </div>
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <div className="aspect-video w-full bg-gray-100">
            <video
              ref={videoRef}
              src="https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/leadgen.mp4"
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
              style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

