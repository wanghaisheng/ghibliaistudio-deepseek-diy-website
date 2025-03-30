import { ReactNode } from 'react'

type SelectProps = {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border rounded-lg bg-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
