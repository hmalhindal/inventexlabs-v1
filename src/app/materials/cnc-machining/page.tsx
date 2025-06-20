
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining Materials - Inventex Labs',
  description: 'Explore the range of materials available for CNC machining at Inventex Labs, including metals and plastics.',
};

export default function CncMachiningMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Materials for CNC Machining</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Choosing the Right Material for Your CNC Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Various CNC machined material samples" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="metal samples"
            />
            <p>
              Selecting the appropriate material is crucial for the performance and success of your CNC machined parts. Inventex Labs offers a diverse selection of engineering-grade metals and plastics suitable for various applications and industries.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Commonly Used Metals:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Aluminum (e.g., 6061, 7075):</span> Lightweight, good strength-to-weight ratio, excellent machinability.</li>
              <li><span className="font-semibold text-foreground">Steel (e.g., Stainless Steel 303/304/316, Alloy Steel 4140):</span> High strength, durability, corrosion resistance options.</li>
              <li><span className="font-semibold text-foreground">Brass:</span> Good machinability, corrosion resistance, electrical conductivity.</li>
              <li><span className="font-semibold text-foreground">Titanium:</span> High strength-to-weight ratio, excellent corrosion resistance, biocompatible.</li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-2">Commonly Used Plastics:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">ABS:</span> Good impact resistance, toughness, and rigidity.</li>
              <li><span className="font-semibold text-foreground">Delrin® (POM):</span> High stiffness, low friction, excellent dimensional stability.</li>
              <li><span className="font-semibold text-foreground">Nylon:</span> Good mechanical strength, wear resistance.</li>
              <li><span className="font-semibold text-foreground">PEEK:</span> High-performance thermoplastic, excellent mechanical and chemical resistance at high temperatures.</li>
              <li><span className="font-semibold text-foreground">Polycarbonate:</span> High impact strength, transparency.</li>
            </ul>
            <p className="pt-4">
              Our platform guides you through material selection, and our experts are available to help you choose the best option based on your design requirements, application, and budget.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote with Your Chosen Material</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
