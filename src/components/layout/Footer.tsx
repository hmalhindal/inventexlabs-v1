
import Link from 'next/link';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { InventexLogo } from '../icons/InventexLogo';
import { SnapchatIcon } from '../icons/SnapchatIcon';

const footerLinkGroups = [
  {
    title: 'About',
    links: [
      { href: '/about-us', text: 'About Us' },
      { href: '/our-platform', text: 'Our Platform' },
      { href: '/resources/company-profile', text: 'Company Profile' },
      { href: '/resources/brand-guidelines', text: 'Brand Guidelines' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/capabilities/cnc-machining', text: 'CNC Machining' },
      { href: '/capabilities/laser-cutting', text: 'Laser Cutting' },
      { href: '/capabilities/signs-and-banners', text: 'Signs & Banners' },
      { href: '/capabilities/digital-printing', text: 'Digital Printing' },
    ],
  },
  {
    title: 'Materials',
    links: [
      { href: '/materials/acrylic', text: 'Acrylic' },
      { href: '/materials/wood', text: 'Wood' },
      { href: '/materials/aluminum', text: 'Aluminum' },
      { href: '/materials/sheet-metal', text: 'Sheet Metal' },
      { href: '/materials/styrofoam', text: 'Styrofoam' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/design-guide', text: 'Design Guide' },
      { href: '/resources/swatch-catalog', text: 'Swatch Catalog' },
      { href: '/resources/product-catalog', text: 'Product Catalog' },
      { href: '/downloads-faq', text: 'Downloads & FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/careers', text: 'Careers' },
      { href: '/our-partners', text: 'Our Partners' },
      { href: '/terms-conditions', text: 'Terms & Privacy' },
      { href: '/delivery-information', text: 'Delivery Information' },
      { href: '/faq', text: 'FAQ' },
    ],
  },
];

const socialLinks = [
  { href: 'https://instagram.com/inventexlabs', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com/inventexlabs', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.snapchat.com/add/inventexlabs', icon: SnapchatIcon, label: 'Snapchat' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-10">
          {/* Social Icons & Contact Info */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="mb-4">
              <InventexLogo width={150} height={40} />
            </Link>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="pt-6 space-y-3 text-sm text-muted-foreground">
              <a href="tel:+96565886831" className="flex items-center gap-2 hover:text-primary hover:underline">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+965 65886831</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  St 3, Fahaheel industrial Area<br />
                  Kuwait
                </div>
              </div>
            </div>
          </div>

          {/* Link Groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="col-span-1">
              <h3 className="font-headline text-sm font-semibold text-primary mb-3 tracking-wider">{group.title.toUpperCase()}</h3>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-xs border-t border-border pt-8">
          <p>&copy; {new Date().getFullYear()} Inventex Labs. All rights reserved.</p>
          <p className="mt-1">Precision Engineering & AI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
