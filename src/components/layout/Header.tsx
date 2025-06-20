import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
          <h1 className="font-headline text-2xl font-bold text-primary hidden sm:block">
            Inventex Labs
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
