# BitBlik

## Documentation

- [BitBlik FAQ](https://github.com/bit-blik/bitblik/blob/main/packages/app/assets/faq/bitblik/faq_en.md) — trading flow, escrow model, risks, fees, and disputes.

## What you get on StartOS

BitBlik provides one web interface with BLIK selected as initial market. Your
Neko identity and app settings remain in browser profile; service stores no
account or trading data on StartOS.

## Getting set up

1. Open **Web Interface** from BitBlik dashboard.
2. Confirm address begins with `https://`. Secure identity storage does not work
   over plain HTTP.
3. Create new Neko identity or import existing backup in BitBlik.
4. Export Neko backup and store it safely before trading.
5. Follow in-app flow to choose coordinator and connect Lightning wallet.

## Using BitBlik

Use same HTTPS address and browser profile each time. Another hostname, device,
or browser profile has separate identity storage.

BLIK is initial market. You can select another supported payment system inside
BitBlik settings.

## Limitations

- StartOS backups do not contain Neko identity or browser settings. Restore them
  from backup exported inside BitBlik.
- Package runs web client only. Coordinator, Lightning node, Nostr relay, and
  wallet backend remain external.
