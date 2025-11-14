
import Link from 'next/link';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import * as ProductIcons from '@/components/icons/ProductIcons';

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

const iconMap = {
  ...ProductIcons,
};

export function ProductsMegaMenu() {
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
