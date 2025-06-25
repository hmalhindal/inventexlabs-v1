
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Handshake, Building, Zap, Store } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Partners - Inventex Labs',
  description: 'Discover the network of technology providers, suppliers, and collaborators that Inventex Labs works with.',
};

const partners = [
  { name: "Precision Tech Solutions", logo: "https://placehold.co/200x100.png?text=Partner1", description: "Leading provider of advanced CNC machinery and automation tools.", category: "Technology Partner", hint: "company logo" },
  { name: "Material Innovators Inc.", logo: "https://placehold.co/200x100.png?text=Partner2", description: "Specialists in developing and supplying high-performance engineering materials.", category: "Supplier", hint: "company logo" },
  { name: "AI Core Dynamics", logo: "https://placehold.co/200x100.png?text=Partner3", description: "Pioneers in AI algorithms for manufacturing process optimization.", category: "Technology Partner", hint: "company logo" },
  { name: "Global Logistics Group", logo: "https://placehold.co/200x100.png?text=Partner4", description: "Ensuring efficient and reliable delivery of manufactured parts worldwide.", category: "Logistics Partner", hint: "company logo" },
];

export default function OurPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Handshake className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Our Valued Partners</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaboration is key to innovation. We are proud to work with a network of leading organizations to deliver exceptional manufacturing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 bg-secondary/30 p-4">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  width={120} 
                  height={60} 
                  className="rounded object-contain"
                  data-ai-hint={partner.hint}
                />
                <div>
                  <CardTitle className="font-headline text-xl text-primary">{partner.name}</CardTitle>
                  <CardDescription className="text-sm">{partner.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground text-sm">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8">
            <Card className="w-full max-w-2xl mx-auto shadow-lg bg-primary/10">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl text-primary flex items-center justify-center gap-2"><Zap /> Become a Partner</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-lg text-muted-foreground mb-4">
                    Interested in collaborating with Inventex Labs? We are always open to exploring new partnerships that can enhance our platform.
                    </p>
                    <Link href="/contact-us?subject=PartnershipInquiry" className="text-primary font-semibold hover:underline text-lg">
                    Contact Us for Opportunities &rarr;
                    </Link>
                </CardContent>
            </Card>
        </div>

      </main>
      <Footer />
    </div>
  );
}
