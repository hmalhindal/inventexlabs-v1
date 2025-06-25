
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flag } from 'lucide-react'; 

export const metadata: Metadata = {
  title: 'Signs & Banners Services - Inventex Labs',
  description: 'Custom signs, banners, and display solutions for your business and events at Inventex Labs.',
};

const mountingOptions = [
  {
    title: "Skeleton",
    description: "Neon is mounted directly to your wall, giving a very clean look. Note: Requires professional installation.",
    image: "https://placehold.co/400x250.png",
    imageHint: "neon sign"
  },
  {
    title: "Acrylic",
    description: "Neon is mounted on to a clear acrylic sheet. Screw holes are added so the sign is easy to mount.",
    image: "https://placehold.co/400x250.png",
    imageHint: "neon sign acrylic"
  },
  {
    title: "Acrylic Box",
    description: "Neon is mounted into a clear acrylic box. Great for areas with potential for damage, like public spaces. The front is removable for cleaning.",
    image: "https://placehold.co/400x250.png",
    imageHint: "neon sign box"
  },
  {
    title: "Tray Mounted",
    description: "Neon is mounted on the face of the tray. Trays can be painted any color, and transformers can be hidden behind the tray.",
    image: "https://placehold.co/400x250.png",
    imageHint: "neon sign tray"
  },
  {
    title: "Wire Cage",
    description: "Neon is mounted behind a wire cage, giving a vintage/retro feel while adding protection from damage.",
    image: "https://placehold.co/400x250.png",
    imageHint: "neon sign cage"
  }
];

export default function SignsAndBannersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-6xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Flag className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Signs & Banners Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              High-Quality Custom Signage and Promotional Displays
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/1200x500.png" 
              alt="Various custom signs and banners" 
              width={1200} 
              height={500} 
              className="rounded-lg mb-6"
              data-ai-hint="signage display"
            />
            <p>
              Inventex Labs offers a comprehensive range of custom sign and banner solutions to elevate your brand visibility and make a lasting impression. From vibrant event banners to durable outdoor signs and professional indoor displays, we provide high-quality products tailored to your specific needs.
            </p>
            <p>
              Our state-of-the-art printing and fabrication technologies ensure crisp graphics, vivid colors, and long-lasting materials. Whether you need a single banner or a complete signage package for your business, our team is ready to assist.
            </p>

            <h2 className="font-headline text-3xl text-primary pt-8 text-center">Our Signage Offerings</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                {['LED Letter sign', 'Marquee Letters', 'LED neon sign', 'Neon sign toolkit', 'Signage lightbox', 'Infinity mirror lightbox', 'Ultra thin lightbox', 'Blade sign', 'Braille & ADA Sign'].map(item => (
                    <Card key={item} className="p-4 bg-card hover:shadow-md transition-shadow">
                        <CardTitle className="text-base font-semibold text-card-foreground">{item}</CardTitle>
                    </Card>
                ))}
            </div>

            <section className="pt-12">
              <h2 className="font-headline text-3xl text-primary pt-8 text-center mb-8">Neon Mounting Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {mountingOptions.map((option) => (
                  <Card key={option.title} className="flex flex-col text-center bg-card hover:shadow-lg transition-shadow">
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={400}
                      height={250}
                      className="rounded-t-lg object-cover"
                      data-ai-hint={option.imageHint}
                    />
                    <CardHeader className="pb-2">
                      <CardTitle className="font-headline text-lg text-primary">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <p className="pt-8 text-center">
              Let us help you create impactful visual communications. Contact us to discuss your project or upload your design for a custom quote.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Signs%20and%20Banners%20Inquiry">Get a Quote for Signs & Banners</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
