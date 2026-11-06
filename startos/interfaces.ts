import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

const uiHostId = 'ui'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const multi = sdk.MultiHost.of(effects, uiHostId)
  const origin = await multi.bindPort(uiPort, { protocol: 'http' })

  const preferredLauncherAddress = await sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const address = host?.bindings[uiPort]?.addresses.available.find(
        (candidate) => candidate.ssl && candidate.metadata.kind === 'mdns',
      )
      if (!address) return null

      const port =
        address.port === null || address.port === 443 ? '' : `:${address.port}`
      return `https://${address.hostname}${port}`
    })
    .const()

  const ui = sdk.createInterface(effects, {
    name: i18n('Web Interface'),
    id: 'ui',
    description: i18n('The BitBlik browser interface'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
    preferredLauncherAddress,
  })

  return [await origin.export([ui])]
})
