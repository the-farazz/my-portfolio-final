import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Faraz Alam | Software Engineer',
  description: 'Faraz Alam - Software Engineer with expertise in ReactJS, Tailwind CSS, and modern web technologies. View projects, skills, and contact info.',
  keywords: 'Faraz Alam, Software Engineer, React.js, JavaScript, TypeScript, Tailwind CSS, Web Development, Portfolio, Full Stack Developer',
  icons: {
    icon: '/DP3.jpg',
  },
  openGraph: {
    title: 'Faraz Alam | Software Engineer',
    description: 'Explore the portfolio of Faraz Alam — Software Engineer skilled in ReactJS and modern frontend tools.',
    type: 'website',
    url: 'https://farazalamportfolio.vercel.app/',
    images: ['https://farazalamportfolio.vercel.app/DP3.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faraz Alam | Software Engineer',
    description: 'Explore the portfolio of Faraz Alam — Software Engineer skilled in ReactJS and modern frontend tools.',
    images: ['https://farazalamportfolio.vercel.app/DP3.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="DdSrKhHONmCz_OYa6_vdHjHgqGuZNQD_ad-8gdd7Uv4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Faraz Alam",
              "url": "https://farazalamportfolio.vercel.app/",
              "image": "https://farazalamportfolio.vercel.app/DP4.jpeg",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Karsaaz Solutions"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of Karachi - UBIT"
              },
              "telephone": "+923273129464",
              "sameAs": [
                "https://www.linkedin.com/in/the-farazz/",
                "https://github.com/the-farazz",
                "https://twitter.com/the_farazzz"
              ],
              "knowsAbout": [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Front-End Development",
                "Software Engineering",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
