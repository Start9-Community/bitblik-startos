import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bitblik',
  title: 'BitBlik',
  license: 'MIT',
  packageRepo: 'https://github.com/bit-blik/bitblik-startos',
  upstreamRepo: 'https://github.com/bit-blik/bitblik',
  marketingUrl: 'https://bitblik.app',
  donationUrl: null,
  description: { short, long },
  volumes: [],
  images: {
    bitblik: {
      source: {
        dockerTag:
          'ghcr.io/bit-blik/app-web:bitblik-release-c426229d6d3755e90efac18bbf8a95ce7670d6c2',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
