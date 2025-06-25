
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galvo Head Lasers - Inventex Labs',
  description: 'High-speed Galvo head laser systems for precision marking and engraving.',
};

export default function GalvoHeadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Galvo Head Lasers</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Unmatched Speed and Precision for Marking & Engraving
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Galvo Head Laser Machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="galvo laser machine"
            />
            <p>
              Galvo (galvanometer) laser systems use high-speed mirrors to direct the laser beam, enabling incredibly fast and precise marking, engraving, and cutting of intricate designs. They are ideal for applications requiring high throughput and fine detail.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">High Speed:</span> Capable of marking at speeds significantly faster than traditional plotters.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Extreme Precision:</span> Delivers fine details, sharp corners, and high-resolution marks.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Versatile Materials:</span> Works effectively on metals, plastics, ceramics, and more.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Non-Contact Process:</span> Eliminates tool wear and material stress.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Serial number and barcode marking</li>
              <li>Logo and brand engraving on products</li>
              <li>Medical device marking</li>
              <li>Electronic component serialization</li>
              <li>Fine-detail cutting of thin materials</li>
            </ul>

            <p className="pt-4">
              Our Galvo laser systems provide the performance and reliability needed for demanding industrial and creative projects. Contact us to learn how our Galvo technology can benefit your application.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Galvo%20Laser%20Inquiry">Inquire About Galvo Lasers</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
