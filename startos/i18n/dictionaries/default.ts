export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting BitBlik': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'The BitBlik browser interface': 4,

  // actions/setPrimaryUrl.ts
  'Set Primary URL': 5,
  'Choose the address Open UI opens. BitBlik keeps your Neko identity in the browser, separately for each address, so open it at the same one every time.': 6,
  URL: 7,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
