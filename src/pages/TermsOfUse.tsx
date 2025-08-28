import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/c1a062f7-6456-4877-b1d2-36e1867c92aa.png" alt="Vibe Guardian" className="w-8 h-8" />
              <span className="font-bold text-xl">Vibe Guardian</span>
            </Link>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  Vibe Guardian ("Vibe Guardian", "we", or "us") makes the Vibe Guardian Chrome extension and its proprietary Service available for your use subject to the terms and conditions herein and any additional terms contained in any subscription plan through the Chrome Web Store or our website (collectively, this "Agreement"). This Agreement is between Vibe Guardian and the individual or entity that accepts this Agreement by installing or using our Chrome extension ("User" or "you") and is effective as of the date of acceptance ("Effective Date").
                </p>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">1. DEFINITIONS</h2>
                <p className="text-foreground/80 mb-4">The terms in this Section 1 shall have the meanings under this Agreement as described below:</p>
                
                <div className="space-y-4 ml-4">
                  <div>
                    <strong className="text-foreground">1.1 "Authorized User"</strong>
                    <p className="text-foreground/80 mt-1">means you personally if you are a single user, or an individual who is authorized by you to access and use the Service within your organization.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.2 "User Data"</strong>
                    <p className="text-foreground/80 mt-1">means, collectively, all data that is: (1) provided by you directly to Vibe Guardian; (2) processed by Vibe Guardian in connection with your use of the Service; and (3) generated through your interactions with AI platforms while using our Chrome extension.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.3 "Documentation"</strong>
                    <p className="text-foreground/80 mt-1">means any documentation made available by Vibe Guardian pertaining to the Service including user guides, help documentation, or technical information relating to the Chrome extension.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.4 "Fees"</strong>
                    <p className="text-foreground/80 mt-1">means all fees, charges, and other amounts for premium features of the Service, if applicable.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.5 "Service"</strong>
                    <p className="text-foreground/80 mt-1">means the Vibe Guardian Chrome extension, including all features, software, and any updates that Vibe Guardian provides to you.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.6 "Term"</strong>
                    <p className="text-foreground/80 mt-1">means the period during which you have access to and may use the Service.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">2.1 Grant of Access.</strong>
                    <p className="text-foreground/80 mt-1">Subject to your compliance with this Agreement, Vibe Guardian hereby grants to you a limited, revocable, non-exclusive, non-transferable right to install, access and use the Chrome extension solely for your personal or internal business purposes. If you do not comply with the terms of this Agreement, Vibe Guardian reserves the right to revoke, suspend, or limit your access to the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.2 Modification.</strong>
                    <p className="text-foreground/80 mt-1">You agree that Vibe Guardian has the right to change, modify, add to, or discontinue any aspect or feature of the Service at any time; provided, however, Vibe Guardian will use commercially reasonable efforts to ensure it does not materially degrade the core functionality of the Service. Updates may be delivered automatically through the Chrome Web Store.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.3 Removal of Access.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian reserves the right to suspend or refuse access to the Service if: (1) you breach this Agreement; (2) Vibe Guardian discontinues the Service; (3) there is a technical or security issue; or (4) you engage in fraudulent or illegal activities.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.4 Availability.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian uses commercially reasonable efforts to maintain the Service; however, the Service may be inaccessible due to equipment malfunctions, maintenance, or causes beyond our control. The Service is not intended to be available 100% of the time.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.5 Free Trial.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian may provide access to premium features for a limited time for free. Upon completion of any free trial period, continued access to premium features will require payment.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.6 Third-Party Integration.</strong>
                    <p className="text-foreground/80 mt-1">The Service integrates with third-party AI platforms and websites. Your use of such platforms remains subject to their respective terms and conditions. Vibe Guardian is not responsible for any third-party services.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.7 Ownership of Intellectual Property.</strong>
                    <p className="text-foreground/80 mt-1">All intellectual property rights in the Service, including patents, copyrights, trademarks, and trade secrets, remain the property of Vibe Guardian. You receive only a limited right to use the Service as described in this Agreement.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">3. USER RESPONSIBILITIES</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">3.1 Account Registration.</strong>
                    <p className="text-foreground/80 mt-1">You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to provide truthful and accurate information during registration.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.2 Unauthorized Use.</strong>
                    <p className="text-foreground/80 mt-1">You must immediately notify Vibe Guardian of any unauthorized use of your account or security breach. You are responsible for any damages resulting from unauthorized access through your account.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.3 Representations.</strong>
                    <p className="text-foreground/80 mt-1">You represent that: (1) you have legal capacity to enter this Agreement; (2) you will comply with all terms; (3) you have provided accurate information; and (4) your use will not violate any other agreements or laws.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.4 Restrictions.</strong>
                    <p className="text-foreground/80 mt-1">You may not: (1) sell, transfer, or distribute the Service; (2) reverse engineer or attempt to access source code; (3) use the Service for competing products; (4) interfere with the Service's operation; (5) circumvent security measures; (6) use for unlawful purposes; (7) introduce malicious code; (8) impersonate others; or (9) conduct attacks against the Service.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">4. AI Interaction Disclaimer</h2>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground/80">
                    <strong>Important:</strong> Vibe Guardian is a tool designed to help structure and improve your interactions with AI platforms. We do not provide AI services directly, nor do we guarantee the accuracy, reliability, or appropriateness of responses from third-party AI platforms. Users are solely responsible for evaluating and using AI-generated content appropriately. Always verify important information and use your professional judgment when relying on AI assistance.
                  </p>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">5. DATA RIGHTS, USES, AND LIMITATIONS</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">5.1 User Data.</strong>
                    <p className="text-foreground/80 mt-1">You retain ownership of your data. You grant Vibe Guardian a license to process your data to provide the Service, including improving our prompt templates and user experience. We do not sell your data to third parties. All data handling follows our Privacy Policy.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.2 Data Representations.</strong>
                    <p className="text-foreground/80 mt-1">You represent that any data you provide does not infringe rights, violate laws, or contain inappropriate content. You are responsible for ensuring you have proper rights to any data you input.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.3 Privacy Compliance.</strong>
                    <p className="text-foreground/80 mt-1">You are responsible for compliance with privacy laws applicable to your use of the Service. Do not transmit sensitive personal data such as financial information, social security numbers, or health data through the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.4 Usage Analytics.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian may collect de-identified usage data to improve the Service. This data cannot be used to identify individual users and may be used for product development and research.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.5 Feedback.</strong>
                    <p className="text-foreground/80 mt-1">Any feedback you provide about the Service becomes the property of Vibe Guardian and may be used without compensation to you.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This document contains Part 1 of our Terms of Use. Additional terms may apply and will be added as our service evolves.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;