
import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const serviceLinks = [
  { href: '/capabilities/cnc-machining', label: 'CNC Machining' },
  { href: '/capabilities/laser-cutting', label: 'Laser Cutting' },
  { href: '/capabilities/sheet-metal', label: 'Sheet Metal Fabrication' },
  { href: '/capabilities/3d-printing', label: '3D Printing' },
  { href: '/capabilities/signs-and-banners', label: 'Signs & Banners' },
];

const productLinks = [
  { href: '/products', label: 'All Products' },
  // Add more product categories here if needed in the future
];

const materialLinks = [
  { href: '/materials/cnc-machining', label: 'CNC Machining Materials' },
  { href: '/materials/laser-cutting', label: 'Laser Cutting Materials' },
  { href: '/materials/sheet-metal', label: 'Sheet Metal Materials' },
  { href: '/materials/3d-printing', label: '3D Printing Materials' },
];

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
          <h1 className="font-headline text-2xl font-bold text-primary hidden sm:block">
            مصنع انفنتكس
          </h1>
        </Link>
        
        <nav className="flex items-center gap-2 md:gap-3">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary data-[state=open]:bg-accent px-2 py-1.5">
                Services <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full justify-start">{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary data-[state=open]:bg-accent px-2 py-1.5">
                Products <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {productLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full justify-start">{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary data-[state=open]:bg-accent px-2 py-1.5">
                Materials <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {materialLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full justify-start">{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md">
            Contact Us
          </Link>
          
          <Button asChild size="sm" className="ml-2">
            <Link href="/store">Online Store</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
