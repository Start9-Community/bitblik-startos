import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting BitBlik'))

  return sdk.Daemons.of(effects).addDaemon('bitblik', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'bitblik' },
      sdk.Mounts.of(),
      'bitblik',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      env: { PAYMENT_SYSTEM: 'blik' },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
    },
    requires: [],
  })
})
