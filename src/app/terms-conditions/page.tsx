
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions and Privacy Policy - Inventex Labs',
  description: 'Read the Terms & Conditions and Privacy Policy for using the Inventex Labs website and services.',
};

export default function TermsAndPrivacyPage() {
  const lastUpdatedTerms = "October 26, 2023"; // Placeholder date
  const lastUpdatedPrivacy = "October 26, 2023"; // Placeholder date, ensure this matches your privacy policy's last update

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Terms & Conditions and Privacy Policy</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-base prose prose-slate dark:prose-invert max-w-none">
            <section id="terms-conditions-section">
              <h2 className="font-headline text-3xl text-primary !mb-3">Terms & Conditions</h2>
              <p className="text-sm text-muted-foreground !mt-0 !mb-6">Last Updated: {lastUpdatedTerms}</p>
              <p>Welcome to Inventex Labs. These Terms and Conditions ("Terms") govern your use of our website and the services we offer. By accessing or using our services, you agree to be bound by these Terms.</p>

              <h3>1. Services</h3>
              <p>Inventex Labs provides an online platform for obtaining quotations and ordering custom manufactured parts based on CAD designs and specifications provided by you. Services include, but are not limited to, CNC machining, laser cutting, and other manufacturing processes.</p>

              <h3>2. User Accounts</h3>
              <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

              <h3>3. Quotations and Orders</h3>
              <p>Quotations provided are estimates based on the information you provide. Final pricing may be subject to review. By placing an order, you confirm that your design files and specifications are accurate. We reserve the right to refuse or cancel orders at our discretion.</p>

              <h3>4. Intellectual Property</h3>
              <p>You retain all intellectual property rights to the CAD files and designs you submit. By submitting designs, you grant Inventex Labs a limited license to use, reproduce, and modify your designs solely for the purpose of providing quotation and manufacturing services.</p>
              <p>All content on our website, including text, graphics, logos, and software, is the property of Inventex Labs or its licensors and is protected by intellectual property laws.</p>

              <h3>5. Payment</h3>
              <p>Payment for services must be made in accordance with the terms specified at the time of order. We use third-party payment processors, and your payment information is handled according to their terms and privacy policies.</p>

              <h3>6. Limitation of Liability</h3>
              <p>To the fullest extent permitted by law, Inventex Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; (c) any content obtained from the services; or (d) unauthorized access, use, or alteration of your transmissions or content.</p>

              <h3>7. Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of Kuwait, without regard to its conflict of law principles.</p>
              
              <h3>8. Changes to Terms</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the services after such changes constitutes your acceptance of the new Terms.</p>

              <h3>9. Contact Us (for Terms)</h3>
              <p>If you have any questions about these Terms, please contact us at: <a href="mailto:legal@inventexlabs.com" className="text-primary hover:underline">legal@inventexlabs.com</a></p>
            </section>

            <Separator className="my-12" />

            <section id="privacy-policy-section">
              <h2 className="font-headline text-3xl text-primary !mb-3">Privacy Policy</h2>
              <p className="text-sm text-muted-foreground !mt-0 !mb-6">Last Updated: {lastUpdatedPrivacy}</p>
              <p>Welcome to Inventex Labs. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>

              <h3>1. Information We Collect</h3>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, or exchange services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.</li>
                <li><strong>CAD Files and Design Data:</strong> We collect CAD files and related design specifications that you upload to our platform for the purpose of generating quotations and manufacturing parts. This data is treated as confidential.</li>
              </ul>

              <h3>2. Use of Your Information</h3>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Process your transactions and deliver the services you requested.</li>
                <li>Email you regarding your account or order.</li>
                <li>Improve our website and service offerings.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Protect the security and integrity of your design data.</li>
              </ul>

              <h3>3. Disclosure of Your Information</h3>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. Manufacturing partners will receive necessary design data to produce your parts under strict confidentiality agreements.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
              
              <h3>4. Security of Your Information</h3>
              <p>We use administrative, technical, and physical security measures to help protect your personal information and design data. While we have taken reasonable steps to secure the information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

              <h3>5. Policy for Children</h3>
              <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>

              <h3>6. Contact Us (for Privacy)</h3>
              <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@inventexlabs.com" className="text-primary hover:underline">privacy@inventexlabs.com</a></p>
            </section>
            
            <p className="!mt-8"><em>The Terms & Conditions and Privacy Policy content provided here are templates and should be reviewed by a legal professional to ensure compliance with all applicable laws and regulations for your specific business operations and jurisdiction.</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
