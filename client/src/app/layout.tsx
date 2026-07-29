import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { getSiteUrl } from '@/lib/seo';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Faraz Alam | Software Engineer & Web Developer',
    template: '%s | Faraz Alam',
  },
  description:
    'Faraz Alam is a Software Engineer and BSCS graduate from University of Karachi - UBIT. He specializes in building high-performance, scalable web apps.',
  keywords: [
    'Faraz Alam',
    'Software Engineer',
    'React.js Developer',
    'Next.js Developer',
    'Full Stack Engineer',
    'TypeScript Developer',
    'Tailwind CSS',
    'Web Development',
    'Frontend Developer',
    'Karsaaz Solutions',
    'UBIT University of Karachi',
  ],
  authors: [{ name: 'Faraz Alam', url: siteUrl }],
  creator: 'Faraz Alam',
  icons: {
    icon: '/DP4.jpeg',
    apple: '/DP4.jpeg',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Faraz Alam | Software Engineer & Web Developer',
    description:
      'Faraz Alam is a Software Engineer and BSCS graduate from University of Karachi - UBIT. He specializes in building high-performance, scalable web apps.',
    type: 'website',
    url: siteUrl,
    siteName: 'Faraz Alam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Faraz Alam - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faraz Alam | Software Engineer & Web Developer',
    description:
      'Faraz Alam is a Software Engineer and BSCS graduate from University of Karachi - UBIT. He specializes in building high-performance, scalable web apps.',
    images: ['/og-image.png'],
    creator: '@the_farazzz',
  },
  verification: {
    google: 'DdSrKhHONmCz_OYa6_vdHjHgqGuZNQD_ad-8gdd7Uv4',
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Faraz Alam',
      url: siteUrl,
      image: `${siteUrl}/DP4.jpeg`,
      jobTitle: 'Software Engineer',
      description:
        'Faraz Alam is a Software Engineer and a BSCS graduate from University of Karachi - UBIT. He specializes in building high-performance, scalable web applications using modern web technologies.',
      'worksFor': {
        '@type': 'Organization',
        name: 'Karsaaz Entire Business Solutions',
      },
      'alumniOf': {
        '@type': 'CollegeOrUniversity',
        name: 'University of Karachi - UBIT',
      },
      telephone: '+923273129464',
      'sameAs': [
        'https://wa.me/923273129464',
        'https://www.linkedin.com/in/the-farazz/',
        'https://github.com/the-farazz',
        'https://twitter.com/the_farazzz',
      ],
      'knowsAbout': [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Front-End Development',
        'Software Engineering',
        'Web Development',
        'Full Stack Development',
        'REST APIs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Faraz Alam Portfolio',
      description:
        'Portfolio of Faraz Alam — Software Engineer specializing in React.js, Next.js, and TypeScript.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: 'Faraz Alam - Personal Portfolio & Profile Page',
      mainEntity: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
