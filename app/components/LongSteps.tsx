'use client'

import { useRef } from 'react'

function StepItem({ step, index }: { step: { title: string; desc: string; video: string }; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <li className="mb-10 ml-2 md:ml-4">
      <span className="absolute -left-3 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white md:-left-3.5">{index + 1}</span>
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold md:text-xl">{step.title}</h3>
          <p className="mt-2 text-gray-600">{step.desc}</p>
        </div>
        <div 
          className="order-first h-40 rounded-xl bg-gray-100 md:order-none md:h-52 overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={step.video}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
          />
        </div>
      </div>
    </li>
  )
}

export default function LongSteps() {
  const steps = [
    {
      title: 'Paste your product URL',
      desc: 'We generate a crisp description, value props and ICP automatically — edit anything in seconds.',
      video: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/projectdescription.mp4'
    },
    {
      title: 'Get your subreddit shortlist',
      desc: 'We score communities by size, intent and fit so you focus only where buyers hang out.',
      video: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/subreddits.mp4'
    },
    {
      title: 'Reply helpfully (with AI drafts)',
      desc: 'Approve or edit AI-crafted replies that add value first — no spam, always on-brand.',
      video: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/leadgen.mp4'
    },
    {
      title: 'Convert & go viral',
      desc: 'Use our viral post templates to get karma, leads & customers.',
      video: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/viral-templates.mp4'
    }
  ]

  return (
    <section id="deep-how" className="container-page py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <ol className="relative border-l border-gray-200 pl-6 md:pl-8">
          {steps.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

