/** Shared content shapes used across pages. */

export type Cta = { label: string; href: string }

export type Feature = {
  icon: string // key into src/components/Icons.tsx
  title: string
  description: string
}

export type Step = {
  title: string
  description: string
}

export type Stat = {
  value: string
  label: string
}

export type Faq = {
  question: string
  answer: string
}

export type Sector = {
  name: string
  icon: string
  assets: string
  rules: string
}
