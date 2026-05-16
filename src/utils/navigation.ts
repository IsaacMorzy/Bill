interface NavLink {
  text: string;
  href: string;
}

export const navigationLinks: Record<string, NavLink> = {
  platform: { text: 'Platform', href: '/#features' },
  about: { text: 'About', href: '/about' },
  blog: { text: 'Blog', href: '/blog' },
  contact: { text: 'Contact', href: '/contact' },
};

export const navigationList: NavLink[] = [
  { text: 'Home', href: '/' },
  { text: 'Platform', href: '/#features' },
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'Petition', href: '/petition' },
  { text: 'Contact', href: '/contact' },
];
