
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Wrench, Lightbulb, Zap } from 'lucide-react'; // Added Zap for Laser Cutting

export const metadata: Metadata = {
  title: 'Manufacturing Resources - Inventex Labs',
  description: 'Access valuable manufacturing resources, guides, and insights from Inventex Labs.',
};

const resourceItems = [
  { title: "CNC Design Guide", href: "/resources/cnc-design-guide", description: "Best practices for designing parts for CNC machining.", icon: Wrench },
  { title: "Laser Cutting Design Guide", href: "/resources/laser-cutting-design-guide", description: "Tips for optimizing designs for laser cutting.", icon: Zap },
  { title: "Sheet Metal Design Guide", href: "/resources/sheet-metal-design-guide", description: "Considerations for effective sheet metal part design.", icon: Wrench },
  // { title: "3D Printing Design Guide", href: "/resources/3d-printing-design-guide", description: "Guidelines for designing for various 3D printing technologies.", icon: Wrench }, // Removed
  { title: "Material Selection Guides", href: "/materials", description: "Information on various materials for manufacturing processes.", icon: BookOpen },
  { title: "Industry Insights & Blog", href: "/blog", description: "Articles on manufacturing trends, tips, and innovations.", icon: Lightbulb },
];

export default function ManufacturingResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Manufacturing Resources</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Your Hub for Manufacturing Knowledge and Best Practices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-lg text-center">
              At Inventex Labs, we believe in empowering our users with the knowledge they need to succeed. Explore our collection of design guides, material information, and industry insights to optimize your manufacturing projects.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {resourceItems.map((item) => (
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
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
