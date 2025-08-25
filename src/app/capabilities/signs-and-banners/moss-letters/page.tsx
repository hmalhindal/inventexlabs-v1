
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MossLettersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Moss Letters & Signs - Inventex Labs',
  description: 'Custom moss letters and logos for a natural, biophilic design aesthetic at Inventex Labs.',
};

export default function MossLettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <MossLettersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Moss Letters & Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Bring the outdoors in with unique, maintenance-free green signage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A beautiful moss logo on an office wall" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="moss wall logo"
            />
            <p>
              Embrace biophilic design with stunning moss letters and logos from Inventex Labs. We use preserved, 100% natural moss to create vibrant, green signage that requires no watering, sunlight, or maintenance. It's the perfect way to add a touch of nature and a unique textural element to any interior space.
            </p>
            <p>
              Ideal for office receptions, retail stores, cafes, and homes, our moss signs are custom made in any font or shape. We can combine moss with other materials like wood or metal for a truly distinctive look.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Moss%20Letters%20Inquiry">Inquire About Moss Signage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
