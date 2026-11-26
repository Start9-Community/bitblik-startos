# BitBlik

## Documentation

- [BitBlik FAQ](https://github.com/bit-blik/bitblik/blob/main/packages/app/assets/faq/bitblik/faq_en.md) — trading flow, escrow model, risks, fees, and disputes.

## What you get on StartOS

BitBlik provides one web interface with BLIK selected as initial market. Your
Neko identity and app settings remain in browser profile; service stores no
account or trading data on StartOS.

## Getting set up

1. Run **Set Primary URL** and pick the address you will open BitBlik from —
   the `.local` one at home, a domain if you use it from elsewhere.
2. Open **Web Interface** from the BitBlik dashboard.
3. Create a new Neko identity or import an existing backup in BitBlik.
4. Export your Neko backup and store it safely before trading.
5. Follow the in-app flow to choose a coordinator and connect a Lightning wallet.

## Using BitBlik

Use the same address and browser profile each time. Another hostname, device,
or browser profile has separate identity storage, so a new primary URL opens
with no identity until you import your backup there.

BLIK is initial market. You can select another supported payment system inside
BitBlik settings.

## Limitations

- StartOS backups do not contain Neko identity or browser settings. Restore them
  from backup exported inside BitBlik.
- Package runs web client only. Coordinator, Lightning node, Nostr relay, and
  wallet backend remain external.
