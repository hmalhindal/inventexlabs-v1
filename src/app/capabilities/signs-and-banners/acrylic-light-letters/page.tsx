
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AcrylicLightLettersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Acrylic Light Letters - Inventex Labs',
  description: 'Sleek and modern custom acrylic LED letters and logos from Inventex Labs.',
};

export default function AcrylicLightLettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <AcrylicLightLettersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Acrylic Light Letters</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Modern, elegant, and brilliantly illuminated signage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="An illuminated acrylic logo on a dark wall" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="acrylic logo illuminated"
            />
            <p>
              Achieve a clean, contemporary look with custom acrylic light letters from Inventex Labs. We use precision laser-cut acrylic and energy-efficient LEDs to create stunning illuminated logos and lettering. This type of signage is perfect for creating a sophisticated and professional brand presence in offices, retail spaces, and high-end establishments.
            </p>
            <p>
              We offer various illumination styles, including front-lit, back-lit (halo effect), and edge-lit, in a wide range of colors. Our team will work with you to fabricate a sign that is both a piece of art and an effective branding tool.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Acrylic%20Light%20Letters%20Inquiry">Design Your Acrylic Sign</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
