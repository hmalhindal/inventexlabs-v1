'use client';

import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';
import { Button } from "@/components/ui/button";
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
  Flag,     // Signs & Banners
  Edit3,    // Online Design Tool
  ShoppingCart, // Online Store
  ChevronDown, // Dropdown indicator
  Zap, // Laser Cutting
  Cog, // CNC Machining
  LayoutPanelLeft, // Sheet Metal
  Printer, // Digital Printing
  Users, // Marketplace
  LayoutGrid, // All Services
} from 'lucide-react';
import * as SignIcons from '@/components/icons/SignIcons';

const signMenuItems = [
  { href: '/capabilities/signs-and-banners/all', label: 'All Signs', icon: SignIcons.AllSignsIcon },
  { href: '/capabilities/signs-and-banners/menu-boards', label: 'Menu Boards', icon: SignIcons.MenuBoardsIcon },
  { href: '/capabilities/signs-and-banners/giant-letters', label: 'Giant Letters', icon: SignIcons.GiantLettersIcon },
  { href: '/capabilities/signs-and-banners/moss-letters', label: 'Moss Letters', icon: SignIcons.MossLettersIcon },
  { href: '/capabilities/signs-and-banners/a-boards', label: 'A Boards', icon: SignIcons.ABoardIcon },
  { href: '/capabilities/signs-and-banners/light-letters', label: 'Light Letters', icon: SignIcons.LightLettersIcon },
  { href: '/capabilities/signs-and-banners/acrylic-light-letters', label: 'Acrylic Light Letters', icon: SignIcons.AcrylicLightLettersIcon },
  { href: '/capabilities/signs-and-banners/homeware', label: 'Homeware & Deskware', icon: SignIcons.HomewareDeskwareIcon },
  { href: '/capabilities/signs-and-banners/light-boxes', label: 'Light Boxes', icon: SignIcons.LightBoxesIcon },
  { href: '/capabilities/signs-and-banners/led-neon-signs', label: 'LED Neon Signs', icon: SignIcons.LedNeonSignsIcon },
  { href: '/capabilities/signs-and-banners/infinity-mirrors', label: 'Infinity Mirrors', icon: SignIcons.InfinityMirrorsIcon },
  { href: '/capabilities/signs-and-banners/merchandise', label: 'G&G Merchandise', icon: SignIcons.GgMerchandiseIcon },
  { href: '/capabilities/signs-and-banners/cinema-light-boxes', label: 'Cinema Light Boxes', icon: SignIcons.CinemaLightBoxesIcon },
  { href: '/capabilities/signs-and-banners/projecting-signs', label: 'Projecting & Swing Signs', icon: SignIcons.ProjectingSignsIcon },
  { href: '/capabilities/signs-and-banners/house-numbers', label: 'House Numbers', icon: SignIcons.HouseNumbersIcon },
  { href: '/capabilities/signs-and-banners/printed-signs', label: 'Printed Signs', icon: SignIcons.PrintedSignsIcon },
  { href: '/capabilities/signs-and-banners/menu-cases', label: 'Menu Cases', icon: SignIcons.MenuCasesIcon },
  { href: '/capabilities/signs-and-banners/sale', label: 'Sale', icon: SignIcons.SaleIcon },
  { href: '/capabilities/signs-and-banners/eco-signs', label: 'Eco Signs', icon: SignIcons.EcoSignsIcon },
  { href: '/capabilities/signs-and-banners/concrete-letters', label: 'Concrete Letters', icon: SignIcons.ConcreteLettersIcon },
  { href: '/capabilities/signs-and-banners/giant-outdoor-arrows', label: 'Giant Outdoor Arrows', icon: SignIcons.GiantOutdoorArrowsIcon },
  { href: '/capabilities/signs-and-banners/artworking-hours', label: 'Artworking Hours', icon: SignIcons.ArtworkingHoursIcon },
];


const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
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
      { href: '/materials/cnc-machining', label: 'CNC Materials', icon: Cog },
      { href: '/materials/laser-cutting', label: 'Laser Materials', icon: Zap },
      { href: '/materials/sheet-metal', label: 'Sheet Metal', icon: LayoutPanelLeft },
      { href: '/materials/acrylic', label: 'Acrylic', icon: Layers },
      { href: '/materials/wood', label: 'Wood', icon: Layers },
      { href: '/materials/aluminum', label: 'Aluminum', icon: Layers },
      { href: '/materials/styrofoam', label: 'Styrofoam', icon: Layers },
    ]
  },
  { 
    label: 'Signs & Banners', 
    icon: Flag, 
    isMegaMenu: true 
  },
  { href: '/marketplace', label: 'Marketplace', icon: Users },
];

const ctaButtons = [
  { href: '/online-design-tool', label: 'Design Tool', icon: Edit3, variant: 'default' as const },
  { href: '/store', label: 'Online Store', icon: ShoppingCart, variant: 'default' as const },
];

function SignsMegaMenu() {
  return (
    <DropdownMenuContent 
      align="start" 
      className="w-[90vw] max-w-6xl p-6 bg-background/95 backdrop-blur-sm"
      onMouseLeave={(e) => (e.currentTarget as HTMLElement).blur()}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
        {signMenuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild className="p-0">
            <Link href={item.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none">
              <item.icon className="h-8 w-8 text-primary shrink-0" />
              <span className="font-medium text-foreground whitespace-nowrap">{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <div className="col-start-3 md:col-start-4 row-start-6 flex items-end justify-end">
           <SignIcons.TheGoodsLondonLogo className="w-40" />
        </div>
      </div>
    </DropdownMenuContent>
  );
}


export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <TooltipProvider delayDuration={100}>
        <div className="container mx-auto px-4 py-2">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
              <h1 className="font-headline text-2xl font-bold text-primary hidden sm:block whitespace-nowrap">
                مصنع انفنتكس
              </h1>
            </Link>
            <div className="flex items-center gap-1 md:gap-2">
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
          </div>
          
          {/* Bottom Row - Main Navigation */}
          <nav className="flex items-center justify-center gap-1 md:gap-2 flex-wrap border-t border-border mt-2 pt-2">
            {navLinks.map((link) => {
              if (link.isMegaMenu) {
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
                    <SignsMegaMenu />
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
        </div>
      </TooltipProvider>
    </header>
  );
}
