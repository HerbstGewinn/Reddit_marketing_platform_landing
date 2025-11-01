import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reddit Marketing Without Getting Banned | LeadLift.app',
  description: 'Reddit marketing software that helps you find buyers, generate leads, and convert without getting banned. AI-powered comment generation, subreddit targeting, and authentic engagement tools. Start your 3-day free trial.',
  openGraph: {
    title: 'Reddit Marketing Without Getting Banned | LeadLift.app',
    description: 'Reddit marketing software that helps you find buyers, generate leads, and convert without getting banned. AI-powered comment generation, subreddit targeting, and authentic engagement tools.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-12 h-80 w-80 rounded-full bg-brand-100 blur-3xl" />
      <div className="container-page pt-24 pb-16 text-center md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
        <span className="mx-auto inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">NEXT GENERATION OF REDDIT MARKETING</span>
        <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-extrabold leading-[1.2] pb-1 tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
          Reddit Marketing
          <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">without getting banned</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-600 leading-relaxed">
          Describe your product, and our AI finds buyers on Reddit 24/7 — helping you
          join conversations, build trust, and convert.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#cta" className="btn-primary text-lg px-8 py-4">Start Getting Customers for Free</a>
          <a href="#how" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">See how it works</a>
        </div>
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <div className="aspect-video w-full bg-gray-100"></div>
        </div>
      </div>
    </section>
  )
}

