
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Store } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Event Booths - Inventex Labs',
  description: 'Custom-designed and fabricated booths for tradeshows, exhibitions, and events.',
};

export default function BoothsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Store className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Event & Tradeshow Booths</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make a statement at your next event with a custom-fabricated booth that represents your brand.
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              Custom Booth Fabrication
            </CardTitle>
            <CardDescription>
              From concept to reality, we build booths that stand out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
             <Image
              src="https://placehold.co/700x350.png"
              alt="Custom event booth"
              width={700}
              height={350}
              className="rounded-lg mb-6"
              data-ai-hint="trade show booth"
            />
            <p>
              We specialize in designing and building custom booths for tradeshows, exhibitions, and promotional events. Our team works with you to create a functional and eye-catching space that effectively showcases your products and services.
            </p>
            <p>
              For custom manufacturing, please visit our <Link href="/" className="text-primary hover:underline">instant quote page</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
