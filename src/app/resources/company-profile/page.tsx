
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building2 } from 'lucide-react'; // Changed from Users2 to Building2 for better fit

export const metadata: Metadata = {
  title: 'Company Profile - Inventex Labs',
  description: 'Learn about Inventex Labs: our mission, vision, values, and commitment to revolutionizing manufacturing.',
};

export default function CompanyProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Building2 className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Inventex Labs Company Profile</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Innovating Manufacturing for a Smarter Future
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Inventex Labs office or workshop" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="modern office workshop"
            />
            <p>
              Inventex Labs is a forward-thinking manufacturing solutions provider dedicated to integrating cutting-edge technology with expert craftsmanship. We empower innovators, engineers, and businesses to bring their ideas to life efficiently and effectively.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Our Mission</h2>
            <p className="text-muted-foreground">
              To democratize advanced manufacturing by providing an accessible, AI-powered platform for instant quoting, seamless ordering, and high-quality production of custom parts and products.
            </p>

            <h2 className="font-headline text-2xl text-primary pt-2">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading global partner for on-demand manufacturing, recognized for our innovation, precision, and customer-centric approach, transforming how products are designed, created, and brought to market.
            </p>

            <h2 className="font-headline text-2xl text-primary pt-2">Our Core Values</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Innovation:</span> Continuously exploring and implementing new technologies to enhance our services.</li>
              <li><span className="font-semibold text-foreground">Precision:</span> Upholding the highest standards of quality and accuracy in every part we produce.</li>
              <li><span className="font-semibold text-foreground">Customer Focus:</span> Prioritizing the needs of our clients and fostering collaborative partnerships.</li>
              <li><span className="font-semibold text-foreground">Accessibility:</span> Making advanced manufacturing tools and services available to everyone.</li>
              <li><span className="font-semibold text-foreground">Integrity:</span> Operating with transparency, honesty, and ethical practices.</li>
            </ul>
            
            <p className="pt-4">
              Founded on the principles of excellence and technological advancement, Inventex Labs is committed to supporting the entire product development lifecycle, from initial concept to final production.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