function Steps() {
  const items = [
    {
      title: 'Describe your product',
      points: ['Auto-filled by AI or manual input', 'Subreddit suggestions tailored to you']
    },
    {
      title: 'Engage with buyers',
      points: ['Tracks relevant threads', 'Crafts helpful replies, you approve']
    },
    {
      title: 'Convert on autopilot',
      points: ['Warm DMs and follow-ups', 'Simple inbox to manage conversations']
    }
  ]

  return (
    <section id="how" className="container-page py-24">
      <h2 className="text-center text-3xl font-bold">Start growing in 3 simple steps</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {items.map((step, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="aspect-video w-full rounded-lg bg-gray-100" />
            <h3 className="mt-5 text-xl font-semibold">Step {i + 1}: {step.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {step.points.map((p, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function SocialProof() {
  const redditPosts = [
    {
      subreddit: 'r/VibeCodeCamp',
      title: "I woke up to 100$ MRR. Ivan's believe it 🥺⏱️",
      upvotes: '24',
      comments: 21,
      views: '13K',
      flair: 'Vibe Coding',
      timeAgo: '1 mo. ago'
    },
    {
      subreddit: 'r/nocode',
      title: "I've coded an App with 100% AI and it made me 300$ just two days after Launch.",
      upvotes: '63',
      comments: 43,
      views: '99K',
      flair: 'Success Story',
      timeAgo: '6 mo. ago'
    },
    {
      subreddit: 'r/SideProject',
      title: 'I made an app that turns your Uni lectures into interactive Exams – And it\'s completely free',
      upvotes: '200',
      comments: 58,
      views: '30K',
      flair: null,
      timeAgo: '1 yr. ago'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built by someone who <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">actually grew on Reddit</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              I used these exact strategies to build my audience and grow my business. Here's proof it works.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {redditPosts.map((post, i) => (
              <a 
                key={i} 
                href="https://www.reddit.com/user/InternetVisible8661/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Reddit Post Header */}
                <div className="p-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">r</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-900">{post.subreddit}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.timeAgo}</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                  
                  {/* Post Title */}
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug line-clamp-3 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                  
                  {/* Flair */}
                  {post.flair && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {post.flair}
                    </span>
                  )}
                </div>
                
                {/* Engagement Metrics */}
                <div className="p-4 pt-3">
                  <div className="flex items-center gap-4 text-xs">
                    {/* Upvotes */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1 px-2 py-1.5 rounded hover:bg-gray-100 transition-colors" onClick={(e) => e.preventDefault()}>
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 011.414 0L10 14.586l5.293-4.879a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-900">{post.upvotes}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 011.414 0L10 14.586l5.293-4.879a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Comments */}
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                    
                    {/* Save */}
                    <div className="text-gray-600 hover:text-gray-900" onClick={(e) => e.preventDefault()}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    
                    {/* Share */}
                    <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900" onClick={(e) => e.preventDefault()}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-xs">Share</span>
                    </div>
                  </div>
                  
                  {/* Views */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="font-semibold">{post.views} views</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">See More Insights</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Real results from real Reddit posts</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Reddit account growth
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://www.reddit.com/user/InternetVisible8661/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700 transition-colors shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
                u/InternetVisible8661
              </a>
              <a 
                href="https://x.com/herbst_laurin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700 transition-colors shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @herbst_laurin
              </a>
              <a 
                href="https://www.linkedin.com/in/laurin-herbst/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700 transition-colors shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LongSteps() {
  const steps = [
    {
      title: 'Paste your product URL',
      desc: 'We generate a crisp description, value props and ICP automatically — edit anything in seconds.',
    },
    {
      title: 'Get your subreddit shortlist',
      desc: 'We score communities by size, intent and fit so you focus only where buyers hang out.',
    },
    {
      title: 'Track live conversations',
      desc: 'Real-time monitor of questions, pain points and buyer keywords across your shortlist.',
    },
    {
      title: 'Reply helpfully (with AI drafts)',
      desc: 'Approve or edit AI-crafted replies that add value first — no spam, always on-brand.',
    },
    {
      title: 'Convert and follow up',
      desc: 'Warm DMs, saved leads and reminders so good conversations turn into demos and sales.',
    }
  ]

  return (
    <section id="deep-how" className="container-page py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <ol className="relative border-l border-gray-200 pl-6 md:pl-8">
          {steps.map((s, i) => (
            <li key={i} className="mb-10 ml-2 md:ml-4">
              <span className="absolute -left-3 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white md:-left-3.5">{i + 1}</span>
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                </div>
                <div className="order-first h-40 rounded-xl bg-gray-100 md:order-none md:h-52" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 to-transparent" />
      <div className="container-page relative text-center">
        <h2 className="text-3xl font-bold">Ready to meet your next 100 customers?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Join founders using LeadLift.app to turn Reddit conversations into revenue.</p>
        <div className="mt-8">
          <a className="btn-primary text-base px-7 py-3.5" href="#">Start for Free</a>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      name: 'Aisha R.',
      role: 'Founder, B2B SaaS',
      text: 'We booked 14 demos in two weeks from Reddit alone. The AI drafts are scarily good and kept our tone on point.'
    },
    {
      name: 'Marco D.',
      role: 'Indie hacker',
      text: 'Went from lurking to actually selling. The subreddit shortlist saved me months of guesswork.'
    },
    {
      name: 'Lena K.',
      role: 'Growth @ e‑commerce',
      text: 'Real conversations > ads. This feels like a superpower for community-led growth.'
    }
  ]
  return (
    <section id="reviews" className="container-page py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold">What our users say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Real teams using LeadLift.app to turn threads into revenue.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="text-left">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-gray-500">{r.role}</div>
              </div>
            </div>
            <p className="text-gray-700">“{r.text}”</p>
            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="h-4 w-4 rounded-sm bg-amber-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="container-page py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Get started with a 3 day free trial</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">One plan, Affordable pricing, No hidden fees, Cancel anytime.</p>
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="rounded-2xl border-2 border-brand-300 p-8 shadow-glow bg-white">
          <div className="flex items-center justify-center">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">Most Popular</span>
          </div>
          <h3 className="mt-4 text-center text-2xl font-semibold">Pro</h3>
          <div className="mt-6 text-center">
            <div className="text-sm font-medium text-gray-600">3 days free</div>
            <div className="mt-2 text-4xl font-bold">
              then <span className="text-3xl">$25</span><span className="text-xl font-medium text-gray-500">/month</span>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-600">For businesses and marketers who want to grow on Reddit</p>
          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>A growing library 50+ viral post templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>Unlimited AI lead generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>Unlimited AI comment generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>Subreddit targeting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>Relevant post tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
          </div>
          <a className="btn-primary mt-8 inline-flex w-full justify-center text-lg py-4" href="/pricing">Start your free trial</a>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Is this against Reddit rules?', a: 'We help you participate authentically. You approve all replies before posting.' },
    { q: 'Who is this for?', a: 'Indie founders, B2B, and consumer products that benefit from community-driven discovery.' },
    { q: 'How much time does it take?', a: 'A few minutes to set up. After that, check your inbox to approve replies and chat.' }
  ]
  return (
    <section id="faq" className="container-page py-20">
      <h2 className="text-center text-3xl font-bold">FAQ</h2>
      <div className="mx-auto mt-10 grid max-w-3xl gap-4">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-xl border border-gray-100 p-5">
            <summary className="cursor-pointer list-none text-lg font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="container-page flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} leadlift.app</span>
        <div className="flex gap-4">
          <a href="/terms-of-service" className="hover:text-gray-900">Terms of Service</a>
          <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <LongSteps />
      <Steps />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
