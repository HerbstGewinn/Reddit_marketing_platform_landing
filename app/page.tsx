import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import Hero from './components/Hero'
import LongSteps from './components/LongSteps'

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

function Steps() {
  const items = [
    {
      title: 'Describe your product',
      points: ['Auto-filled by AI or manual input', 'Subreddit suggestions tailored to you'],
      image: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/describe-product-banner.png'
    },
    {
      title: 'Engage with buyers',
      points: ['Tracks relevant threads', 'Crafts helpful replies, you approve'],
      image: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/engage-banner.png'
    },
    {
      title: 'Go viral',
      points: ['Proven Reddit Post templates', 'Market indirectly without getting banned'],
      image: 'https://izioxpadsoodegpuvgpl.supabase.co/storage/v1/object/public/leadlift_landingpage_videos/viral-banner.png'
    }
  ]

  return (
    <section id="how" className="container-page py-24">
      <h2 className="text-center text-3xl font-bold">Start growing in 3 simple steps</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {items.map((step, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="aspect-video w-full rounded-lg bg-gray-100 overflow-hidden">
              <img 
                src={step.image} 
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
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
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-medium text-amber-800">
                I got my account banned refining this tool, so that it won't happen to you
              </span>
            </div>
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
                      <div className="flex items-center gap-1 px-2 py-1.5 rounded hover:bg-gray-100 transition-colors pointer-events-none">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 011.414 0L10 14.586l5.293-4.879a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-900">{post.upvotes}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 rotate-180 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 011.414 0L10 14.586l5.293-4.879a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Comments */}
                    <div className="flex items-center gap-1.5 text-gray-600 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                    
                    {/* Save */}
                    <div className="text-gray-600 hover:text-gray-900 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    
                    {/* Share */}
                    <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 pointer-events-none">
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


function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 to-transparent" />
      <div className="container-page relative text-center">
        <h2 className="text-3xl font-bold">Ready to meet your next 100 customers?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Join founders using LeadLift.app to turn Reddit conversations into revenue.</p>
        <div className="mt-8">
          <a className="btn-primary text-base px-7 py-3.5" href="https://app.leadlift.app/">Start for Free</a>
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
      text: 'We booked 14 demos in two weeks from Reddit alone. The AI drafts are scarily good and kept our tone on point.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
    },
    {
      name: 'Marco D.',
      role: 'Indie hacker',
      text: 'Went from lurking to actually selling. The subreddit shortlist saved me months of guesswork.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
    },
    {
      name: 'Lena K.',
      role: 'Growth @ e‑commerce',
      text: 'Real conversations > ads. This feels like a superpower for community-led growth.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lena',
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
              <img 
                src={r.avatar} 
                alt={r.name}
                className="h-10 w-10 rounded-full bg-gray-200 object-cover"
              />
              <div className="text-left">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-gray-500">{r.role}</div>
              </div>
            </div>
            <p className="text-gray-700">"{r.text}"</p>
            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
          <a className="btn-primary mt-8 inline-flex w-full justify-center text-lg py-4" href="https://app.leadlift.app/">Start your free trial</a>
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
