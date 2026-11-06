# AGENTS.md

This repository packages BitBlik web client for StartOS.

- Keep runtime stateless. Neko identity belongs to browser storage, so adding a
  package volume would not make StartOS backups contain it.
- Verify launcher still prefers HTTPS after interface changes; WebCrypto-backed
  identity storage rejects plain HTTP.
