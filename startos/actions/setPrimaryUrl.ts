import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const primaryUrl = sdk.setupPrimaryUrl({
  id: 'set-primary-url',
  hostId: 'ui',
  interfaceId: 'ui',
  ssl: true,
  metadata: {
    name: i18n('Set Primary URL'),
    description: i18n(
      'Choose the address Open UI opens. BitBlik keeps your Neko identity in the browser, separately for each address, so open it at the same one every time.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  field: { name: i18n('URL'), description: null },
  get: storeJson.read((s) => s.primaryUrl),
  set: (effects, url) => storeJson.merge(effects, { primaryUrl: url }),
})
