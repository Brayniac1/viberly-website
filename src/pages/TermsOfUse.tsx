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

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">6. FEES AND PAYMENT</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">6.1 Payment Terms.</strong>
                    <p className="text-foreground/80 mt-1">You agree to pay all applicable fees for premium features of the Service. Fees are non-refundable except as required by law. Usage above your plan limits may result in additional charges. Payments more than thirty (30) days past due will bear a late payment fee of 1.5% per month or the maximum permitted by law.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.2 Taxes.</strong>
                    <p className="text-foreground/80 mt-1">Service fees are exclusive of all taxes, and you are responsible for payment of all applicable taxes, excluding only United States income taxes imposed on Vibe Guardian.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.3 Payment Method.</strong>
                    <p className="text-foreground/80 mt-1">You agree to keep your payment information current and authorize Vibe Guardian to charge your payment method for all amounts due under this Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.4 Billing.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian bills customers in advance for recurring subscriptions. You must notify us within thirty (30) days of any billing errors. We do not issue refunds for periods of inactivity.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.5 Price Changes.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian reserves the right to change pricing upon notice to you via email or our website.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">7. TERM AND TERMINATION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">7.1 Term.</strong>
                    <p className="text-foreground/80 mt-1">This Agreement begins when you install or use the Service and continues until terminated. Subscriptions automatically renew unless cancelled at least thirty (30) days before renewal.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">7.2 Termination.</strong>
                    <p className="text-foreground/80 mt-1">Either party may terminate this Agreement at any time. You may cancel by uninstalling the extension or contacting support. Upon termination, your access to the Service will cease immediately. Vibe Guardian may suspend or terminate your access for violation of this Agreement.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">8. CONFIDENTIAL INFORMATION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">8.1 Definition.</strong>
                    <p className="text-foreground/80 mt-1">Confidential Information includes non-public, proprietary information marked as confidential, the Service's source code, pricing structure, unreleased features, and the terms of this Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">8.2 Exceptions.</strong>
                    <p className="text-foreground/80 mt-1">Information is not confidential if it becomes publicly known through proper means, was known prior to disclosure, is independently developed, or must be disclosed by law.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">8.3 Obligations.</strong>
                    <p className="text-foreground/80 mt-1">Each party agrees to protect the other's confidential information with the same care used for its own confidential information, but not less than reasonable care.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">9. NO WARRANTY; DISCLAIMER</h2>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground/80 font-medium mb-2">IMPORTANT DISCLAIMER:</p>
                  <p className="text-foreground/80 text-sm">
                    VIBE GUARDIAN MAKES NO WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." YOU ASSUME ALL RISK FOR YOUR USE OF THE SERVICE. VIBE GUARDIAN DOES NOT GUARANTEE ANY RESULTS OR IMPROVEMENTS TO YOUR AI INTERACTIONS. THE SERVICE MAY CONTAIN ERRORS OR BE INTERRUPTED.
                  </p>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">10. INDEMNIFICATION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">10.1 Vibe Guardian Indemnification.</strong>
                    <p className="text-foreground/80 mt-1">Vibe Guardian will defend against third-party claims that the Service infringes United States patents, trademarks, or copyrights, provided you promptly notify us and give us control of the defense.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">10.2 Your Indemnification.</strong>
                    <p className="text-foreground/80 mt-1">You agree to defend and hold harmless Vibe Guardian from claims arising from: (1) your violation of this Agreement or applicable laws; (2) infringement by you or through your account; (3) your data or content; (4) breach of privacy or data protection laws.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">11. LIMITATION OF LIABILITY</h2>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground/80 font-medium mb-2">LIABILITY LIMITS:</p>
                  <p className="text-foreground/80 text-sm">
                    IN NO EVENT WILL EITHER PARTY BE LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST DATA OR PROFITS. VIBE GUARDIAN'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                  </p>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">12. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">12.1 Governing Law.</strong>
                    <p className="text-foreground/80 mt-1">This Agreement is governed by the laws of the State of Texas. Any disputes shall be resolved in federal or state courts in Texas.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">12.2 Dispute Resolution.</strong>
                    <p className="text-foreground/80 mt-1">Before initiating legal action, parties agree to attempt resolution through executive management discussion and, if necessary, mediation. Each party must attend mediation in good faith.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">13. MISCELLANEOUS</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">13.1 Independent Contractors.</strong>
                    <p className="text-foreground/80 mt-1">You and Vibe Guardian are independent contractors, not agents or employees of each other.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.2 Notices.</strong>
                    <p className="text-foreground/80 mt-1">Notices shall be in writing and sent via email. You consent to receiving notices electronically.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.3 Force Majeure.</strong>
                    <p className="text-foreground/80 mt-1">Neither party is liable for delays caused by conditions beyond reasonable control, including natural disasters, government actions, or technical failures.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.4 Entire Agreement.</strong>
                    <p className="text-foreground/80 mt-1">This Agreement constitutes the entire agreement between parties. Vibe Guardian may update this Agreement by posting changes on our website. Continued use constitutes acceptance of changes.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.5 Severability.</strong>
                    <p className="text-foreground/80 mt-1">If any provision is deemed invalid, the remaining provisions remain in full force and effect.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.6 Assignment.</strong>
                    <p className="text-foreground/80 mt-1">Neither party may assign this Agreement without consent, except in connection with a merger, acquisition, or sale of assets.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.7 Survival.</strong>
                    <p className="text-foreground/80 mt-1">Provisions regarding intellectual property, disclaimers, liability, indemnification, and governing law survive termination of this Agreement.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground/80 text-center">
                    <strong>© 2024 Vibe Guardian. All rights reserved.</strong><br/>
                    For questions about these terms, please contact us through our Chrome extension or website.
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