
import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Home,
  Package, // Products
  Settings, // Services
  Layers,   // Materials
  Flag,     // Signs & Banners
  Mail,     // Contact Us
  Edit3,    // Online Design Tool
  ShoppingCart, // Online Store
  ChevronDown, // Dropdown indicator
  Zap, // Laser Cutting
  Cog, // CNC Machining
  LayoutPanelLeft, // Sheet Metal
  Printer // Digital Printing
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
  { 
    label: 'Services', 
    icon: Settings,
    dropdown: true,
    items: [
      { href: '/capabilities/cnc-machining', label: 'CNC Machining', icon: Cog },
      { href: '/capabilities/laser-cutting', label: 'Laser Cutting', icon: Zap },
      { href: '/capabilities/sheet-metal', label: 'Sheet Metal', icon: LayoutPanelLeft },
      { href: '/capabilities/digital-printing', label: 'Digital Printing', icon: Printer }, // Added
    ]
  },
  { 
    label: 'Materials', 
    icon: Layers,
    dropdown: true,
    items: [
      { href: '/materials/cnc-machining', label: 'CNC Materials', icon: Cog },
      { href: '/materials/laser-cutting', label: 'Laser Materials', icon: Zap },
      { href: '/materials/sheet-metal', label: 'Sheet Metal Materials', icon: LayoutPanelLeft },
      { href: '/materials/acrylic', label: 'Acrylic', icon: Layers },
      { href: '/materials/wood', label: 'Wood', icon: Layers },
      { href: '/materials/aluminum', label: 'Aluminum', icon: Layers },
      { href: '/materials/styrofoam', label: 'Styrofoam', icon: Layers },
    ]
  },
  { href: '/capabilities/signs-and-banners', label: 'Signs & Banners', icon: Flag },
  { href: '/contact-us', label: 'Contact Us', icon: Mail },
];

const ctaButtons = [
  { href: '/online-design-tool', label: 'Online Design Tool', icon: Edit3, variant: 'default' as const },
  { href: '/store', label: 'Online Store', icon: ShoppingCart, variant: 'default' as const },
];

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <TooltipProvider delayDuration={100}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
            <h1 className="font-headline text-2xl font-bold text-primary hidden sm:block whitespace-nowrap">
              مصنع انفنتكس
            </h1>
          </Link>
          
          <nav className="flex items-center gap-1 md:gap-2 flex-wrap justify-end">
            {navLinks.map((link) => 
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-muted-foreground hover:text-primary px-2 md:px-3">
                          <link.icon className="h-5 w-5 md:mr-1" />
                          <span className="hidden md:inline">{link.label}</span>
                          <ChevronDown className="h-4 w-4 ml-1 hidden md:inline" />
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="md:hidden">
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                  <DropdownMenuContent align="start">
                    {link.items?.map(item => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="flex items-center gap-2 w-full">
                          <item.icon className="h-4 w-4 text-muted-foreground" />
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary px-2 md:px-3">
                      <Link href={link.href} aria-label={link.label}>
                        <link.icon className="h-5 w-5 md:mr-1" />
                        <span className="hidden md:inline">{link.label}</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="md:hidden">
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              )
            )}
            
            <div className="flex items-center gap-1 md:gap-2 ml-2 md:ml-4">
              {ctaButtons.map((button) => (
                 <Tooltip key={button.label}>
                    <TooltipTrigger asChild>
                      <Button asChild variant={button.variant} size="sm" className="px-2 md:px-3">
                        <Link href={button.href} aria-label={button.label}>
                          <button.icon className="h-5 w-5 md:mr-1" />
                          <span className="hidden md:inline">{button.label}</span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="md:hidden">
                      <p>{button.label}</p>
                    </TooltipContent>
                  </Tooltip>
              ))}
            </div>
          </nav>
        </div>
      </TooltipProvider>
    </header>
  );
}
