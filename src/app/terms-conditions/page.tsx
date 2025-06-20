
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Inventex Labs',
  description: 'Read the Terms and Conditions for using the Inventex Labs website and services.',
};

export default function TermsConditionsPage() {
  const lastUpdated = "October 26, 2023"; // Placeholder date

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Terms & Conditions</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </CardDescription>
            <p className="text-sm text-muted-foreground mt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-base prose prose-slate dark:prose-invert max-w-none">
            <p>Welcome to Inventex Labs. These Terms and Conditions ("Terms") govern your use of our website and the services we offer. By accessing or using our services, you agree to be bound by these Terms.</p>

            <h2>1. Services</h2>
            <p>Inventex Labs provides an online platform for obtaining quotations and ordering custom manufactured parts based on CAD designs and specifications provided by you. Services include, but are not limited to, CNC machining, laser cutting, and other manufacturing processes.</p>

            <h2>2. User Accounts</h2>
            <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h2>3. Quotations and Orders</h2>
            <p>Quotations provided are estimates based on the information you provide. Final pricing may be subject to review. By placing an order, you confirm that your design files and specifications are accurate. We reserve the right to refuse or cancel orders at our discretion.</p>

            <h2>4. Intellectual Property</h2>
            <p>You retain all intellectual property rights to the CAD files and designs you submit. By submitting designs, you grant Inventex Labs a limited license to use, reproduce, and modify your designs solely for the purpose of providing quotation and manufacturing services.</p>
            <p>All content on our website, including text, graphics, logos, and software, is the property of Inventex Labs or its licensors and is protected by intellectual property laws.</p>

            <h2>5. Payment</h2>
            <p>Payment for services must be made in accordance with the terms specified at the time of order. We use third-party payment processors, and your payment information is handled according to their terms and privacy policies.</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Inventex Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; (c) any content obtained from the services; or (d) unauthorized access, use, or alteration of your transmissions or content.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
            
            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the services after such changes constitutes your acceptance of the new Terms.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: <a href="mailto:legal@inventexlabs.com" className="text-primary hover:underline">legal@inventexlabs.com</a></p>
            
            <p><em>This is a template Terms & Conditions and should be reviewed by a legal professional to ensure it is appropriate for your business and compliant with applicable laws.</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
