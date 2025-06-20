
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Injection Moulding Services - Inventex Labs',
  description: 'High-quality injection moulding services for scalable production of plastic parts at Inventex Labs.',
};

export default function InjectionMouldingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Injection Moulding Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Scalable Production for Plastic Components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Injection moulding machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="injection machine"
            />
            <p>
              Inventex Labs provides comprehensive injection moulding services, ideal for producing high volumes of plastic parts with consistency and cost-effectiveness. Our expertise covers a wide range of thermoplastic materials, enabling us to meet diverse application requirements.
            </p>
            <p>
              From initial design consultation and mould creation to full-scale production and quality assurance, we offer an end-to-end solution for your injection moulding needs. Our platform allows for quick quoting and project management.
            </p>
            <h2 className="font-headline text-2xl text-primary pt-4">Why Choose Injection Moulding with Us:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Rapid tooling and production mould options</li>
              <li>Wide selection of thermoplastic resins and colorants</li>
              <li>Overmoulding and insert moulding capabilities</li>
              <li>Suitable for complex geometries and intricate details</li>
              <li>Cost-effective for medium to high-volume production</li>
              <li>Dedicated project management and quality control</li>
            </ul>
            <p className="pt-4">
              If you're looking for reliable and efficient plastic part manufacturing, Inventex Labs is your trusted partner. Submit your design to explore our injection moulding solutions.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Request an Injection Moulding Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
