import { useTranslation } from '../hooks/useTranslation'

export function Features() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section brutal-diagonal-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutal-heading mb-12 text-center">{t('features.title')}</h2>
        
        <div className="brutal-grid">
          {t('features.items').map((item: any, index: number) => (
            <div key={index} className="brutal-card">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
