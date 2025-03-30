import { useTranslation } from '../hooks/useTranslation'

export function Comparison() {
  const { t } = useTranslation()

  return (
    <section className="brutal-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutal-heading mb-8 text-center">{t('comparison.title')}</h2>
        
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 brutal-border">{t('comparison.feature')}</th>
              <th className="text-center p-4 brutal-border">GhibliAI</th>
              <th className="text-center p-4 brutal-border">{t('comparison.styles')}</th>
            </tr>
          </thead>
          <tbody>
            {t('comparison.rows').map((row: string[], index: number) => (
              <tr key={index} className="border-t brutal-border">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`p-4 ${cellIndex === 0 ? 'font-medium' : 'text-center'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
