
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MenuBoardsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Menu Boards - Inventex Labs',
  description: 'Custom menu boards for restaurants, cafes, and retail at Inventex Labs.',
};

export default function MenuBoardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <MenuBoardsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Menu Boards</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Display your offerings with clear and stylish menu boards.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Custom menu board in a cafe setting" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="cafe menu board"
            />
            <p>
              Present your menu in style with custom-designed menu boards from Inventex Labs. We create durable and attractive menu systems for restaurants, cafes, bars, and retail stores. Whether you need digital display enclosures, changeable letter boards, or beautifully engraved wooden menus, we can fabricate a solution that fits your brand's aesthetic.
            </p>
            <p>
              Our menu boards can be illuminated, framed, or mounted to suit your space. We'll help you choose the right materials and design to make your offerings pop.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Menu%20Boards%20Inquiry">Inquire About Menu Boards</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
