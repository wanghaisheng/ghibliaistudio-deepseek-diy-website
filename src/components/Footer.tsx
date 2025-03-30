import { useTranslation } from '../hooks/useTranslation'

export function Footer() {
  const { t, language, nextLanguage } = useTranslation()

  const getLanguageLabel = () => {
    switch(language) {
      case 'en': return '中文'
      case 'ja': return 'English'
      case 'zh': return '日本語'
      default: return 'English'
    }
  }

  return (
    <footer className="brutal-section brutal-section-alt brutal-clip-path-alt">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {t('footer.links').map((link: string, index: number) => (
            <a key={index} href="#" className="hover:underline">
              {link}
            </a>
          ))}
          <button 
            onClick={nextLanguage}
            className="brutal-button-sm"
          >
            {getLanguageLabel()}
          </button>
        </div>
        <p className="text-center text-brutal-yellow">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
