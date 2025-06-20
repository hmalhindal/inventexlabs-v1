
import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Zap,        // Laser Labs
  Printer,    // Print Lab
  Layers,     // Wrap Lab
  Factory,    // Fab Lab
  Package,    // Packaging
  ShoppingBasket, // Consumables
  Construction, // Wood Lab (using Construction for tools/building aspect)
  Box,        // 3D Lab
  Flag        // Signage
} from 'lucide-react';

const labLinks = [
  { href: '/capabilities/laser-cutting', label: 'Laser Labs', icon: Zap },
  { href: '/products/print-lab', label: 'Print Lab', icon: Printer }, // Placeholder link
  { href: '/products/wrap-lab', label: 'Wrap Lab', icon: Layers },   // Placeholder link
  { href: '/products/fab-lab', label: 'Fab Lab', icon: Factory },    // Placeholder link
  { href: '/products/packaging', label: 'Packaging', icon: Package },// Placeholder link
  { href: '/products/consumables', label: 'Consumables', icon: ShoppingBasket }, // Placeholder link
  { href: '/products/wood-lab', label: 'Wood Lab', icon: Construction },  // Placeholder link
  { href: '/capabilities/3d-printing', label: '3D Lab', icon: Box },
  { href: '/capabilities/signs-and-banners', label: 'Signage', icon: Flag },
];

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <TooltipProvider delayDuration={100}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
            <h1 className="font-headline text-2xl font-bold text-primary hidden sm:block">
              مصنع انفنتكس
            </h1>
          </Link>
          
          <nav className="flex items-center gap-1 md:gap-1.5">
            {labLinks.map((link) => (
              <Tooltip key={link.label}>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Link href={link.href} aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </div>
      </TooltipProvider>
    </header>
  );
}
