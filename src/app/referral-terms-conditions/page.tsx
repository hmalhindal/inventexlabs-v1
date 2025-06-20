
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { UserPlus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Referral Program Terms & Conditions - Inventex Labs',
  description: 'Understand the terms and conditions for participating in the Inventex Labs referral program.',
};

export default function ReferralTermsPage() {
  const lastUpdated = "October 26, 2023"; // Placeholder date

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <UserPlus className="h-16 w-16 text-primary mx-auto mb-4" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Referral Program Terms & Conditions</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Share Inventex Labs and earn rewards!
            </CardDescription>
            <p className="text-sm text-muted-foreground mt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-base prose prose-slate dark:prose-invert max-w-none">
            <p>Welcome to the Inventex Labs Referral Program ("Program"). By participating in the Program, you agree to these Referral Program Terms & Conditions, as well as our standard <a href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>

            <h2>1. Eligibility</h2>
            <ul>
              <li>To be a "Referrer," you must have an active Inventex Labs account in good standing.</li>
              <li>A "Referred Friend" must be a new customer to Inventex Labs who has not previously placed an order.</li>
            </ul>

            <h2>2. How the Program Works</h2>
            <p>Referrers will be provided with a unique referral link or code. When a Referred Friend signs up using this link/code and completes their first qualifying order (as defined by Inventex Labs at the time of referral), both the Referrer and the Referred Friend may receive a reward.</p>

            <h2>3. Rewards</h2>
            <p>The specific rewards for both the Referrer and the Referred Friend will be detailed in the current Program offer information provided on our website or through promotional materials. Rewards may include discounts, credits, or other benefits as determined by Inventex Labs. Rewards are non-transferable and have no cash value unless explicitly stated.</p>
            
            <h2>4. Qualifying Orders</h2>
            <p>A "qualifying order" typically involves a minimum order value and must be completed and paid for by the Referred Friend. Cancelled orders or orders for which refunds are issued may not qualify. Inventex Labs reserves the right to determine what constitutes a qualifying order.</p>

            <h2>5. Restrictions</h2>
            <ul>
              <li>You may not refer yourself or create multiple accounts to benefit from the Program.</li>
              <li>Referral links/codes should not be published or distributed on commercial websites (e.g., coupon websites, Reddit, Wikipedia) or used for spamming.</li>
              <li>The Program is intended for personal, non-commercial referrals.</li>
            </ul>
            
            <h2>6. Program Modification and Termination</h2>
            <p>Inventex Labs reserves the right to modify, suspend, or terminate the Referral Program, or a user's ability to participate in the Program, at any time and for any reason without prior notice. Any rewards earned prior to modification or termination will generally be honored, subject to these terms.</p>

            <h2>7. General</h2>
            <p>Participation in the Program constitutes acceptance of these terms. Any fraudulent or abusive activity may result in the forfeiture of rewards and suspension or termination of your account. Inventex Labs' decisions regarding the Program are final and binding.</p>
            
            <h2>8. Contact</h2>
            <p>For questions about the Referral Program, please contact our support team via our <a href="/contact-us" className="text-primary hover:underline">Contact Us</a> page.</p>
            
            <p><em>These are general terms. Specific details of any active referral program will be available on our website or through direct communication.</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
