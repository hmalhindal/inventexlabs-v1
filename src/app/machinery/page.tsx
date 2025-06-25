
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Machinery - Inventex Labs',
  description: 'Explore the range of advanced machinery and equipment available at Inventex Labs for all your manufacturing needs.',
};

const machineryList = [
  {
    name: 'Galvo Head',
    arabicName: 'جلفو هيد',
    slug: 'galvo-head',
    productCount: 1,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'galvo laser',
  },
  {
    name: 'Plasma Cutter',
    arabicName: 'بلازما',
    slug: 'plasma-cutter',
    productCount: 2,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'plasma cutter machine',
  },
  {
    name: 'Fiber Laser Marker',
    arabicName: 'فايبر',
    slug: 'fiber-laser-marker',
    productCount: 1,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'laser marker',
  },
  {
    name: 'CNC Router',
    arabicName: 'راوتر',
    slug: 'cnc-router',
    productCount: 3,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'cnc router machine',
  },
  {
    name: 'Spare Parts',
    arabicName: 'قطع غيار',
    slug: 'spare-parts',
    productCount: 9,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'gears tools',
  },
  {
    name: 'Fiber Laser Cutter',
    arabicName: 'فايبر ليزر',
    slug: 'fiber-laser-cutter',
    productCount: 4,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'fiber laser cutter',
  },
  {
    name: 'Handheld Laser Welder',
    arabicName: 'لحام ليزر يدوي',
    slug: 'handheld-laser-welder',
    productCount: 2,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'laser welder',
  },
  {
    name: 'Support & Services',
    arabicName: 'الدعم والخدمات',
    slug: 'support-services',
    productCount: 5,
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'support team',
  },
];

export default function MachineryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Our Machinery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of our state-of-the-art equipment for manufacturing and fabrication.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {machineryList.map((machine) => (
            <Link key={machine.slug} href={`/machinery/${machine.slug}`} className="block group">
              <Card className="overflow-hidden text-center shadow-md hover:shadow-xl transition-shadow h-full bg-card">
                <CardContent className="p-4 flex flex-col items-center justify-center gap-4">
                  <div className="relative w-full aspect-video flex items-center justify-center">
                     <Image
                        src={machine.imageUrl}
                        alt={machine.name}
                        width={300}
                        height={200}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={machine.imageHint}
                      />
                  </div>
                  <div className="mt-2">
                    <h2 className="font-headline text-2xl text-foreground font-semibold">{machine.arabicName}</h2>
                    <p className="text-muted-foreground text-sm mt-1">{machine.productCount} {machine.productCount > 1 ? 'Products' : 'Product'}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
