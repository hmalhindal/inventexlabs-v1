
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cog } from 'lucide-react'; // Using Cog as a generic metal/machining icon

export const metadata: Metadata = {
  title: 'Aluminum Material - Inventex Labs',
  description: 'Learn about aluminum and its alloys for CNC machining, laser cutting, and sheet metal fabrication at Inventex Labs.',
};

export default function AluminumMaterialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Cog className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Aluminum</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Lightweight, Strong, and Corrosion-Resistant Metal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Samples of aluminum sheets and machined parts" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="aluminum metal parts"
            />
            <p>
              Aluminum is a versatile and widely used metal known for its excellent strength-to-weight ratio, corrosion resistance, and good thermal and electrical conductivity. It is easily machined, formed, and extruded, making it suitable for a vast range of applications across various industries.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Key Properties of Aluminum:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Lightweight:</span> Approximately one-third the density of steel.</li>
              <li><span className="font-semibold text-foreground">Corrosion Resistance:</span> Forms a protective oxide layer, providing excellent resistance to corrosion.</li>
              <li><span className="font-semibold text-foreground">Strength:</span> Can be alloyed to achieve a wide range of mechanical properties, some comparable to steel.</li>
              <li><span className="font-semibold text-foreground">Machinability:</span> Generally easy to machine, though some alloys can be gummy.</li>
              <li><span className="font-semibold text-foreground">Formability:</span> Highly ductile and can be easily bent, stamped, and drawn.</li>
              <li><span className="font-semibold text-foreground">Conductivity:</span> Good thermal and electrical conductivity.</li>
              <li><span className="font-semibold text-foreground">Recyclability:</span> Highly recyclable without loss of quality.</li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-2">Common Aluminum Alloys & Applications:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">6061:</span> A popular general-purpose alloy with good strength, weldability, and corrosion resistance. Used in structural components, machine parts, and enclosures.</li>
              <li><span className="font-semibold text-foreground">5052:</span> Excellent formability and corrosion resistance, particularly in marine environments. Used for sheet metal work, tanks, and marine components.</li>
              <li><span className="font-semibold text-foreground">7075:</span> High-strength alloy, often used in aerospace and high-stress applications.</li>
            </ul>
            <p className="pt-4">
              Inventex Labs offers CNC machining, laser cutting, and sheet metal fabrication services for various aluminum alloys, catering to projects from prototypes to production runs.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote for Aluminum Parts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
