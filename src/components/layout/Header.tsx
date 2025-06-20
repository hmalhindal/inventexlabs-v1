import Link from 'next/link';
import { Sheet } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sheet className="h-8 w-8 text-primary group-hover:animate-pulse" />
          <h1 className="font-headline text-2xl font-bold text-primary">
            FabQuote
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          {/* <Link href="/track-order" className="text-sm hover:text-primary transition-colors">
            Track Order
          </Link> */}
          {/* Add more navigation links if needed */}
        </nav>
      </div>
    </header>
  );
}
