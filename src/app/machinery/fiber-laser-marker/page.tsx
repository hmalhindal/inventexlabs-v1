
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fiber Laser Markers - Inventex Labs',
  description: 'Precision fiber laser markers for permanent engraving on metals and plastics.',
};

export default function FiberLaserMarkerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Fiber Laser Markers</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              High-Speed, Permanent Marking and Engraving
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Fiber Laser Marking Machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="laser marker machine"
            />
            <p>
              Fiber laser markers are the industry standard for creating permanent, high-contrast marks on a wide range of materials, especially metals and engineering plastics. They offer a reliable, fast, and precise solution for traceability and branding.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">High Precision:</span> Creates incredibly fine lines and detailed graphics.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Permanent Marks:</span> Engraves marks that are resistant to abrasion, heat, and chemicals.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Fast Marking Speed:</span> Ideal for high-volume production lines.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Low Maintenance:</span> Long-lasting fiber laser source with no consumables.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Engraving serial numbers, QR codes, and barcodes</li>
              <li>Adding logos and branding to promotional items</li>
              <li>Marking medical and surgical instruments</li>
              <li>Traceability marks on automotive and aerospace parts</li>
            </ul>

            <p className="pt-4">
              Our fiber laser marking systems deliver consistent, high-quality results for all your identification and personalization needs.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Fiber%20Laser%20Marker%20Inquiry">Inquire About Fiber Laser Marking</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
