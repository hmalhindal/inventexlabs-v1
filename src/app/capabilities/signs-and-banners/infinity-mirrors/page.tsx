
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { InfinityMirrorsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Infinity Mirrors - Inventex Labs',
  description: 'Custom infinity mirror signs and displays for a stunning visual effect at Inventex Labs.',
};

export default function InfinityMirrorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <InfinityMirrorsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Infinity Mirrors</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Create mesmerizing depth with custom-built infinity mirrors.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="An infinity mirror creating a tunnel of light effect" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="infinity mirror light"
            />
            <p>
              Infinity mirrors create a captivating optical illusion of an endless tunnel of light. At Inventex Labs, we fabricate custom infinity mirror signs, logos, and art pieces that add a unique and futuristic touch to any space. They are perfect for bars, nightclubs, event venues, and modern commercial interiors.
            </p>
            <p>
              We can integrate your logo or desired shape into the infinity effect and use RGB LEDs to create dynamic, color-changing displays. Our infinity mirrors are built with high-quality materials for a clear, dramatic effect and long-lasting performance.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Infinity%20Mirror%20Inquiry">Discuss Your Infinity Mirror Project</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
