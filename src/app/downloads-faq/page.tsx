
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, BookOpen, HelpCircle, FileText, Palette, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Downloads & FAQ - Inventex Labs',
  description: 'Access corporate brochures, material swatches, design guides, and frequently asked questions from Inventex Labs.',
};

const downloadItems = [
  {
    title: 'Our Corporate Brochure',
    href: '#', // Placeholder for actual download link
    icon: Download,
    description: 'Learn more about Inventex Labs, our mission, and services.',
  },
  {
    title: 'Acrylic Sheet Swatch',
    href: '#', // Placeholder
    icon: Palette,
    description: 'Explore available acrylic colors and finishes.',
  },
  {
    title: 'Wood MDF Swatch',
    href: '#', // Placeholder
    icon: Layers,
    description: 'View our range of wood and MDF options.',
  },
  {
    title: 'ACP Sheets Catalog',
    href: '#', // Placeholder
    icon: FileText,
    description: 'Browse our Aluminum Composite Panel offerings.',
  },
  {
    title: 'Design Guides',
    href: '/resources/manufacturing-resources',
    icon: BookOpen,
    description: 'Access our comprehensive design and manufacturing guides.',
    isPageLink: true,
  },
  {
    title: 'Frequently Asked Questions',
    href: '/faq',
    icon: HelpCircle,
    description: 'Find answers to common questions about our platform and services.',
    isPageLink: true,
  },
];

export default function DownloadsFaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Download className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Downloads & FAQ</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Access valuable resources and find answers to your questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {downloadItems.map((item) => (
              <Card key={item.title} className="bg-secondary/30 hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  {item.isPageLink ? (
                    <Button asChild variant="outline" size="sm">
                      <Link href={item.href}>View Page</Link>
                    </Button>
                  ) : (
                    <Button asChild variant="default" size="sm">
                      <a href={item.href} download target="_blank" rel="noopener noreferrer">Download</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
