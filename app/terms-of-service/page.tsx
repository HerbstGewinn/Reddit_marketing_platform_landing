import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | LeadLift.app',
  description: 'Read LeadLift.app terms of service to understand the rules and guidelines for using our Reddit marketing platform and services.',
  openGraph: {
    title: 'Terms of Service | LeadLift.app',
    description: 'Read LeadLift.app terms of service to understand the rules and guidelines for using our Reddit marketing platform and services.',
    url: 'https://leadlift.app/terms-of-service',
  },
  alternates: {
    canonical: 'https://leadlift.app/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <div className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using LeadLift.app ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LeadLift.app is a Reddit marketing platform that provides AI-powered tools for lead generation, comment generation, subreddit targeting, and post tracking. Our services help businesses and marketers engage authentically on Reddit while complying with platform rules.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  To use certain features of our Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept all responsibility for activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any applicable laws, regulations, or Reddit's Terms of Service</li>
                <li>Spam, harass, or harm other users or Reddit communities</li>
                <li>Post misleading, fraudulent, or deceptive content</li>
                <li>Impersonate any person or entity</li>
                <li>Upload malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Reddit Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for ensuring that your use of our Service complies with Reddit's Terms of Service, Content Policy, and community guidelines. We provide tools to help you engage authentically, but you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Review and approve all content before posting on Reddit</li>
                <li>Disclose your relationship with any products or services you promote</li>
                <li>Avoid spam, self-promotion, or manipulative voting</li>
                <li>Respect Reddit's rules and community standards</li>
                <li>Accept responsibility for any violations of Reddit's policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Subscription and Billing</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">6.1 Free Trial</h3>
                  <p>
                    We offer a 3-day free trial. After the trial period, your subscription will automatically begin unless you cancel before the trial ends.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">6.2 Billing</h3>
                  <p>
                    Subscriptions are billed monthly at $25/month. Payment is processed through secure third-party payment processors. By subscribing, you authorize us to charge your payment method.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">6.3 Cancellation</h3>
                  <p>
                    You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. No refunds are provided for partial billing periods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">6.4 Price Changes</h3>
                  <p>
                    We reserve the right to modify subscription prices. Existing subscribers will be notified in advance of any price changes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by LeadLift.app and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. User Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of any content you create using our Service. By using the Service, you grant us a license to use, store, and process your content solely to provide and improve our services. You are responsible for ensuring your content does not violate any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitation of Liability</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Service will be uninterrupted, secure, or error-free</li>
                  <li>Results will meet your expectations</li>
                  <li>Reddit will not ban or restrict your account</li>
                  <li>Any errors will be corrected</li>
                </ul>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless LeadLift.app and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after changes become effective constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-gray-700 space-y-2">
                <p><strong>Email:</strong> legal@leadlift.app</p>
                <p><strong>Website:</strong> <a href="/" className="text-brand-600 hover:text-brand-700">leadlift.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-10">
        <div className="container-page flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} leadlift.app</span>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

