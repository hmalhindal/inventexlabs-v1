
import Link from 'next/link';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import * as SignIcons from '@/components/icons/SignIcons';

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
  { href: '/capabilities/signs-and-banners/cinema-light-boxes', label: 'Cinema Light Boxes', icon: 'CinemaLightBoxesIcon' },
  { href: '/capabilities/signs-and-banners/projecting-signs', label: 'Projecting & Swing Signs', icon: 'ProjectingSignsIcon' },
  { href: '/capabilities/signs-and-banners/house-numbers', label: 'House Numbers', icon: 'HouseNumbersIcon' },
  { href: '/capabilities/signs-and-banners/printed-signs', label: 'Printed Signs', icon: 'PrintedSignsIcon' },
  { href: '/capabilities/signs-and-banners/menu-cases', label: 'Menu Cases', icon: 'MenuCasesIcon' },
  { href: '/capabilities/signs-and-banners/sale', label: 'Sale', icon: 'SaleIcon' },
  { href: '/capabilities/signs-and-banners/eco-signs', label: 'Eco Signs', icon: 'EcoSignsIcon' },
  { href: '/capabilities/signs-and-banners/concrete-letters', label: 'Concrete Letters', icon: 'ConcreteLettersIcon' },
  { href: '/capabilities/signs-and-banners/giant-outdoor-arrows', label: 'Giant Outdoor Arrows', icon: 'GiantOutdoorArrowsIcon' },
];

const iconMap = {
  ...SignIcons,
};

export function SignsMegaMenu() {
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
