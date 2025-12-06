import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | LeadLift.app',
  description: 'Read LeadLift.app privacy policy to understand how we collect, use, and protect your personal information when you use our Reddit marketing platform.',
  openGraph: {
    title: 'Privacy Policy | LeadLift.app',
    description: 'Read LeadLift.app privacy policy to understand how we collect, use, and protect your personal information when you use our Reddit marketing platform.',
    url: 'https://leadlift.app/privacy-policy',
  },
  alternates: {
    canonical: 'https://leadlift.app/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <div className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to LeadLift.app ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Reddit marketing platform and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information (name, email address, password)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Product descriptions and marketing content</li>
                    <li>Subreddit preferences and targeting criteria</li>
                    <li>Communication data when you contact our support team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usage data (pages visited, features used, time spent)</li>
                    <li>Device information (browser type, operating system, IP address)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and analytics data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Personalize your experience with our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With service providers who assist us in operating our platform (hosting, payment processing, analytics)</li>
                <li>To comply with legal obligations or respond to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to collect information about your activity, browser, and device. You can control cookies through your browser settings, but this may affect your ability to use certain features of our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-700 space-y-2">
                <p><strong>Email:</strong> privacy@leadlift.app</p>
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

