
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - Inventex Labs',
  description: 'Read the latest articles, news, and insights on manufacturing, engineering, and technology from Inventex Labs.',
};

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Manufacturing",
    date: "October 26, 2023",
    excerpt: "Exploring how artificial intelligence is reshaping the manufacturing landscape, from design optimization to quality control.",
    slug: "/blog/future-of-ai-in-manufacturing",
    image: "https://placehold.co/600x400.png",
    image_hint: "AI robot"
  },
  {
    id: 2,
    title: "Choosing the Right Material for Your CNC Project",
    date: "October 15, 2023",
    excerpt: "A deep dive into material selection for CNC machining, covering common metals and plastics and their applications.",
    slug: "/blog/choosing-cnc-material",
    image: "https://placehold.co/600x400.png",
    image_hint: "metal parts"
  },
  {
    id: 3,
    title: "5 Tips for Optimizing Your Sheet Metal Designs",
    date: "September 28, 2023",
    excerpt: "Learn how to design sheet metal parts for better manufacturability, reduced costs, and improved performance.",
    slug: "/blog/optimizing-sheet-metal-designs",
    image: "https://placehold.co/600x400.png",
    image_hint: "metal fabrication"
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Inventex Labs Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in manufacturing technology and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Link href={post.slug} className="block">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.image_hint} 
                />
              </Link>
              <CardHeader>
                <Link href={post.slug} className="hover:no-underline">
                  <CardTitle className="font-headline text-xl text-primary hover:underline">{post.title}</CardTitle>
                </Link>
                <CardDescription className="text-xs">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={post.slug} className="text-sm text-primary font-semibold hover:underline">
                  Read More &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
        {/* Placeholder for actual blog post pages - for now, links will go to 404 or this page itself if not created */}
      </main>
      <Footer />
    </div>
  );
}
