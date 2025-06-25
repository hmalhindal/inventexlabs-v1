
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Printer, Star, Truck, Type, Flag, Megaphone, GalleryVertical, Layers, Store, Presentation, ShoppingCart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Printing Services - Inventex Labs',
  description: 'High-quality digital printing for various applications including marketing materials, signage, and custom prints at Inventex Labs.',
};

export default function DigitalPrintingPage() {
  const productCategories = [
    {
      title: 'Fleet & Vehicle',
      description: 'We work with fleet wraps, truck wraps, car wraps, and even boat decals and wraps!',
      gridClass: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      products: [
        {
          icon: Star,
          title: 'Rigid Signage',
          description: 'We produce short and large run rigid signage in many different shapes and sizes. Our signs can vary widely in colour and design. No minimum order!',
        },
        {
          icon: Truck,
          title: 'Vehicle Wraps',
          description: "We'll make the designs, print the vinyl (micro-perforated, if you need them on windows), and can even take care of the installation if needed. Don't leave your message behind - take it with you in a vehicle wrap.",
        },
        {
          icon: Type,
          title: 'Vinyl Lettering',
          description: 'Although it sounds obvious, a quality letter print can go a long way in communicating your brand or ideas. We can print, contour cut and mount whatever lettering project you have.',
        },
      ]
    },
    {
      title: 'Tradeshow & Event',
      description: 'Get ready for your next event with our print products. Posters, banners, graphics and more!',
      gridClass: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      products: [
        {
          icon: Flag,
          title: 'Display Banners',
          description: 'We produce full color digitally printed banners of all types. Use it for outdoor advertising, POS for business, promote your band, large event signage. A million different uses!',
        },
        {
          icon: Megaphone,
          title: 'Event Signage',
          description: 'Trade show displays, Event Signage, Touchpoints, Point of Sales, Concessions, Wall Mounted Displays, Backlit Displays, Outdoor Signage and much, much more.',
        },
        {
            icon: Store,
            title: 'Booths',
            description: 'Custom-designed booths and backdrops to make your exhibit stand out from the crowd.',
        },
        {
            icon: Presentation,
            title: 'Pop Up Displays',
            description: 'Portable and easy-to-assemble pop-up displays and banners for maximum impact with minimal setup.',
        },
        {
            icon: ShoppingCart,
            title: 'Trolley Carts',
            description: 'Branded trolley carts for product display or transportation at events, fully customizable.',
        },
      ]
    },
    {
      title: 'Business & Stores',
      description: "As a business, you've got to communicate. Communicate well with our business & store products.",
      gridClass: 'grid grid-cols-1 md:grid-cols-2 gap-6',
      products: [
        {
          icon: GalleryVertical,
          title: 'Posters & Displays',
          description: 'Posters stand out and get your message across. Our poster prints can be mounted on a light, durable backing that is ready for installation. Printed on high-quality vinyl, the posters we deliver are ready for anything!',
        },
        {
          icon: Layers,
          title: 'Window Clings',
          description: 'Dress up your store and stand out from the rest. We help you design for a more impactful storefront. Our professionals can guide you through design, material selection, and installation.',
        },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Printer className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Digital Printing Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Vibrant & Versatile Printing Solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Digital printing press in action" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="digital printer press"
            />
            <p>
              Inventex Labs offers cutting-edge digital printing services, providing fast, flexible, and high-quality prints for a wide array of materials and applications. From business cards and brochures to large format banners and custom decals, our digital printing technology delivers stunning results with sharp details and vibrant colors.
            </p>
            <p>
              Our platform makes it easy to upload your designs, select your print specifications, and get an instant quote for your digital printing projects. We support various file formats and offer a range of finishing options.
            </p>
            <div className="my-6 flex justify-center">
              <Image 
                src="https://placehold.co/300x200.png"
                alt="Inventex Labs Digital Printing Service Showcase"
                width={300} 
                height={200} 
                className="rounded-md shadow-md"
                data-ai-hint="printed materials"
              />
            </div>
            <h2 className="font-headline text-2xl text-primary pt-4">Advantages of Digital Printing with Us:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Excellent print quality with high resolution and color accuracy.</li>
              <li>Fast turnaround times, ideal for short runs and urgent projects.</li>
              <li>Cost-effective for small to medium quantities.</li>
              <li>Ability to print variable data (e.g., personalized mailers).</li>
              <li>Wide range of printable substrates including paper, cardstock, vinyl, canvas, and more.</li>
              <li>Customizable sizes and finishing options (lamination, cutting, mounting).</li>
            </ul>

            <div className="border-t border-border my-8" />
            <h2 className="font-headline text-3xl text-foreground pt-4 text-center">Our Digital Printing Products</h2>
            
            {productCategories.map((category) => (
              <section key={category.title} className="pt-8">
                <div className="text-center mb-8">
                  <h3 className="font-headline text-2xl text-primary">{category.title}</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mt-2">{category.description}</p>
                </div>
                <div className={category.gridClass}>
                  {category.products.map(product => (
                    <Card key={product.title} className="bg-card text-card-foreground border-t-4 border-primary flex flex-col">
                      <CardHeader className="flex-row items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-md">
                              <product.icon className="h-8 w-8 text-primary shrink-0" />
                          </div>
                          <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            <p className="pt-4">
              Bring your creative visions to life with Inventex Labs' digital printing services. Whether for marketing, branding, or personal projects, we deliver prints that make an impact.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Digital%20Printing%20Quote">Get a Digital Printing Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
