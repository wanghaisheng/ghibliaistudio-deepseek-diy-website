import { useTranslation } from '../hooks/useTranslation'

export function Playground() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section brutal-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutal-heading mb-8 text-center">{t('playground.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="brutal-label">{t('playground.prompt')}</label>
            <textarea
              placeholder={t('playground.promptPlaceholder')}
              className="brutal-textarea w-full"
            />
            
            <div className="mt-6">
              <label className="brutal-label">{t('playground.style')}</label>
              <select className="brutal-input w-full">
                {Object.entries(t('playground.styles')).map(([key, value]) => (
                  <option key={key} value={key}>{value as string}</option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="brutal-label">{t('playground.intensity')}</label>
              <input type="range" className="w-full" />
            </div>

            <button className="brutal-button-alt mt-8 w-full">
              {t('playground.generate')}
            </button>
          </div>

          <div className="brutal-card-lg">
            <h3 className="text-lg font-medium mb-4">{t('playground.preview')}</h3>
            <div className="aspect-square bg-brutal-white flex items-center justify-center">
              <p>{t('playground.empty')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
