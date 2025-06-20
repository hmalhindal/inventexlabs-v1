
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Printer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Printing Services - Inventex Labs',
  description: 'High-quality digital printing for various applications including marketing materials, signage, and custom prints at Inventex Labs.',
};

export default function DigitalPrintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Printer className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Digital Printing Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Vibrant & Versatile Printing Solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Digital printing press in action" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="digital printer press"
            />
            <p>
              Inventex Labs offers cutting-edge digital printing services, providing fast, flexible, and high-quality prints for a wide array of materials and applications. From business cards and brochures to large format banners and custom decals, our digital printing technology delivers stunning results with sharp details and vibrant colors.
            </p>
            <p>
              Our platform makes it easy to upload your designs, select your print specifications, and get an instant quote for your digital printing projects. We support various file formats and offer a range of finishing options.
            </p>
            <div className="my-6 flex justify-center">
              <Image 
                src="https://placehold.co/300x200.png"
                alt="Inventex Labs Digital Printing Service Showcase"
                width={300} 
                height={200} 
                className="rounded-md shadow-md"
                data-ai-hint="printed materials"
              />
            </div>
            <h2 className="font-headline text-2xl text-primary pt-4">Advantages of Digital Printing with Us:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Excellent print quality with high resolution and color accuracy.</li>
              <li>Fast turnaround times, ideal for short runs and urgent projects.</li>
              <li>Cost-effective for small to medium quantities.</li>
              <li>Ability to print variable data (e.g., personalized mailers).</li>
              <li>Wide range of printable substrates including paper, cardstock, vinyl, canvas, and more.</li>
              <li>Customizable sizes and finishing options (lamination, cutting, mounting).</li>
            </ul>
            <p className="pt-4">
              Bring your creative visions to life with Inventex Labs' digital printing services. Whether for marketing, branding, or personal projects, we deliver prints that make an impact.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Digital%20Printing%20Quote">Get a Digital Printing Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
