
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CNC Routers - Inventex Labs',
  description: 'Versatile CNC routers for cutting and carving wood, plastics, and soft metals.',
};

export default function CncRouterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">CNC Routers</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Precision Cutting and Carving for Diverse Materials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="CNC Router Machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="cnc router machine"
            />
            <p>
              Our CNC (Computer Numerical Control) routers are powerful and versatile machines capable of precisely cutting, carving, and shaping a wide variety of materials, including wood, plastics, foam, and soft metals like aluminum. They are the workhorse for many fabrication projects.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Large Work Area:</span> Accommodates large sheets of material for sizable projects.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">3-Axis Machining:</span> Precise control over X, Y, and Z axes for complex shapes.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">High Accuracy:</span> Delivers repeatable, high-precision results for consistent quality.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Versatile Tooling:</span> Can be fitted with various bits for cutting, engraving, and surfacing.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Custom signage and lettering</li>
              <li>Woodworking and cabinet making</li>
              <li>Prototyping and model making</li>
              <li>Mold making for composites and plastics</li>
              <li>Engraving and decorative carving</li>
            </ul>

            <p className="pt-4">
              From intricate artistic pieces to robust mechanical parts, our CNC routers offer the flexibility and precision your project demands.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=CNC%20Router%20Inquiry">Inquire About CNC Routers</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
