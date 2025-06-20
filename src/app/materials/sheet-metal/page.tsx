
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sheet Metal Materials - Inventex Labs',
  description: 'Learn about the types of sheet metals like steel, aluminum, and stainless steel used in fabrication at Inventex Labs.',
};

export default function SheetMetalMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Materials for Sheet Metal Fabrication</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Choosing the Right Metal for Your Fabricated Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Various sheet metal types" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="metal sheets"
            />
            <p>
              Inventex Labs works with a variety of sheet metals to meet the diverse needs of our customers. The choice of material depends on factors such as required strength, corrosion resistance, weight, cost, and finish.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Common Sheet Metal Materials:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Aluminum (e.g., 5052, 6061):</span> Lightweight, excellent corrosion resistance, good formability. Often used for enclosures, brackets, and automotive parts.</li>
              <li><span className="font-semibold text-foreground">Steel (e.g., Cold Rolled, Hot Rolled, Galvanized):</span> Strong, durable, and cost-effective. Suitable for structural components, chassis, and general fabrication. Galvanized steel offers corrosion protection.</li>
              <li><span className="font-semibold text-foreground">Stainless Steel (e.g., 304, 316):</span> Excellent corrosion resistance, hygienic properties, aesthetic appeal. Used in food processing, medical devices, and architectural applications.</li>
              <li><span className="font-semibold text-foreground">Brass & Copper:</span> Good electrical conductivity, corrosion resistance, decorative appearance. Used for electrical components and decorative items.</li>
            </ul>
            <p>
              We can source various thicknesses and grades of these materials. Our team can provide guidance on the best sheet metal material for your specific application, considering both performance and budget.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote for Your Sheet Metal Design</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
