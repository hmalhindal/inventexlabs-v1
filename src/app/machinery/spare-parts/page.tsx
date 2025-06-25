
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Machinery Spare Parts - Inventex Labs',
  description: 'Find high-quality OEM spare parts to keep your machinery running at peak performance.',
};

export default function SparePartsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Machinery Spare Parts</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Keep Your Equipment Running Smoothly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Collection of spare parts" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="gears tools parts"
            />
            <p>
              Minimizing downtime is critical. We provide a comprehensive inventory of high-quality spare parts for a wide range of industrial machinery, including laser cutters, CNC routers, and more. Ensure the longevity and performance of your equipment with our reliable components.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Our Spare Parts Offerings:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">OEM Quality:</span> We stock genuine and OEM-equivalent parts for optimal compatibility and performance.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Wide Selection:</span> Access a broad range of components to meet your needs.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Expert Support:</span> Our team can help you identify the correct part for your machine.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Fast Delivery:</span> We understand urgency and offer quick shipping to get you back online.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Available Part Categories:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Laser Optics (Lenses, Mirrors)</li>
              <li>Nozzles and Consumables</li>
              <li>Power Supplies and Drivers</li>
              <li>Motors and Belts</li>
              <li>Control Boards and Electronics</li>
            </ul>

            <p className="pt-4">
              Can't find what you're looking for? Our sourcing team can help you track down specific or hard-to-find parts.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Spare%20Parts%20Inquiry">Inquire About Spare Parts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
