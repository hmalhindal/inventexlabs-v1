
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
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
      { href: '/capabilities/injection-moulding', text: 'Injection Moulding' },
      { href: '/capabilities/sheet-metal', text: 'Sheet Metal' },
      { href: '/capabilities/3d-printing', text: '3D Printing' },
    ],
  },
  {
    title: 'Materials',
    links: [
      { href: '/materials/cnc-machining', text: 'CNC Machining Materials' },
      { href: '/materials/injection-moulding', text: 'Injection Moulding Materials' },
      { href: '/materials/sheet-metal', text: 'Sheet Metal Materials' },
      { href: '/materials/3d-printing', text: '3D Printing Materials' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/manufacturing-resources', text: 'Manufacturing Resources' },
      { href: '/resources/cnc-design-guide', text: 'CNC Design Guide' },
      { href: '/resources/injection-moulding-design-guide', text: 'Injection Moulding Design Guide' },
      { href: '/resources/sheet-metal-design-guide', text: 'Sheet Metal Design Guide' },
      { href: '/resources/3d-printing-design-guide', text: '3D Printing Design Guide' },
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

const socialLinks = [
  { href: 'https://www.linkedin.com/company/inventex-labs', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/inventexlabs', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com/inventexlabs', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com/inventexlabs', icon: Facebook, label: 'Facebook' },
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
