
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react'; // Removed Linkedin, Twitter
import { InventexLogo } from '../icons/InventexLogo';

const footerLinkGroups = [
  {
    title: 'About',
    links: [
      { href: '/about-us', text: 'About Us' },
      { href: '/our-platform', text: 'Our Platform' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { href: '/capabilities/cnc-machining', text: 'CNC Machining' },
      { href: '/capabilities/laser-cutting', text: 'Laser Cutting' },
      { href: '/capabilities/sheet-metal', text: 'Sheet Metal' },
      { href: '/capabilities/3d-printing', text: '3D Printing' },
      { href: '/capabilities/signs-and-banners', text: 'Signs & Banners' },
    ],
  },
  {
    title: 'Materials',
    links: [
      { href: '/materials/cnc-machining', text: 'CNC Machining Materials' },
      { href: '/materials/laser-cutting', text: 'Laser Cutting Materials' },
      { href: '/materials/sheet-metal', text: 'Sheet Metal Materials' },
      { href: '/materials/3d-printing', text: '3D Printing Materials' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/manufacturing-resources', text: 'Manufacturing Resources' },
      { href: '/resources/cnc-design-guide', text: 'CNC Design Guide' },
      { href: '/resources/laser-cutting-design-guide', text: 'Laser Cutting Design Guide' },
      { href: '/resources/sheet-metal-design-guide', text: 'Sheet Metal Design Guide' },
      { href: '/resources/3d-printing-design-guide', text: '3D Printing Design Guide' },
      { href: '/downloads-faq', text: 'Downloads & FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/blog', text: 'Blog' },
      { href: '/careers', text: 'Careers' },
      { href: '/our-partners', text: 'Our Partners' },
      { href: '/privacy-policy', text: 'Privacy Policy' },
      { href: '/terms-conditions', text: 'Terms & Conditions' },
      { href: '/promotion-terms-conditions', text: 'Promotion Terms & Conditions' },
      { href: '/referral-terms-conditions', text: 'Referral Terms & Conditions' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '/contact-us', text: 'Contact Us' },
      { href: '/events', text: 'Events' },
      { href: '/faq', text: 'FAQ' },
    ],
  },
];

// Snapchat Icon Component
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className} // Will receive h-5 w-5
  >
    <title>Snapchat</title>
    <path d="M11.999 2c-1.323 0-2.598.183-3.799.524V2h-1.398c-1.052 0-1.9.85-1.9 1.9v1.399c-.341 1.2-.524 2.476-.524 3.799H2v1.398c0 1.052.85 1.9 1.9 1.9h1.399c.182 1.323.523 2.598 1.001 3.799L4.4 18.6c-.47.47-.47 1.23 0 1.7l.7.7c.47.47 1.23.47 1.7 0l2.1-2.1c1.2.477 2.476.819 3.799 1.001V22h1.398c1.052 0 1.9-.85 1.9-1.9v-1.399c1.323-.182 2.598-.523 3.799-1.001l2.1 2.1c.47.47 1.23.47 1.7 0l.7-.7c.47-.47.47-1.23 0-1.7l-1.9-1.9c.477-1.2.819-2.476 1.001-3.799H22v-1.398c0-1.052-.85-1.9-1.9-1.9h-1.399a9.914 9.914 0 00-1.001-3.799l1.9-1.9c.47-.47.47-1.23 0-1.7l-.7-.7c-.47-.47-1.23-.47-1.7 0l-2.1 2.1A9.914 9.914 0 0014.099 4.4V2h-1.398c-.232 0-.458.02-.68.055A9.928 9.928 0 0011.999 2zm0 3a6.996 6.996 0 016.324 3.676A6.996 6.996 0 0111.999 19a6.996 6.996 0 01-6.324-10.324A6.996 6.996 0 0111.999 5z"/>
  </svg>
);

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
          {/* Social Icons - first column on large screens, spans on mobile */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-start space-y-4">
            <Link href="/" className="mb-2">
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
