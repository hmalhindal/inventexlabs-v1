
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Handheld Laser Welders - Inventex Labs',
  description: 'Flexible and efficient handheld laser welders for clean, strong metal joining.',
};

export default function HandheldLaserWelderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Handheld Laser Welders</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              The Future of Clean and Efficient Metal Welding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Handheld Laser Welder in use" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="laser welder"
            />
            <p>
              Handheld laser welders are revolutionizing metal fabrication by offering a portable, easy-to-use, and highly efficient alternative to traditional TIG and MIG welding. They produce strong, clean welds with minimal heat distortion.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Key Features & Capabilities:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">High Speed:</span> Up to 4 times faster than traditional welding methods.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Superior Quality:</span> Smooth, clean weld seams that require little to no post-processing.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Portability & Flexibility:</span> Lightweight welding gun allows for easy access to complex joints.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Low Heat Input:</span> Minimizes warping and deformation of the material.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Cabinet and kitchenware fabrication</li>
              <li>Door and window frame welding</li>
              <li>Automotive repair and modification</li>
              <li>Custom metal fabrication and art</li>
              <li>Sheet metal joining</li>
            </ul>

            <p className="pt-4">
              Experience the speed and quality of laser welding for your next fabrication project.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Handheld%20Laser%20Welder%20Inquiry">Inquire About Laser Welding</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
