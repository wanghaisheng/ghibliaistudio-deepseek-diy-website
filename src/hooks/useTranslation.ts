import { useState, useEffect } from 'react'
import en from '../../locale/en.json'
import ja from '../../locale/ja.json'
import zh from '../../locale/zh.json'

const translations: Record<string, any> = {
  en,
  ja,
  zh
}

export function useTranslation() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ghibli-language')
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    
    return value
  }

  const nextLanguage = () => {
    const languages = Object.keys(translations)
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    const newLanguage = languages[nextIndex]
    setLanguage(newLanguage)
    localStorage.setItem('ghibli-language', newLanguage)
  }

  return { t, language, setLanguage, nextLanguage }
}
