interface Link {
  href: string
  label: string
}

interface SiteConfig {
  name: string
  description: string
  navLinks: Link[]
}

export const siteConfig: SiteConfig = {
  name: 'Mohamed Hissa',
  description:
    'Personal website of Mohamed Hissa',
  navLinks: [
    { href: '/', label: 'About' },
    { href: '/tools', label: 'Tools' },
  ],
}
