import './globals.css'

export const metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: {
    default: 'Surya Janardhan | Full Stack Developer Portfolio',
    template: '%s | Surya Janardhan',
  },
  description:
    'Portfolio of Surya Janardhan, a full stack developer building fast, accessible, and user-focused web products.',
  keywords: [
    'Surya Janardhan',
    'Full Stack Developer',
    'Frontend Developer',
    'React',
    'Next.js',
    'Portfolio',
  ],
  openGraph: {
    title: 'Surya Janardhan | Full Stack Developer Portfolio',
    description:
      'Explore projects, skills, and experience from Surya Janardhan, focused on modern frontend systems and practical products.',
    url: 'https://portfolio.example.com',
    siteName: 'Surya Janardhan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Janardhan | Full Stack Developer Portfolio',
    description:
      'Explore projects, skills, and experience from Surya Janardhan, focused on modern frontend systems and practical products.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
