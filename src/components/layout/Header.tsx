
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
  PenTool,    // Online Design Tool
  ShoppingCart, // Online Store
  ChevronDown, // Dropdown indicator
  Zap, // Laser Cutting
  Cog, // CNC Machining
  LayoutPanelLeft, // Sheet Metal
  Printer, // Digital Printing
  Cpu, // Machinery
  LayoutGrid, // All Services
  User, // My Account
  Wand2, // AI Mockup Generator
} from 'lucide-react';
import * as SignIcons from '@/components/icons/SignIcons';
import * as ProductIcons from '@/components/icons/ProductIcons';

const signMenuItems = [
  { href: '/capabilities/signs-and-banners/all', label: 'All Signs', icon: 'AllSignsIcon' },
  { href: '/capabilities/signs-and-banners/menu-boards', label: 'Menu Boards', icon: 'MenuBoardsIcon' },
  { href: '/capabilities/signs-and-banners/giant-letters', label: 'Giant Letters', icon: 'GiantLettersIcon' },
  { href: '/capabilities/signs-and-banners/moss-letters', label: 'Moss Letters', icon: 'MossLettersIcon' },
  { href: '/capabilities/signs-and-banners/a-boards', label: 'A Boards', icon: 'ABoardIcon' },
  { href: '/capabilities/signs-and-banners/light-letters', label: 'Light Letters', icon: 'LightLettersIcon' },
  { href: '/capabilities/signs-and-banners/acrylic-light-letters', label: 'Acrylic Light Letters', icon: 'AcrylicLightLettersIcon' },
  { href: '/capabilities/signs-and-banners/homeware', label: 'Homeware & Deskware', icon: 'HomewareDeskwareIcon' },
  { href: '/capabilities/signs-and-banners/light-boxes', label: 'Light Boxes', icon: 'LightBoxesIcon' },
  { href: '/capabilities/signs-and-banners/led-neon-signs', label: 'LED Neon Signs', icon: 'LedNeonSignsIcon' },
  { href: '/capabilities/signs-and-banners/infinity-mirrors', label: 'Infinity Mirrors', icon: 'InfinityMirrorsIcon' },
  { href: '/capabilities/signs-and-banners/merchandise', label: 'G&G Merchandise', icon: 'GgMerchandiseIcon' },
  { href: '/capabilities/signs-and-banners/cinema-light-boxes', label: 'Cinema Light Boxes', icon: 'CinemaLightBoxesIcon' },
  { href: '/capabilities/signs-and-banners/projecting-signs', label: 'Projecting & Swing Signs', icon: 'ProjectingSignsIcon' },
  { href: '/capabilities/signs-and-banners/house-numbers', label: 'House Numbers', icon: 'HouseNumbersIcon' },
  { href: '/capabilities/signs-and-banners/printed-signs', label: 'Printed Signs', icon: 'PrintedSignsIcon' },
  { href: '/capabilities/signs-and-banners/menu-cases', label: 'Menu Cases', icon: 'MenuCasesIcon' },
  { href: '/capabilities/signs-and-banners/sale', label: 'Sale', icon: 'SaleIcon' },
  { href: '/capabilities/signs-and-banners/eco-signs', label: 'Eco Signs', icon: 'EcoSignsIcon' },
  { href: '/capabilities/signs-and-banners/concrete-letters', label: 'Concrete Letters', icon: 'ConcreteLettersIcon' },
  { href: '/capabilities/signs-and-banners/giant-outdoor-arrows', label: 'Giant Outdoor Arrows', icon: 'GiantOutdoorArrowsIcon' },
  { href: '/capabilities/signs-and-banners/artworking-hours', label: 'Artworking Hours', icon: 'ArtworkingHoursIcon' },
];

