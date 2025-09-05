import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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
                Bray Media LLM ("Bray Media," "we," "us," or "our"), the owner of Viberly.ai, respect your privacy. This Privacy Notice describes the processing of Personal Information (defined below) that is provided, collected, or shared on the sites, applications, social media pages, or other platforms that link to this Privacy Notice (collectively, the "Services"). It also describes your choices about the collection, sharing, and use of your Personal Information.
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
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">8. Your Choices and Controls</h2>
              <p className="mb-4">
                Depending on where you live, you may have the right to exercise certain controls and choices regarding our collection, use, and sharing of your Personal Information. To opt-out of marketing communications please email us at privacy@viberly.ai or by following the instructions included in the email or text correspondence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">9. Children's Privacy</h2>
              <p className="mb-4">
                We do not knowingly collect or solicit any Personal Information from children under the age of 18. In the event that we learn that we have collected Personal Information from a child, we will promptly take steps to delete that information. If you are a parent or legal guardian and think your child has given us their Personal Information, you can email us at privacy@viberly.ai or contact us using the information listed below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">10. International Data Transfers</h2>
              <p className="mb-4">
                Your Personal Information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">11. California Residents</h2>
              <p className="mb-4">
                Pursuant to California's Shine the Light statute (Cal. Civ. Code Sec. 1798.83), you can control if we share Personal Information with third parties for their marketing purposes. To opt-out of us sharing your Personal Information with third parties for such promotional purposes, please email us at privacy@viberly.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">12. Individuals in the European Union, European Economic Area, and United Kingdom</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">B. Marketing</h3>
                <p className="mb-4">
                  Bray Media does not process Personal Data for the purpose of marketing without first obtaining your express, opt-in consent or having a legitimate interest for doing so. You have the right to object to the processing of Personal Data for marketing purposes at any time by contacting us at privacy@viberly.ai.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">D. Automated Decision Making</h3>
                <p className="mb-4">
                  Bray Media does not make any automated decisions on your behalf or about you without first obtaining your express, opt-in consent. In the event we secure your consent to do so, you have the right to object to the processing of Personal Data via automated decision making at any time by contacting us at privacy@viberly.ai.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-vibe-secondary">F. Your Privacy Rights</h3>
                <p className="mb-4">
                  To exercise your rights, please submit a request to us at privacy@viberly.ai.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">13. Changes to this Privacy Note</h2>
              <p className="mb-4">
                Please note that we may modify or update this Privacy Notice from time to time, so please review it periodically. We may provide you with an updated Privacy Notice if material changes are made. Unless otherwise indicated, any changes to this Privacy Notice will apply immediately upon posting to the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-vibe-primary">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our practices or this Privacy Notice, please contact us at privacy@viberly.ai. You may also write to us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Bray Media LLC</strong></p>
                <p>3039 Nowitzki Way</p>
                <p>Suite 3211 Dallas, TX 75219</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;