
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fiber Laser Cutters - Inventex Labs',
  description: 'High-precision fiber laser cutters for detailed metal fabrication.',
};

export default function FiberLaserCutterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Fiber Laser Cutters</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Ultimate Precision for Metal Sheet Cutting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Fiber Laser Cutting Machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="fiber laser cutter"
            />
            <p>
              Fiber laser cutters are at the forefront of metal fabrication technology, offering unparalleled speed, precision, and efficiency for cutting sheet metals like steel, stainless steel, aluminum, brass, and copper.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Exceptional Precision:</span> Creates intricate designs with extremely fine details and tight tolerances.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Clean Cuts:</span> Produces smooth, high-quality edges with a minimal heat-affected zone.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">High Efficiency:</span> Faster cutting speeds and lower energy consumption compared to CO2 lasers.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Low Maintenance:</span> Solid-state laser source requires minimal maintenance.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Sheet metal enclosures and panels</li>
              <li>Automotive parts and brackets</li>
              <li>Custom machinery components</li>
              <li>Decorative metal screens and art</li>
              <li>Aerospace and defense components</li>
            </ul>

            <p className="pt-4">
              Rely on our fiber laser cutting services for parts that demand the highest level of accuracy and a superior finish.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Fiber%20Laser%20Cutter%20Inquiry">Inquire About Fiber Laser Cutting</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
