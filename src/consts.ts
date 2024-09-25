export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Chris Impicciche',
  DESCRIPTION:
    'Software Engineer, Artist, Unrepentant Dork.',
  EMAIL: 'cimpicci@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: '', // i.e. https://astro-erudite.vercel.app
}

export const NAV_LINKS: Link[] = [
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/peechiz', label: 'GitHub' },
  { href: 'https://bsky.app/profile/peechiz.bsky.social', label: 'Bluesky' },
  { href: 'https://www.linkedin.com/in/chris-impicciche/', label: 'LinkedIn'},
  { href: 'cimpicci@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
