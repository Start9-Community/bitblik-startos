# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

- Don't add a volume or backup step for the Neko identity: it lives in browser storage, per
  origin, out of the package's reach.
- Keep `ssl: true` on the primary URL: WebCrypto-backed identity storage rejects plain HTTP.
