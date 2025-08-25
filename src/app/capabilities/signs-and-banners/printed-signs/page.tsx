
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PrintedSignsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Printed Signs - Inventex Labs',
  description: 'High-quality custom printed signs on a variety of rigid materials at Inventex Labs.',
};

export default function PrintedSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <PrintedSignsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Printed Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Vibrant, full-color printing on durable, rigid substrates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A collection of vibrant printed signs" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="printed signs display"
            />
            <p>
              When you need full-color graphics on a sturdy backing, our printed sign service is the perfect solution. We use state-of-the-art flatbed printers to apply UV-cured inks directly onto a wide range of rigid materials, resulting in vibrant, durable, and weather-resistant signage.
            </p>
            <p>
              Common materials include Foamex, DiBond (Aluminum Composite), Correx, and Acrylic. These signs are ideal for retail displays, construction site information, event signage, safety notices, and much more. We can also custom-cut your printed signs to any shape.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Printed%20Signs%20Inquiry">Get a Quote for Printed Signs</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
