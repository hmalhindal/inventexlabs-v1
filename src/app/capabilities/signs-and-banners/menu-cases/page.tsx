
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MenuCasesIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Menu Cases - Inventex Labs',
  description: 'Secure and stylish lockable menu cases for outdoor and indoor use from Inventex Labs.',
};

export default function MenuCasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <MenuCasesIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Menu Cases</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Protect and display your menus with our elegant cases.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A lockable menu case on an exterior restaurant wall" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="restaurant menu case"
            />
            <p>
              Display your menu outdoors or in high-traffic areas with confidence using our durable menu cases. Designed to be weather-resistant and secure, these lockable cases protect your printed menus from the elements and tampering while presenting them in a professional manner.
            </p>
            <p>
              We offer a range of styles, from sleek aluminum frames to classic wooden designs, with options for internal illumination to make your menu stand out at night. Our menu cases are perfect for restaurants, hotels, theaters, and community centers.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Menu%20Case%20Inquiry">Inquire About Menu Cases</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
