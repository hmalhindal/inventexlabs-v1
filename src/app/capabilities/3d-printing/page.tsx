
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3D Printing Services - Inventex Labs',
  description: 'Rapid prototyping and custom part manufacturing with advanced 3D printing technologies at Inventex Labs.',
};

export default function ThreeDPrintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">3D Printing Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Additive Manufacturing for Prototypes and End-Use Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="3D printer in action" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="3D printer"
            />
            <p>
              Inventex Labs provides cutting-edge 3D printing services, offering a fast and flexible way to produce everything from intricate prototypes to functional end-use parts. We utilize a variety of additive manufacturing technologies to suit different material properties and application needs.
            </p>
            <p>
             Our platform supports instant quoting for 3D printed parts, allowing you to quickly assess costs and lead times for technologies like FDM, SLA, SLS, and more, across a range of polymers and resins.
            </p>
            <h2 className="font-headline text-2xl text-primary pt-4">Advantages of 3D Printing with Us:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Wide selection of 3D printing technologies (FDM, SLA, SLS, MJF)</li>
              <li>Diverse range of materials including plastics, resins, and composites</li>
              <li>Ideal for rapid prototyping, custom tooling, and complex geometries</li>
              <li>Low-volume production capabilities</li>
              <li>Fast turnaround times for urgent projects</li>
              <li>Expert support for design optimization</li>
            </ul>
            <p className="pt-4">
              Unlock the potential of additive manufacturing with Inventex Labs. Upload your 3D model to receive an instant quote and bring your designs to reality.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a 3D Printing Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
