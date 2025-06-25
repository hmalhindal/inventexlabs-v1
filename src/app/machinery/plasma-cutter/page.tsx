
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plasma Cutters - Inventex Labs',
  description: 'Powerful plasma cutters for fast and efficient cutting of thick conductive metals.',
};

export default function PlasmaCutterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Plasma Cutters</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              High-Power Cutting for Thick Metals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Plasma Cutting Machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="plasma cutter machine"
            />
            <p>
              Plasma cutters use a high-velocity jet of ionized gas to cut through electrically conductive materials. They are the ideal choice for quickly cutting thick plates of steel, stainless steel, and aluminum where edge finish is less critical than speed.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Thick Material Cutting:</span> Excels at cutting metal plates that are too thick for many lasers.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Fast Cutting Speed:</span> Offers a very high cutting speed on medium to thick materials.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Cost-Effective:</span> Lower initial investment and operating costs for thick metal cutting.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Versatile:</span> Cuts any conductive metal, including painted or rusted surfaces.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Heavy industrial fabrication</li>
              <li>Structural steel components</li>
              <li>Shipbuilding and repair</li>
              <li>Automotive chassis and frame parts</li>
              <li>Large-scale metal art and signage</li>
            </ul>

            <p className="pt-4">
              When you need to process thick metal plates quickly and efficiently, our plasma cutting services provide the power and reliability you require.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Plasma%20Cutter%20Inquiry">Inquire About Plasma Cutting</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
