
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Inventex Labs',
  description: 'Learn more about Inventex Labs, our mission, values, and the team driving innovation in manufacturing.',
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">About Inventex Labs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Pioneering the Future of Manufacturing with Precision and AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Inventex Labs Team or Facility" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="team meeting" 
            />
            <p>
              At Inventex Labs, we are dedicated to revolutionizing the manufacturing industry by integrating cutting-edge technology with expert craftsmanship. Our platform provides seamless access to on-demand manufacturing services, empowering innovators, engineers, and businesses to bring their ideas to life faster and more efficiently than ever before.
            </p>
            <p>
              Our mission is to democratize manufacturing, making high-quality production accessible to everyone, from individual creators to large enterprises. We leverage artificial intelligence to optimize processes, provide instant quotations, and ensure the highest standards of quality and precision.
            </p>
            <h2 className="font-headline text-2xl text-primary pt-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Innovation:</span> We constantly seek new ways to improve and push the boundaries of manufacturing technology.</li>
              <li><span className="font-semibold text-foreground">Precision:</span> Quality is at the heart of everything we do. We are committed to delivering parts that meet the most exacting standards.</li>
              <li><span className="font-semibold text-foreground">Customer Focus:</span> Your success is our success. We partner with you to understand your needs and deliver solutions that exceed expectations.</li>
              <li><span className="font-semibold text-foreground">Accessibility:</span> We believe that advanced manufacturing should be within reach for all creators and businesses.</li>
            </ul>
             <p className="pt-4">
              Welcome to the future of manufacturing. Welcome to Inventex Labs.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
