import { useTranslation } from '../hooks/useTranslation'

export function Pricing() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section brutal-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutal-heading mb-12 text-center">{t('pricing.title')}</h2>
        
        <div className="brutal-grid">
          {t('pricing.plans').map((plan: any, index: number) => (
            <div key={index} className="brutal-card-lg">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="brutal-button mt-6 w-full">
                {t('hero.cta')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