const productMenuItems = [
  { href: '/products/all', label: 'All Products', icon: 'AllProductsIcon' },
  { href: '/products/home-decor', label: 'Home Decor', icon: 'HomeDecorIcon' },
  { href: '/products/acrylic', label: 'Acrylic Products', icon: 'AcrylicProductsIcon' },
  { href: '/products/boxes', label: 'Boxes', icon: 'BoxesIcon' },
  { href: '/products/gifts', label: 'Gifts', icon: 'GiftsIcon' },
  { href: '/products/occasional', label: 'Occasional', icon: 'OccasionsIcon' },
  { href: '/products/backdrops', label: 'Backdrops', icon: 'BackdropsIcon' },
  { href: '/products/booths', label: 'Booths', icon: 'BoothsIcon' },
  { href: '/products/trolley-carts', label: 'Trolley Carts', icon: 'TrolleyCartsIcon' },
];

const ctaButtons = [
  { id: 'design-tool', href: '/online-design-tool', label: 'Online Design Tool', icon: PenTool, variant: 'ghost' as const, isIconOnly: true },
  { id: 'mockup-generator', href: '/mockup-generator', label: 'AI Mockup Generator', icon: Wand2, variant: 'ghost' as const, isIconOnly: true },
  { id: 'store', href: '/store', label: 'Online Store', icon: ShoppingCart, variant: 'default' as const },
  { id: 'account', href: '/my-account', label: 'My Account', icon: User, variant: 'ghost' as const }
];

const iconMap = {
  ...SignIcons,
  ...ProductIcons,
};


function SignsMegaMenu() {
  return (
    <DropdownMenuContent 
      align="start" 
      className="w-[90vw] max-w-6xl p-6 bg-background/95 backdrop-blur-sm"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
        {signMenuItems.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return (
            <DropdownMenuItem key={item.label} asChild className="p-0">
              <Link href={item.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none">
                <IconComponent className="h-8 w-8 text-primary shrink-0" />
                <span className="font-medium text-foreground whitespace-nowrap">{item.label}</span>
              </Link>
            </DropdownMenuItem>
          )
        })}
        <div className="col-start-3 md:col-start-4 row-start-6 flex items-end justify-end">
           <SignIcons.TheGoodsLondonLogo className="w-40" />
        </div>
      </div>
    </DropdownMenuContent>
  );
}

function ProductsMegaMenu() {
  return (
    <DropdownMenuContent 
      align="start" 
      className="max-w-md p-6 bg-background/95 backdrop-blur-sm"
    >
      <div className="grid grid-cols-3 gap-4">
        {productMenuItems.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return (
            <DropdownMenuItem key={item.label} asChild className="p-0">
              <Link href={item.href} className="flex flex-col items-center justify-center gap-2 p-3 rounded-md hover:bg-accent focus:bg-accent focus:outline-none">
                <IconComponent className="h-10 w-10 text-primary shrink-0" />
                <span className="font-medium text-foreground text-center text-xs">{item.label}</span>
              </Link>
            </DropdownMenuItem>
          )
        })}
      </div>
    </DropdownMenuContent>
  );
}


export function Header() {
  // Define navLinks inside the component so it can use other components
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
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <TooltipProvider delayDuration={100}>
        <div className="container mx-auto px-4 py-2">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
              <span className="font-headline text-2xl font-bold text-primary hidden sm:block whitespace-nowrap">
                مصنع انفنتكس
              </span>
            </Link>
            <div className="flex items-center gap-1 md:gap-2">
              {ctaButtons.map((button) => {
                return (
                 <Tooltip key={button.label}>
                    <TooltipTrigger asChild>
                      <Button asChild variant={button.variant} size={button.isIconOnly ? 'icon' : 'sm'} className={!button.isIconOnly ? "px-2 md:px-3" : ""}>
                        <Link href={button.href} aria-label={button.label}>
                          <button.icon className="h-5 w-5" />
                          {!button.isIconOnly && <span className="hidden md:inline">{button.label}</span>}
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{button.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          
          {/* Bottom Row - Main Navigation */}
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
        </div>
      </TooltipProvider>
    </header>
  );
}
