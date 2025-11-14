
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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
  Cpu, // Machinery
  Flag,     // Signs & Banners
  ChevronDown, // Dropdown indicator
  LayoutGrid, // All Services
  Zap, // Laser Cutting
  Cog, // CNC Machining
  LayoutPanelLeft, // Sheet Metal
  Printer, // Digital Printing
} from 'lucide-react';
import { ProductsMegaMenu } from './ProductsMegaMenu';
import { SignsMegaMenu } from './SignsMegaMenu';
import { Button } from '@/components/ui/button';

export function NavLinks() {
  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    {
      label: 'Products',
      icon: Package,
      menu: <ProductsMegaMenu />
    },
    {
      label: 'Services',
      icon: Settings,
      dropdown: true,
      items: [
        { href: '/services', label: 'All Services', icon: LayoutGrid },
        { type: 'separator' as const },
        { href: '/capabilities/cnc-machining', label: 'CNC Machining', icon: Cog },
        { href: '/capabilities/laser-cutting', label: 'Laser Cutting', icon: Zap },
        { href: '/capabilities/sheet-metal', label: 'Sheet Metal', icon: LayoutPanelLeft },
        { href: '/capabilities/digital-printing', label: 'Digital Printing', icon: Printer },
      ]
    },
    {
      label: 'Materials',
      icon: Layers,
      dropdown: true,
      items: [
        { href: '/materials/sheet-metal', label: 'Sheet Metal', icon: LayoutPanelLeft },
        { href: '/materials/acrylic', label: 'Acrylic', icon: Layers },
        { href: '/materials/wood', label: 'Wood', icon: Layers },
        { href: '/materials/aluminum', label: 'Aluminum', icon: Layers },
        { href: '/materials/styrofoam', label: 'Styrofoam', icon: Layers },
      ]
    },
    { href: '/machinery', label: 'Machinery', icon: Cpu },
    {
      label: 'Signs & Banners',
      icon: Flag,
      menu: <SignsMegaMenu />
    },
  ];

  return (
    <nav className="flex items-center justify-center gap-1 md:gap-2 flex-wrap border-t border-border mt-2 pt-2">
      {navLinks.map((link) => {
        if (link.menu) {
           return (
            <DropdownMenu key={link.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-muted-foreground hover:text-primary px-2 md:px-3">
                      <link.icon className="h-5 w-5 md:mr-1" />
                      <span className="hidden md:inline">{link.label}</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="md:hidden">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
              {link.menu}
            </DropdownMenu>
           )
        }
        if (link.dropdown) {
          return (
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
                {link.items?.map((item, index) => {
                  if (item.type === 'separator') {
                    return <DropdownMenuSeparator key={`sep-${index}`} />;
                  }
                  if ('href' in item) {
                    return (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="flex items-center gap-2 w-full">
                          {item.icon && <item.icon className="h-4 w-4 text-muted-foreground" />}
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  }
                  return null;
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
        return (
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
      })}
    </nav>
  );
}
