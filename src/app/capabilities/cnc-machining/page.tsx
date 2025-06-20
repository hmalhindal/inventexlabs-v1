
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Machining Services - Inventex Labs',
  description: 'Explore Inventex Labs\' high-precision CNC machining services for various materials and complex geometries.',
};

export default function CncMachiningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">CNC Machining Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Precision Engineering for Complex Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="CNC Machine in operation" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="CNC machine"
            />
            <p>
              Inventex Labs offers state-of-the-art CNC (Computer Numerical Control) machining services, delivering high-precision parts for a wide range of applications. Our advanced machinery and skilled technicians can produce complex geometries with tight tolerances, ensuring your components meet exact specifications.
            </p>
            <p>
              Whether you need prototypes, custom parts, or low-to-medium volume production runs, our CNC machining capabilities are designed to support your project needs. We work with a variety of materials, including metals like aluminum and steel, as well as various plastics.
            </p>
            <div className="my-6 flex justify-center">
              <Image 
                src="https://placehold.co/300x200.png"
                alt="Inventex Labs CNC Machining Service Showcase"
                width={300} 
                height={200} 
                className="rounded-md shadow-md"
                data-ai-hint="metal part"
              />
            </div>
            <h2 className="font-headline text-2xl text-primary pt-4">Our CNC Machining Capabilities:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>3-axis, 4-axis, and 5-axis CNC milling</li>
              <li>CNC turning and lathing</li>
              <li>Surface grinding and finishing</li>
              <li>Support for a wide range of engineering materials</li>
              <li>Rapid prototyping and production parts</li>
              <li>Strict quality control processes</li>
            </ul>
            <p className="pt-4">
              Our AI-powered platform simplifies the quoting process for CNC machined parts. Upload your CAD file today to get an instant estimate and experience the Inventex Labs difference in precision and speed.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get an Instant CNC Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
