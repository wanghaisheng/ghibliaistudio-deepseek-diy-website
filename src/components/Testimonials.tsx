import { useTranslation } from '../hooks/useTranslation'

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section brutal-clip-path">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutal-heading mb-12 text-center">{t('testimonials.title')}</h2>
        
        <div className="brutal-grid">
          {t('testimonials.quotes').map((quote: any, index: number) => (
            <div key={index} className="brutal-card">
              <blockquote className="text-lg italic mb-4">"{quote.text}"</blockquote>
              <p className="font-medium">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
