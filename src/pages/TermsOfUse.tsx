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
              <img src="/lovable-uploads/viberly-logo.svg" alt="Viberly" className="w-8 h-8" />
              <span className="font-bold text-xl">Viberly</span>
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
                  Bray Media LLC ("Bray Media", "we", or "us") makes the Viberly website and its proprietary Service, including Viberly.ai, available for your use subject to the terms and conditions herein and any additional terms contained in any Order through the Bray Media website or app or attached hereto (collectively, this "Agreement").
                </p>

                <p className="text-foreground/80 leading-relaxed mt-4">
                  The Order is for Services under a plan level as detailed on the Viberly website pricing pages, or a specific individualized plan created for a Customer or combination of plans.
                </p>

                <p className="text-foreground/80 leading-relaxed mt-4">
                  This Agreement is between Bray Media and the individual or entity that accepts this Agreement by physical or electronic signature ("Customer" or "you") and is effective as of the date of acceptance ("Effective Date"). If you are an individual accepting this Agreement on behalf of your employer, you agree that your acceptance hereby binds your employer to this Agreement in the same manner as if this Agreement was executed by your employer in its corporate capacity. The disclaimers, terms, and conditions in this Agreement are of general application and may be supplemented by additional policies and procedures of specific application that Bray Media may disclose from time-to-time. To the extent executed, Customer agrees that the Data Processing Agreement is hereby incorporated into this Agreement as Exhibit A forms an integral part of this Agreement and that Customer has read and agrees to be bound by its terms to the extent Customer transmits Personal Data to Bray Media.
                </p>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">DEFINITIONS</h2>
                <p className="text-foreground/80 mb-4">The terms in this Section 1 shall have the meanings under this Agreement as described below:</p>
                
                <div className="space-y-4 ml-4">
                  <div>
                    <strong className="text-foreground">1.1 "Authorized User"</strong>
                    <p className="text-foreground/80 mt-1">means (1) you personally if you are a single user transacting directly with Bray Media; or (2) an individual who is authorized by Customer to access and use the Service within the Customer organization. Authorized Users of Customer may include, for example, employees, consultants, and contractors.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.2 "Customer Data"</strong>
                    <p className="text-foreground/80 mt-1">means, collectively, all data that is: (1) provided by you directly to Bray Media (including Confidential Information); (2) processed by Bray Media in connection with your Authorized User's use and administration of the Service; and (3) processed by Bray Media in connection with Customer's identification, recruitment, and use of Participants or other use of the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.3 "Documentation"</strong>
                    <p className="text-foreground/80 mt-1">means any documentation made available by Bray Media pertaining to the Service including, as applicable, any accompanying or online user guides or technical information relating to the Service, in each case, as may be updated or amended by or on behalf of Bray Media from time to time.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.4 "Fees"</strong>
                    <p className="text-foreground/80 mt-1">means all fees, charges, and other amounts set forth in the Order for the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.5 "Order"</strong>
                    <p className="text-foreground/80 mt-1">means a digital order for Services under a plan executed by Bray Media that incorporates the terms of this Agreement. In the event of a conflict between terms, the terms of this Agreement shall govern unless the Order specifically references a particular section name and number within this Agreement with the express intent to modify the terms therein.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.6 "Participant"</strong>
                    <p className="text-foreground/80 mt-1">means any natural person that is not an Authorized User which Customer has determined to incorporate in Customer's artistic expression or other cinematic or digital rendering.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.7 "Personal Data"</strong>
                    <p className="text-foreground/80 mt-1">shall have the meaning set forth in our Privacy Statement or, to the extent executed, the Data Processing Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.8 "Service" or "Services"</strong>
                    <p className="text-foreground/80 mt-1">means the proprietary software, products, services and any updates that Bray Media provides to Customer pursuant to the terms of this Agreement and any Orders.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">1.9 "Term"</strong>
                    <p className="text-foreground/80 mt-1">shall have the meaning set forth in Section 6.1.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">2.1 Grant of Access.</strong>
                    <p className="text-foreground/80 mt-1">On the condition you pay all Fees and otherwise comply with your obligations under this Agreement, and subject further to additional terms of Third Party Products made available to you in connection with the Service, Bray Media hereby grants to you a limited, revocable, non-exclusive, non-transferable (except as provided in Section 12.11), right to access and use the Services set forth under one or more Orders and related Documentation solely in connection with your personal or internal business purposes. You may procure additional Services during the Term by entering additional Orders with Bray Media. Other than as expressly granted in this Agreement, no other rights or licenses to Bray Media Materials (defined below) are granted. If you do not comply with the terms of this Agreement, Bray Media reserves the right to revoke, suspend, or limit your right to access to the Service. Any use of the Service that exceeds the rights expressly granted in this Agreement is strictly prohibited and constitutes a violation of this Agreement, which may result in the suspension or termination of your right to access and use the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.2 Modification.</strong>
                    <p className="text-foreground/80 mt-1">You agree that Bray Media has the right to change, modify, add to, or discontinue any aspect or feature of the Service or plan level at any time without any obligation to give you advance notice of any changes; provided, however, Bray Media will use commercially reasonable efforts to ensure it does not materially degrade or diminish the features or functionality of the Service. From time to time, Bray Media may release upgrades, fixes, or new versions of the Service, although these upgrades may not be consistent across all platforms and devices.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.3 Removal of Access.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media reserves the right to reasonably suspend or refuse access to the Service for any Authorized User in the event that: (1) you or your Authorized User breach or violate this Agreement or other incorporated agreements or guidelines; (2) Bray Media discontinues the Service; (3) there is a technical or security issue or problem that requires temporary suspension; or (4) you or your Authorized User engage in fraudulent or illegal activities or a material breach of your obligations under the terms of this Agreement. You further agree that such measures may be taken in Bray Media's sole but reasonable discretion and without any liability to you or any third party.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.4 Defects and Availability.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media uses commercially reasonable efforts to maintain the Service; however, Bray Media is not responsible for any unanticipated defects or failures associated with the Service or any damages to you (either direct or indirect) that may result from any such defects or failures. Bray Media is not obligated to provide you support for, and shall not be responsible or liable for, any errors in the Service or any damages resulting from your failure to properly implement the Service on your web properties in accordance with the Documentation. The Service may be inaccessible or inoperable for any reason including, without limitation: (1) equipment malfunctions; (2) periodic maintenance procedures or repairs which may be undertaken from time-to-time by Bray Media or its third-party service providers; or (3) any other causes beyond Bray Media's reasonable control. You further understand that the Service is provided over the Internet and hosted by a third-party provider, so the quality and availability of the Service may be affected by factors outside of Bray Media's control. The Service is not intended to be available 100% of the time and Bray Media does not make any guarantees regarding the reliability or availability of the Service and will not be liable to you or any third party for damages or losses related to the Service being unavailable.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.5 Free Trial.</strong>
                    <p className="text-foreground/80 mt-1">When you register for the Service, Bray Media may provide you a limited, revocable, non-exclusive, non-transferable right to use the Service for a limited time for free or on a "freemium" basis ("Free Trial Period"). The term for the Free Trial Period will begin on the date of your registration for the Service and will continue for a period determined by Bray Media, unless extended by Bray Media in its sole discretion or sooner terminated in accordance with the termination or suspension rights set forth in this Agreement. Upon completion of the Free Trial Period, you will be presented with the option to terminate your access to the Service or convert to one of the paid Service plans by providing payment information in addition to the information you provided to Bray Media upon registration.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.6 Third-Party Products.</strong>
                    <p className="text-foreground/80 mt-1">The Service may permit access to Third-Party Products. "Third-Party Products" means any products, content, services, information, websites, or other materials that are owned by third parties and are incorporated into or accessible through the Services. For purposes of this Agreement, such Third-Party Products are subject to their own terms and conditions presented to you for acceptance within the Service by website link or otherwise. If you do not agree to abide by the applicable terms for any such Third-Party Products, then you should not install, access, or use such Third-Party Products. You further acknowledge and agree that Bray Media will not be responsible or liable, directly, or indirectly, and you hold Bray Media harmless for any damage or loss caused by your use of or reliance upon any such Third-Party Products.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">2.7 Ownership of Intellectual Property.</strong>
                    <p className="text-foreground/80 mt-1">All patents, copyrights, moral rights, trade secrets, trademarks, service marks, publicity rights, and other proprietary rights (collectively, "Intellectual Property Rights") and all systems, databases, technology, platforms, algorithms, information, data, documents, materials, and works which Bray Media has provided, used, or made available in connection with the Service (collectively, the "Bray Media Materials") shall be and remain at all times the property of Bray Media. You are not acquiring any Intellectual Property Rights in or to the Bray Media Materials other than a non-exclusive right to access and use the Service solely in accordance with the terms of this Agreement. The Bray Media Materials may not be reproduced, recreated, sublicensed, modified, accessed, or used in any manner or disseminated or distributed to any other party in violation of this Agreement.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">CUSTOMER RESPONSIBILITIES</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">3.1 Account Registration.</strong>
                    <p className="text-foreground/80 mt-1">When accessing the Service for the first time, you will be required to provide certain information during a registration process. Once Bray Media receives such information, you will be provided with an account and login information, including a username and password. As the account owner, you and your Authorized Users (who have been authorized by you to use the Service) are the only persons authorized to access and use your account. You and your Authorized Users are responsible for maintaining the confidentiality of your username and password and you are fully responsible for all activities that occur under your username and password by all Authorized Users. You agree that you will provide truthful and accurate information during the registration process. Bray Media may refuse to grant you a particular username for any reason, including, without limitation, if Bray Media has reason to believe that such username impersonates someone else, is protected by trademark or other proprietary rights, or is vulgar or otherwise offensive.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.2 Unauthorized Use and Information Changes.</strong>
                    <p className="text-foreground/80 mt-1">You must immediately notify Bray Media if your registration information changes, or you learn of or have reason to suspect any unauthorized use of your account or any other breach of security. You are responsible for any damages to Bray Media or the Service resulting from unauthorized access to the Service from your account and Bray Media will have no liability to you or any third party for damages or loss related to such unauthorized access or use.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.3 Representations.</strong>
                    <p className="text-foreground/80 mt-1">You hereby represent and warrant that: (1) you have the legal capacity and authority to enter into and perform your obligations under this Agreement; (2) you will comply with the terms and conditions of this Agreement and any other agreement to which you are subject that is related to your use of the Service or any part thereof; (3) you have provided and will maintain accurate and complete information, including, without limitation, your legal name, email address, and any other information Bray Media may reasonably require; and (4) your access to and use of the Service or any part thereof will not constitute a breach or violation of any other agreement, contract, terms of use or any law or regulation to which you are subject.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">3.4 Restrictions.</strong>
                    <p className="text-foreground/80 mt-1">You may not: (1) license, sublicense, sell, resell, transfer, assign, distribute, or otherwise commercially exploit or make available to any third party any portion of our Service in any way; (2) copy (except as required to place the Bray Media JavaScripts on your website), modify, adapt, alter, translate, create derivative works, reverse engineer, decompile, disassemble, or otherwise attempt to learn the source code, communications protocol, structure, or ideas upon which the Service is based; (3) use the Service or any data, content, or information accessed through the Service to develop a competing service or product; (4) use any device, software, or routine intended to damage or otherwise interfere with the proper functioning of the Service, servers, data centers, or networks connected to the Service or take any other action that interferes with any other person's use of the Service; (5) decrypt, transfer, create Internet links to the Service, or "frame" or "mirror" the Service on any other server or wireless or Internet-based device; (6) use or merge the Service or any component thereof with other software, databases, or services not provided or approved by Bray Media; (7) circumvent or attempt to circumvent any electronic protection measures in place to regulate or control access to the Service, or remove, obscure, or alter any notices or indications of any Intellectual Property Rights, any trade names, trademarks, service marks, logos, trade dress, and any other distinctive or proprietary symbols, labels, designs, or designations, or any electronic notices; (8) use the Service for any fraudulent or otherwise unlawful purposes or in violation of this Agreement; (9) develop, distribute, or sell any software or other functionality capable of launching, being launched from, or otherwise integrated with the Service; (10) use any bot, spider, or other automatic or manual device or process for the purpose of harvesting or compiling information on the Service for any reason; (11) access or attempt to access any other Authorized User's account or use the Service in a way that prevents or inhibits another Authorized User from enjoying the Service; (12) use any data, content, or information made available through the Service in any manner that misappropriates any trade secret or infringes any copyright, trademark, patent, rights of publicity, or other proprietary right of any party; (13) introduce into the Service any virus, rogue program, Trojan horse, worm or other malicious or intentionally destructive code, software routines, or equipment components designed to permit unauthorized access to or disable, erase, or otherwise harm the Service, or perform any such actions; (14) introduce into the Service any back door, time bomb, drop dead device, or other software routine designed to disable a computer program automatically with the passage of time or under the positive control of an unauthorized person; (15) delete, modify, hack, or attempt to change or alter the Service, any data, content, or information made available through the Service, or any notices on the Service; (16) connect to or access any Bray Media computer system or network other than the Service; (17) impersonate any other person or entity to use or gain access to the Service; or (18) conduct or otherwise participate in any distributed denial-of-service attack or similar malicious attack intended or designed to artificially delay, disrupt or otherwise adversely affect the Service or any other Authorized User's access to or use of the Service. Bray Media reserves the right to fully investigate and prosecute violations of any of the above. Bray Media may involve and cooperate with law enforcement authorities in prosecuting Authorized Users who violate this Agreement.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Disclaimer</h2>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div>
                    <strong className="text-foreground">4.1 Legal Disclaimer.</strong>
                    <p className="text-foreground/80 mt-1">
                      Viberly is not a law firm and does not offer legal advice. The services provided by Viberly, including AI-generated contract drafts and suggestions, are for informational purposes only and are not a substitute for professional legal advice. We strongly recommend that all users consult with a qualified attorney to review any contracts created or modified using our services to ensure their legal validity and to address any specific legal concerns.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">DATA RIGHTS, USES, AND LIMITATIONS</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">5.1 Customer Data.</strong>
                    <p className="text-foreground/80 mt-1">As between Bray Media and you, you will at all times retain ownership of Customer Data. You hereby grant to Bray Media a nonexclusive, worldwide, royalty-free, fully paid, transferable license to host, cache, record, copy, view, and display Customer Data for the purpose of providing the Service to you and for internal use by Bray Media (such as for the billing, activation, provision, maintenance, upgrades, updates, improvement of the Service, deactivation and/or use of the Service and/or related products and/or services). When you upload contracts or other documents to Viberly, Bray Media may use this data to enhance our AI models to provide a better user experience. Bray Media does not sell your data to any third parties. All data is handled in accordance with our Privacy Policy, which outlines how we collect, use, and protect your information. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and right to use such Customer Data. Bray Media does not guarantee the security or availability of Customer Data and is not responsible for any loss of damage to Customer Data. You acknowledge and agree that you bear sole responsibility for adequately controlling, processing, storing, and backing up Customer Data. Bray Media reserves the right, but not the obligation, to refuse to post or to remove any information or materials, in whole or in part, that Bray Media believes to be unacceptable, undesirable, or in violation of this Agreement or the rights of third parties.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.2 Customer Data Representations.</strong>
                    <p className="text-foreground/80 mt-1">You represent, warrant, and covenant that you will not publish, post, upload, record, or otherwise distribute or transmit any Customer Data or other material that: (1) infringes or would infringe any copyright, patent, trademark, trade secret or other Intellectual Property Rights or proprietary right of any party, or any rights of publicity or privacy of any party; (2) violates any law, statute, ordinance, or regulation; (3) is inappropriate, profane, defamatory, libelous, obscene, indecent, threatening, harassing, or otherwise unlawful; (4) is harmful to minors or otherwise pornographic; (5) is materially false, misleading, or inaccurate; and/or (6) contains information for which you not have the right to permit Bray Media to access and process any Customer Data. You further represent and warrant that you have acquired all legally required consents, releases, and authorizations (freely given and fully informed) from all data subjects (Participants and Authorized Users) necessary to provide Customer Data to Bray Media. For clarity, and without limiting the generality of the foregoing, you are solely responsible for ensuring you have received and properly documented in each case all consents, authorizations, and releases required under applicable law for each Participant and Authorized User that may interact with the tracking, monitoring, session replay, chat, or other data collecting features of the Service. You will indemnify, defend, and hold Bray Media harmless from and against any and all claims, allegation, investigations, administrative actions, private rights of action, and all damages, fines, fees, losses, penalties, and costs (including reasonable attorney and special witness fees) arising from or related to a claimed breach of state or federal data privacy laws caused by your failure to gain consent from each Participant and Authorized User for the use, monitoring of, or interaction with Bray Media's Service. The foregoing indemnification shall survive termination or expiration of this Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.3 Privacy.</strong>
                    <p className="text-foreground/80 mt-1">You are responsible for compliance with all privacy laws and regulations applicable to your use and the use by your Participants and Authorized Users of the Service, including providing any required privacy notice(s), blocker cards, gateways, or consent pop-up banners. You are not to transmit, or allow transmission of, Customer Data that contains Sensitive Data to Bray Media (via the Service or otherwise). As used herein, "Sensitive Data" includes payment card data or other financial account information, driver's license numbers, birthdates, social security numbers, government-issued identifiers, passwords or other log-in credentials, racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, data concerning health, and data concerning a natural person's sex life or sexual orientation or similarly sensitive information. Without limitation, you agree to indemnify, defend, and hold Bray Media harmless from and against any third-party claims that arise from or are related to your transmission of Sensitive Data to Bray Media in connection with your use of the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.4 Usage Data and Aggregated Statistics.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media may generate de-identified data, statistics, and other performance or usage related information ("Usage Data") in the course of providing the Service to you. You acknowledge and agree that, as between you and Bray Media, all Usage Data is and shall be and remain the property of Bray Media. Bray Media may use, aggregate, and share Usage Data for the purposes of providing the Service, conducting research, preparing industry benchmarking reports, product development, and other commercial uses subject to applicable law. Bray Media will ensure that Customer, its Authorized Users, and its Participants cannot be identified through the Usage Data or any derivative thereof. You further acknowledge and agree that Bray Media may compile Usage Data based on Customer Data input into the Services provided such Usage Statistics do not identify you, your Participants, or your Authorized Users.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">5.5 Feedback.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media welcomes comments, feedback, information, or materials regarding the Service or any of the other Bray Media products or services (collectively, "Feedback"). By submitting Feedback to Bray Media, you agree to assign, and hereby irrevocably assign to Bray Media, all right, title, and interest, on a worldwide basis, in and to the Feedback and all copyrights, moral rights, and other Intellectual Property Rights embodied in such. Bray Media will be free to use, copy, distribute, publish, and modify the Feedback on an unrestricted basis, without compensation to you.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">FEES AND PAYMENT</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">6.1 Payment Terms.</strong>
                    <p className="text-foreground/80 mt-1">You agree to pay to Bray Media all applicable Fees due for the Service in accordance with terms of this Agreement and the Order, with any applicable Taxes required. Except as otherwise specified herein or in an Order, Fees are based on the Service purchased and/or actual usage and all payment obligations under this Agreement are non-cancelable and non-refundable. Any usage above your plan's monthly or annual usage limits ("Overages") will be automatically calculated and billed at the conclusion of the month in which the Overage occured. Any payments more than thirty (30) days past due will bear a late payment fee of 1.5% interest per month or the highest amount permitted by law, whichever is less. You agree to be responsible for payment for all activity by Authorized Users who access or use the Service through your account. You are responsible for your own costs and expenses related to using the Service such as charges for Internet access, third party software licenses, or other data transmission fees.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.2 Taxes.</strong>
                    <p className="text-foreground/80 mt-1">Service fees are exclusive of all invoice and bank processing fees, taxes, levies, or duties imposed by taxing authorities, and you are responsible for payment of all such fees, taxes, levies, or duties, excluding only United States income (federal or state) taxes imposed on Bray Media, including by way of example and not limitation, import duties and fees, sales, use, transfer, excise, value added, and gross receipts ("Taxes") In the event you are required to withhold any portion of service fees due to payments to banks or taxing authorities, (1) you agree to do so and to indemnify Bray Media for any liability resulting from your failure to make such withholdings, and (2) Bray Media reserves the right to adjust the pricing of the Service so that you are responsible for payment to Bray Media of the full amount for the Service, net of any such withholdings, so that the net amounts received by Bray Media after such withholdings is equal to what was invoiced.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.3 Payment method; Credit Card Authorization.</strong>
                    <p className="text-foreground/80 mt-1">Until all amounts due have been paid in full, you agree to always keep your payment information current and authorize Bray Media to charge such payment method (e.g. credit card, debit card, wire transfer, automated clearing house or other method as agreed to by Bray Media in the Order) provided by you, all amounts due under this Agreement, including without limitation, usage beyond the amount specified in the applicable Order.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.4 Invoicing.</strong>
                    <p className="text-foreground/80 mt-1">Except regarding the Free Trial Period, Bray Media bills customers in advance monthly or once a year for recurring annual plans. For Overages, Bray Media bills customers at the end of each month. All amounts due shall be paid in US dollars. Bray Media may invoice you electronically or by paper invoice. You must notify Bray Media within thirty (30) days of the receipt of the invoice of any billing errors thereon. If you do not notify Bray Media within this time, Bray Media will not be required to correct the error and/or adjust your account and you hereby waive any claim, allegation, or contention with respect to such invoice. Bray Media will not issue refunds for Fees paid for your Service account, even for periods of inactivity.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.5 Rate Change.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media reserves the right to change the price of the Service upon notice to you. Such notice may be provided at any time by posting the changes to our website, to your account, or via email. Bray Media will not be liable to you or to any third party for any modifications, price changes, or suspension or discontinuation of the Service.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">6.6 Early Termination Fee.</strong>
                    <p className="text-foreground/80 mt-1">For monthly contracts, there is no early termination fee or refunds. For annual contracts billed monthly, you agree to pay three (3) times the monthly cost specified in such annual contracts in the event you terminate this Agreement prior to the expiration or termination of the specified Term.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">TERM AND TERMINATION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">7.1 Term.</strong>
                    <p className="text-foreground/80 mt-1">You will be bound for the entire Term of this Agreement. "Term" is defined as either the period set forth in the Order or, if none, the period beginning on the Effective Date and continuing until terminated in writing by either party or when terminated in accordance with Section 6.2 below. Except as otherwise specified in any Order, at the end of any Term, subscriptions will automatically renew for additional Terms equal to the expiring Term length, unless either party gives the other party notice of non renewal at least thirty (30) days before the end of the applicable Term.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">7.2 Termination of Services.</strong>
                    <p className="text-foreground/80 mt-1">Either party may terminate this Agreement at any time, in whole or in part, for any reason, provided that if you terminate, you shall be obligated to pay any Fees accrued prior to the date of termination. You may terminate this Agreement by accessing your Account Settings in your dashboard of the Service and selecting to cancel your account (using the instructions provided) or sending an email cancelling your Services to support@viberly.ai. Upon termination of this Agreement, all rights and Services provided by Bray Media to you in this Agreement shall cease immediately. Termination of this Agreement shall not limit Bray Media from pursuing remedies available to Bray Media, including but not limited to injunctive relief, for a failure to pay outstanding Fees or in connection with any other breach of this Agreement. Bray Media may also permanently or temporarily terminate, suspend, or otherwise refuse to permit your use of the Service upon reasonable prior written notice without incurring liability as a result thereof, if in our sole determination, you violate, or are reasonably likely to violate, this Agreement, including without limitation, by your nonpayment of Fees.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">CONFIDENTIAL INFORMATION; MUTUAL NON-DISCLOSURE</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">8.1</strong>
                    <p className="text-foreground/80 mt-1">Each party to this Agreement may furnish the other party with certain non-public, proprietary information (the "Confidential Information"). For the purposes of this Agreement, Confidential Information is defined as:</p>
                    
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li className="text-foreground/80">Disclosed information that is marked or identified as "confidential" at the time of disclosure, or which constitutes the trade secrets of a party under the governing law of this Agreement.</li>
                      <li className="text-foreground/80">The source code and object code of the Service, the pricing structure for the Service and Service provided to you, and any other proprietary information owned by Bray Media, and which is provided or disclosed to you at any time.</li>
                      <li className="text-foreground/80">Disclosed information relating to any unreleased products or service offerings</li>
                      <li className="text-foreground/80">The terms and conditions of this Agreement; and</li>
                      <li className="text-foreground/80">The Service.</li>
                    </ul>
                  </div>

                  <div>
                    <strong className="text-foreground">8.2</strong>
                    <p className="text-foreground/80 mt-1">Confidential Information shall not include information that:</p>
                    
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li className="text-foreground/80">is or becomes part of the public domain or is generally publicly known through no improper action by the receiving party subsequent to the time of the disclosing party's communication thereof to the receiving party;</li>
                      <li className="text-foreground/80">was rightfully in the receiving party's possession or known by the receiving party prior to receipt from the disclosing party;</li>
                      <li className="text-foreground/80">is rightfully disclosed without restriction to the receiving party by a third party without violation of any confidentiality covenant by such third party;</li>
                      <li className="text-foreground/80">is independently developed by the receiving party without use of the Confidential Information of the disclosing party; or</li>
                      <li className="text-foreground/80">its disclosure is required by court, regulation or government order and the disclosing party has been given notice of such order and the receiving party reasonably cooperates with the disclosing party in limiting such disclosure to the minimum required, unless a court has ordered that the disclosing party not be given notice.</li>
                    </ul>
                  </div>

                  <div>
                    <strong className="text-foreground">8.3</strong>
                    <p className="text-foreground/80 mt-1">Each party agrees to hold the other party's Confidential Information in confidence and not to use it for any purpose other than the purposes permitted under this Agreement. Each party agrees to use the same standard of care to protect Confidential Information as it uses to protect its own similar confidential and proprietary information, but not less than a reasonable standard of care. Confidential Information of the other party may only be disclosed to those affiliates, employees, contractors, and advisors of you or of Bray Media, as applicable, on a need-to-know basis and who agree to be bound by confidentiality restrictions at least as restrictive as those contained in this Agreement. Confidential Information remains at all times the property of the disclosing party. Unless otherwise explicitly set forth herein, no licenses or rights under any patent, copyright, trademark, or trade secret are granted or are to be implied with respect to Confidential Information.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">NO WARRANTY; DISCLAIMER</h2>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div>
                    <strong className="text-foreground">9.1</strong>
                    <p className="text-foreground/80 mt-1 text-sm">
                      BRAY MEDIA MAKES NO WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION, MERCHANTABILITY, FITNESS FOR A PARTICULAR USE AND NON-INFRINGEMENT. THE SERVICE IS PROVIDED BY BRAY MEDIA AND ITS LICENSORS "AS IS" AND "AS AVAILABLE." YOU ASSUME ALL RISK FOR YOUR USE OF THE SERVICE, INCLUDING WITHOUT LIMITATION ANY HARM CAUSED BY VIRUSES, WORKS, OR OTHER DAMAGING MATERIALS. IN NO EVENT DOES BRAY MEDIA GUARANTEE ANY RESULTS, INCREASED TRAFFIC OR USER ENGAGEMENT FOR YOU. BRAY MEDIA DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION THEREOF, IS ACCURATE, ERROR OR BUG FREE, THAT YOUR USE OF THE SERVICE WILL BE UNINTERRUPTED, OR THAT THE SERVICE'S OPERATION WILL NOT NEGATIVELY AFFECT OTHER SOFTWARE OR HARDWARE. THIS SECTION 8.1 APPLIES TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW. THE SERVICE IS OFFERED BY BRAY MEDIA FROM ITS FACILITIES IN THE UNITED STATES OF AMERICA. BRAY MEDIA MAKES NO REPRESENTATIONS THAT THE SERVICE IS APPROPRIATE OR AVAILABLE FOR USE IN OTHER COUNTRIES. THOSE WHO ACCESS OR USE THE SERVICE FROM OTHER JURISDICTIONS DO SO AT THEIR OWN RISK AND ARE RESPONSIBLE FOR COMPLIANCE WITH ALL APPLICABLE LAWS, INCLUDING BUT NOT LIMITED LAWS RELATED TO THE COLLECTION OF DATA FROM YOUR WEBSITE'S VISITORS AND USERS.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">INDEMNIFICATION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">10.1 Bray Media Indemnification.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media shall defend you against any third-party claims that the Service infringes any United States patent, trademark, or copyright, and pay any costs and damages finally awarded by a court of competent jurisdiction or agreed upon in settlement with respect to such claims, provided Bray Media is promptly notified of any and all threats, claims and proceedings related thereto and given reasonable assistance and sole control over defense and settlement. Bray Media will not be responsible for any settlement it does not preapprove in writing. The foregoing obligations do not apply with respect to the Service or portions or components thereof which are: (1) not supplied by Bray Media, (2) modified after delivery by Bray Media, or (3) combined with other products, processes or materials where the alleged infringement relates to such combination. Additionally, Bray Media shall have no obligation to indemnify you under this Section 9.1 where you continue any allegedly infringing activity after being notified thereof or after being informed of modifications that would have avoided the alleged infringement, or where your use of the Service is not strictly in accordance with this Agreement or with the Documentation.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">10.2 Your Indemnification.</strong>
                    <p className="text-foreground/80 mt-1">You agree to defend, indemnify, and hold harmless each of Bray Media, its affiliates and respective officers, employees, consultants, shareholders and representative from and against any and all claims, liabilities, damages, and/or costs (including attorneys' and expert witness fees, costs and other expenses) arising out of or related to any actual or alleged claims involving or resulting from: (1) violation of this Agreement or applicable law, rule or regulation by you or any person accessing or using the Service by or through you; (2) infringement or misappropriation by you, or any person accessing or using the Service by or through you, of any intellectual property or privacy or other right of any person or entity (except claims of infringement or misappropriation arising solely from use of the Service as provided under this Agreement); (3) your Authorized Users or Participants, or arising out of or relating to your relationship with any of your Authorized Users or Participants; (4) Customer Data in any manner; or (5) you or your Authorized Users' breach of any applicable privacy or data protection law, rule or regulation. Bray Media reserves the right, at its own expense and its sole discretion, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">LIMITATION OF LIABILITY</h2>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div>
                    <strong className="text-foreground">11.1 Limitation.</strong>
                    <p className="text-foreground/80 mt-1 text-sm">
                      IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES RELATED TO OR ARISING FROM THIS AGREEMENT, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOST DATA, LOST PROFITS, OR COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, HOWEVER CAUSED UNDER ANY THEORY OF LIABILITY AND WHETHER OR NOT A PARTY WAS AWARE OR ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. IN NO EVENT SHALL BRAY MEDIA'S AGGREGATE LIABILITY UNDER THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY YOU TO BRAY MEDIA FOR USE OF THE SERVICE DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY. YOU ACKNOWLEDGE AND AGREE THAT BRAY MEDIA WOULD NOT ENTER INTO THIS AGREEMENT UNLESS IT COULD RELY ON THE LIMITATIONS DESCRIBED IN THIS PARAGRAPH.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">12.1 Choice of Law.</strong>
                    <p className="text-foreground/80 mt-1">This Agreement and the rights of the parties hereunder will be governed by and construed in accordance with the laws of the State of Texas, exclusive of conflict or choice of law rules. The parties agree that any controversy, claim or litigation arising out of or in connection with this Agreement shall be resolved in a federal or state court in the State of Texas, and consent to the jurisdiction of such court over the parties hereto and such controversy, claim or litigation. The parties acknowledge that this Agreement evidences a transaction involving interstate commerce.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">12.2 Dispute Resolution.</strong>
                    <p className="text-foreground/80 mt-1">Before initiating any legal claim or action (except with respect to equitable relief or non-payment of fees due under this Agreement), the parties agree to refer any dispute, controversy or claim arising out of or related to this Agreement (collectively, a "Claim") to members of the parties' executive management (each such member a "Representative") for resolution, which referral shall be evidenced by a written notice from either party to the other (the "Referral"). The parties' representatives shall meet in person or via conference call within ten (10) business days of such Referral. If the parties have not reached a mutually agreeable resolution of the Claim within ten (10) business days after their initial meeting, or within an additional time period mutually agreed upon, then either party may request that such claim be submitted to a mediator agreed upon by the parties. The mediator shall assist in attempting to negotiate a resolution of the Claim. The mediation shall be non-binding unless the parties otherwise agree. Unless otherwise agreed by the mediator and parties, the mediation shall be held within twenty-one (21) days of the request for mediation. The parties must attend the mediation and act in good faith to genuinely attempt to resolve the Claim. Any information or documents disclosed by a party under this clause: (a) must be kept confidential; and (b) may only be used to attempt to resolve the Claim. Each party shall pay its own costs of complying with this Section 11.2 and shall equally share the cost of the mediator.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold text-foreground mb-4">MISCELLANEOUS</h2>
                
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">13.1 Independent Contractors.</strong>
                    <p className="text-foreground/80 mt-1">You understand and expressly agree that you and Bray Media are independent contractors and not agents or employees of the other party. Neither you nor Bray Media has any right, power, or authority to act or create any obligation, express or implied, on behalf of the other party.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.2 Notices.</strong>
                    <p className="text-foreground/80 mt-1">Any notice given under this Agreement shall be in writing and in the English language and shall be emailed to Bray Media at support@viberly.ai, or if to you, to the email or physical address associated with your account. You hereby consent to receiving any notices relevant to the Service or this Agreement by email without requiring a handwritten signature for such notice to be effective.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.3 Force Majeure.</strong>
                    <p className="text-foreground/80 mt-1">Neither party shall be liable for failing or delaying performance of its obligations (except for the payment of money) resulting from any condition beyond its reasonable control, including but not limited to, governmental action, acts of terrorism, natural disasters, earthquake, fire, flood, or other acts of God, labor conditions, power failures, and Internet disturbances.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.4 Consent to Do Business Electronically.</strong>
                    <p className="text-foreground/80 mt-1">You agree not to contest the authorization for, or validity or enforceability of, electronic records and electronic signatures, or the admissibility of copies thereof, under any applicable law.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.5 Government End Authorized Users.</strong>
                    <p className="text-foreground/80 mt-1">The Service and Documentation are comprised of "commercial computer software" and "commercial computer software documentation" as such terms are used in 48 C.F.R. 12.212 and are provided to any civilian or military branch or agency of the U.S. government in accordance with the policies set forth in 48 C.F.R. 12.212 or 28 C.F.R. 227.7202-1 and 227.7202-3, respectively.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.6 Compliance with Laws and Export Control.</strong>
                    <p className="text-foreground/80 mt-1">You shall abide by all applicable local, state, national and foreign laws, rules, treaties and regulations in connection with your use of the Service, including those related to data privacy, international communications and the transmission of technical or personal data. You acknowledge that Bray Media may discontinue provision or performance of the Service or terminate the license to the Service granted hereunder following any changes in any relevant applicable law, which in the sole discretion of Bray Media, makes performance impossible, or illegal. You further acknowledge that the Service and related technology and technical data (collectively "Controlled Technology") may be subject to the import and export laws of any country where Controlled Technology is imported or re-exported, including U.S. Export Administration Regulations. You agree not to export, re-export, import or provide any Controlled Technology to any prohibited country (such as embargoed countries), entity, or person (such as designated nationals) for which a license or other governmental approval is required or is otherwise prohibited. All Controlled Technology is prohibited for export or re-export to prohibited countries as listed at: http://www.treasury.gov/resource center/sanctions/SDN-List/Pages/default.aspx or to any country subject to similar trade sanctions.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.7 DMCA.</strong>
                    <p className="text-foreground/80 mt-1">Bray Media investigates notices of copyright infringement and takes appropriate actions under the Digital Millennium Copyright Act ("DMCA"), Title 17, United States Code, Section 512(c), as follows:</p>
                    
                    <p className="text-foreground/80 mt-2">All written notification, pursuant to the DMCA, must be submitted to Bray Media at support@viberly.ai.</p>
                    
                    <p className="text-foreground/80 mt-2">If you are a copyright owner or agent thereof and believe that third-party submitted content or materials, including photographs and digital images ("Third-Party Submission"), available through this Platform infringes upon your copyrights, you may submit written notification, pursuant to the DMCA, to the address identified above. To be effective, the written notification must include:</p>
                    
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                      <li className="text-foreground/80">A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                      <li className="text-foreground/80">Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
                      <li className="text-foreground/80">Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material;</li>
                      <li className="text-foreground/80">Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted;</li>
                      <li className="text-foreground/80">A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law; and</li>
                      <li className="text-foreground/80">A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                    </ul>

                    <p className="text-foreground/80 mt-3 text-sm">Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing, or that material or activity was removed or disabled by mistake or identification, will be liable for any damages, including costs and attorneys' fees, incurred by the alleged infringer, by any copyright owner or copyright owner's authorized licensee, or by a service provider (such as or including Bray Media), who is injured by such misrepresentation, as the result of the service provider relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing, or in replacing the removed material or ceasing to disable access to it. Accordingly, if you are uncertain whether Third Party Submission infringes your or others' copyrights, please consult with a copyright attorney prior to making a notice under the DMCA.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.8 Equitable Relief.</strong>
                    <p className="text-foreground/80 mt-1">You agree that your breach of the terms and responsibilities under this Agreement would cause irreparable harm and significant injury to Bray Media which would be both difficult to ascertain and for which there is no adequate remedy at law and that Bray Media shall be entitled, in addition to any other rights and remedies it may have, to injunctive relief (without the requirement of posting bond), specific performance and other equitable remedies to restrain any threatened, continuing, or further breach, or other equitable relief without prejudice to any other rights and remedies Bray Media may have under this Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.9 Entire Agreement.</strong>
                    <p className="text-foreground/80 mt-1">This Agreement constitutes the entire agreement between you and Bray Media with respect to the subject matter hereof and supersedes all prior agreements, both oral and written. Bray Media may update this Agreement at any time without notice to you. Any changes to this Agreement will be posted on the Bray Media website. You can determine when this Agreement was last revised by referring to the "Last Updated" legend at the top of the first page. UNLESS OTHERWISE STATED IN THE AMENDED VERSION OF THE AGREEMENT, ANY CHANGES TO THIS AGREEMENT ARE EFFECTIVE IMMEDIATELY UPON POSTING. Your continued use of the Service will constitute your agreement to any new provisions within the revised Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.10 Waiver; Severability.</strong>
                    <p className="text-foreground/80 mt-1">Either party's failure to enforce any provision of this Agreement will not be deemed to be a waiver of its right to enforce them. If any term or provision of this Agreement will be held to be invalid, illegal, or unenforceable, the remaining terms and provisions of this Agreement will remain in full force and effect, and such invalid, illegal, or unenforceable term or provision will be deemed not to be part of this Agreement.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.11 Publicity.</strong>
                    <p className="text-foreground/80 mt-1">You hereby consent to inclusion of your name and trademarks or service marks in Bray Media customer lists that may be published as part of Bray Media's marketing and promotional efforts. Bray Media may identify you as a customer when referring to lists of its customers.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.12 Assignment.</strong>
                    <p className="text-foreground/80 mt-1">Neither you nor Bray Media may make any assignment of this Agreement or any interest herein, by operation of law or otherwise, without the prior written consent of the other; provided, however, that either party may assign its rights and obligations under this Agreement without the consent of the other party in the event the assigning party effects a corporate reorganization, consolidation, merger, or transfer of all or substantially all of its properties or assets. This Agreement shall inure to the benefit of and be binding upon the parties, their respective successors, and permitted assigns.</p>
                  </div>

                  <div>
                    <strong className="text-foreground">13.13 Survival.</strong>
                    <p className="text-foreground/80 mt-1">The provisions of this Agreement shall survive the expiration or termination of this Agreement, including, without limitation, provisions governing ownership and use of intellectual property, representations, disclaimers, warranties, liability, indemnification, governing law, jurisdiction, venue, remedies, rights after termination, and interpretation of this Agreement, will survive the expiration or termination of this Agreement for their full statutory period.</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center space-y-4 mt-12">
                  <h3 className="text-xl font-semibold text-foreground">Bray Media LLC TERMS OF SERVICE</h3>
                  <p className="text-muted-foreground text-sm">
                    Copyright © Bray Media LLC 2025. All rights reserved
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;