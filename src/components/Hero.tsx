import { useTranslation } from '../hooks/useTranslation'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="brutal-heading brutal-text-outline mb-6">{t('hero.title')}</h1>
        <p className="brutal-subheading mb-8">{t('hero.subtitle')}</p>
        <button className="brutal-button">
          {t('hero.cta')}
        </button>
        <ul className="mt-12 brutal-grid">
          {t('hero.benefits').map((benefit: string, index: number) => (
            <li key={index} className="brutal-card">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
