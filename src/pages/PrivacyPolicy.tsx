import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      {/* Header with back button */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-vibe-primary to-vibe-secondary bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>
          
          <div className="text-muted-foreground mb-8">
            <p className="text-sm">Effective Date: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <p className="mb-6">
                Vibe Guardian ("we," "us," or "our") respects your privacy. This Privacy Notice describes the processing of Personal Information (defined below) that is provided, collected, or shared through our Chrome extension and related services (collectively, the "Services"). It also describes your choices about the collection, sharing, and use of your Personal Information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">1. Personal Information We Collect</h2>
              <p className="mb-4">
                We may collect a range of Personal Information. "Personal Information" means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, to you.
              </p>
              <p className="mb-4">The types of Personal Information we collect may include:</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Extension Usage Data</strong> – Information about how you use our Chrome extension, including prompts you structure, websites visited while using the extension, and feature interactions.</li>
                <li><strong>Contact Information</strong> – If you contact us for support or feedback, we may collect your name, email address, and other contact details.</li>
                <li><strong>Technical Information</strong> – Browser type, extension version, IP address, and basic system information necessary for extension functionality.</li>
                <li><strong>User Preferences</strong> – Settings and configurations you choose within the extension to personalize your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">2. How We Collect Your Personal Information</h2>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Directly From You</strong> – When you install our extension, adjust settings, or contact us for support.</li>
                <li><strong>Through Extension Usage</strong> – As you interact with our Chrome extension features and functionality.</li>
                <li><strong>Through Chrome Extension APIs</strong> – We use Chrome's extension APIs to provide our services, which may collect certain browsing context for prompt enhancement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">3. How We Use Personal Information</h2>
              <p className="mb-4">To the extent permitted by applicable law, we may use Personal Information for the following purposes:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">Extension Functionality and Support</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our Chrome extension services</li>
                  <li>Enable prompt structuring and AI interaction features</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Remember your preferences and settings</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">Service Improvement and Development</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyze usage patterns to improve extension features</li>
                  <li>Develop new functionality and capabilities</li>
                  <li>Conduct research and analytics to enhance user experience</li>
                  <li>Fix bugs and optimize performance</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">Security and Compliance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Protect against misuse and ensure extension security</li>
                  <li>Comply with applicable laws and regulations</li>
                  <li>Investigate and prevent potential violations of our terms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">4. Sharing of Personal Information</h2>
              <p className="mb-4">We may share your Personal Information in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Service Providers</strong> – With trusted third-party service providers who help us operate and improve our extension, under strict confidentiality agreements.</li>
                <li><strong>Legal Obligations</strong> – When required by law, regulation, legal process, or to protect our rights and the safety of our users.</li>
                <li><strong>Business Transfers</strong> – In connection with a merger, acquisition, or sale of our business, with prior notice where legally required.</li>
                <li><strong>AI Services</strong> – Anonymized and aggregated data may be shared with AI service providers to improve prompt structuring capabilities, without identifying individual users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">5. Data Retention</h2>
              <p className="mb-4">
                We retain your Personal Information only as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Extension usage data is typically retained for analytical purposes for no more than 24 months, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your Personal Information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">7. Chrome Extension Specific Practices</h2>
              <p className="mb-4">
                Our Chrome extension operates with the following privacy practices:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>We only access webpage content when you actively use our extension features</li>
                <li>Prompt data is processed locally when possible and encrypted when transmitted</li>
                <li>We do not continuously monitor your browsing activity</li>
                <li>You can disable or uninstall the extension at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">8. Your Rights and Choices</h2>
              <p className="mb-4">You have the following rights regarding your Personal Information:</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>Access and review your Personal Information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your Personal Information</li>
                <li>Object to certain processing activities</li>
                <li>Uninstall the extension to stop all data collection</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at privacy@vibeguardian.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">9. Children's Privacy</h2>
              <p className="mb-4">
                Our extension is not intended for children under 13 years of age. We do not knowingly collect Personal Information from children under 13. If we learn that we have collected such information, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">10. International Data Transfers</h2>
              <p className="mb-4">
                Your Personal Information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">11. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We will notify you of material changes through the extension or by other reasonable means. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">12. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@vibeguardian.com</p>
                <p><strong>Website:</strong> https://vibeguardian.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;