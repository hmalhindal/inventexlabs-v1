
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { TicketPercent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Promotion Terms & Conditions - Inventex Labs',
  description: 'Terms and conditions applicable to promotional offers and discounts at Inventex Labs.',
};

export default function PromotionTermsPage() {
  const lastUpdated = "October 26, 2023"; // Placeholder date

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <TicketPercent className="h-16 w-16 text-primary mx-auto mb-4" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Promotion Terms & Conditions</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Details regarding our promotional offers.
            </CardDescription>
            <p className="text-sm text-muted-foreground mt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-base prose prose-slate dark:prose-invert max-w-none">
            <p>From time to time, Inventex Labs may offer promotions, discounts, or special offers ("Promotions"). These Promotion Terms & Conditions govern the use and redemption of such Promotions, in addition to our standard <a href="/terms-conditions#terms-conditions-section" className="text-primary hover:underline">Terms & Conditions</a> and <a href="/terms-conditions#privacy-policy-section" className="text-primary hover:underline">Privacy Policy</a>.</p>

            <h2>1. General Promotion Terms</h2>
            <ul>
              <li>Promotions are valid for a limited time only, as specified in the promotional material.</li>
              <li>Promotions cannot be combined with other offers unless explicitly stated.</li>
              <li>Promotions are non-transferable and have no cash value.</li>
              <li>Inventex Labs reserves the right to modify or cancel any Promotion at any time without prior notice.</li>
              <li>Promotions may be subject to specific eligibility requirements (e.g., new customers only, minimum order value).</li>
            </ul>

            <h2>2. How to Redeem</h2>
            <p>Instructions for redeeming a Promotion (e.g., entering a promo code at checkout) will be provided with the specific promotional offer.</p>

            <h2>3. Exclusions</h2>
            <p>Unless otherwise stated, Promotions may not apply to certain services, materials, taxes, or shipping fees.</p>
            
            <h2>4. Specific Promotion Example (Template)</h2>
            <p><strong>Example: 10% Off First Order</strong></p>
            <ul>
              <li>Offer valid for new customers on their first order only.</li>
              <li>Discount applies to the subtotal of manufacturing services, excluding taxes and shipping.</li>
              <li>Cannot be combined with other offers.</li>
              <li>Inventex Labs reserves the right to verify eligibility.</li>
            </ul>

            <h2>5. Abuse of Promotions</h2>
            <p>Any abuse of Promotions, including but not limited to creating multiple accounts to redeem new customer offers, may result in the cancellation of orders and suspension of accounts.</p>
            
            <h2>6. Contact</h2>
            <p>If you have any questions regarding our Promotions or these terms, please contact our support team through our <a href="/contact-us" className="text-primary hover:underline">Contact Us</a> page.</p>
            
            <p><em>Please note that specific terms for individual promotions may vary and will be detailed at the time of the offer. This page provides general guidelines.</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
