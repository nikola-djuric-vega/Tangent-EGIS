export interface Translations {
  flag?: string
  language?: string
  translation?: string
  url?: string
  select?: string
}

export const pageTranslation: Translations[] = [
  {
    flag: 'fr',
    language: 'Français',
    translation: `Page disponible dans d'autres langues`,
    select: 'Sélectionnez une langue',
  },
  {
    flag: 'en',
    language: 'English',
    translation: 'Page available in other languages',
    select: 'Select a language',
  },
  {
    flag: 'es',
    language: 'Español',
    translation: 'Página disponible en otros idiomas',
    select: 'Selecciona un idioma',
  },

  {
    flag: 'pt',
    language: 'Português',
    translation: 'Página disponível em outros idioma',
    select: 'Selecione um idioma',
  },
  {
    flag: 'de',
    language: 'Deutsch',
    translation: 'Seite in anderen sprachen verfügbar',
    select: 'Wähle eine sprache',
  },
]
