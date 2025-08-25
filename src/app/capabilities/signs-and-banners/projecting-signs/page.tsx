
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProjectingSignsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Projecting & Swing Signs - Inventex Labs',
  description: 'Custom projecting signs, blade signs, and swing signs for high visibility at Inventex Labs.',
};

export default function ProjectingSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <ProjectingSignsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Projecting & Swing Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Maximize visibility with signs that stand out from the crowd.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A projecting blade sign on a building facade" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="blade sign building"
            />
            <p>
              Projecting signs, also known as blade signs or swing signs, are mounted perpendicular to a building facade, making them highly visible to pedestrian traffic. At Inventex Labs, we design and fabricate custom projecting signs that enhance your storefront's character and draw customers in.
            </p>
            <p>
              We can create both illuminated and non-illuminated versions in a variety of styles, from traditional wrought-iron swing signs to sleek, modern LED blade signs. Built with weather-resistant materials, our projecting signs are made to last.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Projecting%20Sign%20Inquiry">Get a Projecting Sign Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
