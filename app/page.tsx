import Navbar from '@/components/Navbar'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-12 h-80 w-80 rounded-full bg-brand-100 blur-3xl" />
      <div className="container-page pt-24 pb-16 text-center md:pt-28 md:pb-24">
        <span className="mx-auto inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">NEXT GENERATION OF REDDIT MARKETING</span>
        <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Get hundreds of customers from Reddit
          <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">On autopilot</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Describe your product, and our AI finds buyers on Reddit 24/7 — helping you
          join conversations, build trust, and convert.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#cta" className="btn-primary">Start Getting Customers for Free</a>
          <a href="#how" className="text-sm font-medium text-gray-700 hover:text-gray-900">See how it works</a>
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
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Join founders using redditmarketing.co to turn Reddit conversations into revenue.</p>
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
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Real teams using redditmarketing.co to turn threads into revenue.</p>
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
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold">Simple, fair pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Start free. Upgrade when you are ready to scale.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="mt-2 text-sm text-gray-600">For testing the waters</p>
          <div className="mt-4 text-3xl font-bold">Free</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• AI product setup</li>
            <li>• 3 tracked subreddits</li>
            <li>• 20 AI reply drafts / mo</li>
          </ul>
          <a className="btn-primary mt-6 inline-flex w-full justify-center" href="#">Get started</a>
        </div>
        <div className="rounded-2xl border-2 border-brand-300 p-6 shadow-glow">
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">Most Popular</span>
          <h3 className="mt-2 text-lg font-semibold">Growth</h3>
          <p className="mt-2 text-sm text-gray-600">Everything to scale</p>
          <div className="mt-4 text-3xl font-bold">$49<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• 15 tracked subreddits</li>
            <li>• Unlimited reply drafts</li>
            <li>• Inbox + follow-ups</li>
          </ul>
          <a className="btn-primary mt-6 inline-flex w-full justify-center" href="#">Start free trial</a>
        </div>
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="mt-2 text-sm text-gray-600">For teams and agencies</p>
          <div className="mt-4 text-3xl font-bold">$99<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• Unlimited subreddits</li>
            <li>• Team collaboration</li>
            <li>• Priority support</li>
          </ul>
          <a className="btn-primary mt-6 inline-flex w-full justify-center" href="#">Contact sales</a>
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
        <span>© {new Date().getFullYear()} redditmarketing.co</span>
        <div className="flex gap-4">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
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
