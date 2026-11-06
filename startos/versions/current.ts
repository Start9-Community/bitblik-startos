import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.11.4:0',
  releaseNotes: {
    en_US: 'Initial StartOS release of the BitBlik web client.',
    es_ES: 'Versión inicial para StartOS del cliente web de BitBlik.',
    de_DE: 'Erste StartOS-Veröffentlichung des BitBlik-Webclients.',
    pl_PL: 'Pierwsze wydanie klienta internetowego BitBlik dla StartOS.',
    fr_FR: 'Première version StartOS du client web BitBlik.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
