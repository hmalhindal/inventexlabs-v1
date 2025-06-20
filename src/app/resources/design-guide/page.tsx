
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Wrench, Zap, LayoutPanelLeft, Printer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design Guides - Inventex Labs',
  description: 'Access comprehensive design guides for various manufacturing processes offered by Inventex Labs.',
};

const designGuideLinks = [
  { title: "CNC Machining Design Guide", href: "/resources/cnc-design-guide", description: "Best practices for designing parts for CNC machining.", icon: Wrench },
  { title: "Laser Cutting Design Guide", href: "/resources/laser-cutting-design-guide", description: "Tips for optimizing designs for laser cutting.", icon: Zap },
  { title: "Sheet Metal Design Guide", href: "/resources/sheet-metal-design-guide", description: "Considerations for effective sheet metal part design.", icon: LayoutPanelLeft },
  { title: "Digital Printing Design Guide", href: "/resources/digital-printing-design-guide", description: "Guidelines for preparing artwork for digital printing.", icon: Printer },
  // Add more specific design guides here as they are created
];

export default function DesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Design Guides</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Your Hub for Manufacturing Design Knowledge
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-lg text-center">
              At Inventex Labs, we empower you with the knowledge to optimize your designs for manufacturing. Explore our collection of guides to ensure your parts are well-suited for our processes, leading to better quality, reduced costs, and faster turnaround times.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {designGuideLinks.map((item) => (
                <Link href={item.href} key={item.title} className="block hover:no-underline">
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl text-primary font-headline">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              {/* Placeholder for a future digital printing design guide link, to be created */}
               {!designGuideLinks.find(link => link.href === "/resources/digital-printing-design-guide") && (
                 <Link href="#" key="Digital Printing Design Guide (Coming Soon)" className="block hover:no-underline opacity-50 cursor-not-allowed">
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Printer className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl text-primary font-headline">Digital Printing Design Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">Guidelines for preparing artwork for digital printing. (Coming Soon)</p>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
             <p className="text-center text-muted-foreground pt-4">
              For specific material information, please visit our <Link href="/materials" className="text-primary hover:underline">materials section</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
