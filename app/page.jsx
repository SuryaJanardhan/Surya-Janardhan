import PortfolioPage from './portfolio-page'

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Surya Janardhan',
  jobTitle: 'Full Stack Developer',
  url: 'https://portfolio.example.com',
  sameAs: ['https://github.com/Surya2004-janardhan', 'https://www.linkedin.com'],
  email: 'mailto:surya.dev@example.com',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <PortfolioPage />
    </>
  )
}
