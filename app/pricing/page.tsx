import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Reddit Marketing Tool | LeadLift.app',
  description: 'Simple, affordable pricing for Reddit marketing. Start with a 3-day free trial, then $25/month. Unlimited AI lead generation, comment generation, subreddit targeting, and priority support. No hidden fees, cancel anytime.',
  openGraph: {
    title: 'Pricing - Reddit Marketing Tool | LeadLift.app',
    description: 'Simple, affordable pricing for Reddit marketing. Start with a 3-day free trial, then $25/month. Unlimited AI lead generation, comment generation, subreddit targeting, and priority support.',
    url: 'https://leadlift.app/pricing',
  },
  alternates: {
    canonical: 'https://leadlift.app/pricing',
  },
}

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -top-12 h-80 w-80 rounded-full bg-brand-100 blur-3xl" />
        <div className="container-page pt-24 pb-16 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Get started with a <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">3 day free trial</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              One plan, Affordable pricing, No hidden fees, Cancel anytime.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-2xl border-2 border-brand-300 p-8 shadow-glow bg-white">
              <div className="flex items-center justify-center">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">Most Popular</span>
              </div>
              <h2 className="mt-4 text-center text-3xl font-semibold">Pro</h2>
              <div className="mt-8 text-center">
                <div className="text-lg font-medium text-gray-600">3 days free</div>
                <div className="mt-3 text-5xl font-bold">
                  then <span className="text-4xl">$25</span><span className="text-2xl font-medium text-gray-500">/month</span>
                </div>
              </div>
              <p className="mt-6 text-center text-lg text-gray-600">
                For businesses and marketers who want to grow on Reddit
              </p>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What's included:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">A growing library 50+ viral post templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">Unlimited AI lead generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">Unlimited AI comment generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">Subreddit targeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">Relevant post tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg">Priority support</span>
                  </li>
                </ul>
              </div>
              
              <a className="btn-primary mt-10 inline-flex w-full justify-center text-lg py-4" href="https://app.leadlift.app/">
                Start your free trial
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="border-t border-gray-100 py-16 bg-gray-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Is this against Reddit rules?</h3>
                <p className="text-gray-600">We help you participate authentically. You approve all replies before posting.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Who is this for?</h3>
                <p className="text-gray-600">Indie founders, B2B, and consumer products that benefit from community-driven discovery.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">How much time does it take?</h3>
                <p className="text-gray-600">A few minutes to set up. After that, check your inbox to approve replies and chat.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes! You can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="border-t border-gray-100 py-10">
        <div className="container-page flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} leadlift.app</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

