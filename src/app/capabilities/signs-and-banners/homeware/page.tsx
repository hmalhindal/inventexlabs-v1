
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HomewareDeskwareIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Homeware & Deskware - Inventex Labs',
  description: 'Custom-designed and laser-cut homeware, decor, and desk accessories from Inventex Labs.',
};

export default function HomewarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <HomewareDeskwareIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Homeware & Deskware</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Personalized and precision-crafted items for your home and office.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A collection of custom desk accessories" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="custom desk accessories"
            />
            <p>
              Elevate your space with custom-fabricated homeware and deskware from Inventex Labs. We use precision manufacturing techniques like laser cutting and engraving to create unique items that reflect your personal style or brand identity. From bespoke coasters and wall art to custom organizers and nameplates, we can turn your ideas into high-quality products.
            </p>
            <p>
              We work with materials like wood, acrylic, and metal to create durable and stylish pieces. These items also make perfect personalized gifts or corporate swag.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Homeware%20Inquiry">Create a Custom Piece</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
