
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Platform - Inventex Labs',
  description: 'Discover the features and benefits of the Inventex Labs platform for instant quoting and manufacturing.',
};

export default function OurPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">The Inventex Labs Platform</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Streamlined Manufacturing from Design to Delivery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-lg">
            <Image 
              src="https://placehold.co/800x450.png" 
              alt="Inventex Labs Platform Interface" 
              width={800} 
              height={450} 
              className="rounded-lg mb-6"
              data-ai-hint="software interface"
            />
            <p>
              The Inventex Labs platform is engineered to simplify the complexities of manufacturing. We offer an intuitive, AI-powered interface that allows you to upload your CAD designs, select materials and processes, and receive instant, transparent quotations. Our goal is to make on-demand manufacturing fast, reliable, and accessible.
            </p>
            
            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">Key Features & Benefits</h2>
              <ul className="space-y-3">
                {[
                  { title: "Instant AI-Powered Quotes", description: "Upload your design and get a comprehensive quote in seconds, powered by our advanced AI algorithms." },
                  { title: "Wide Range of Capabilities", description: "Access CNC machining, laser cutting, and more, with a diverse selection of materials." },
                  { title: "Design for Manufacturability (DFM) Feedback", description: "Our platform provides automated feedback to help optimize your designs for production." },
                  { title: "Transparent Pricing", description: "No hidden fees. Understand the cost breakdown for materials, labor, and machine time." },
                  { title: "Order Tracking", description: "Stay informed with real-time updates on your order status from production to shipment." },
                  { title: "Secure & Confidential", description: "We prioritize the security of your intellectual property with robust data protection measures." }
                ].map(item => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-base">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="pt-4">
              Experience the ease and efficiency of modern manufacturing with Inventex Labs. Get started today and transform your innovative ideas into tangible realities.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
