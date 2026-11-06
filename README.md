<p align="center">
  <img src="icon.png" alt="BitBlik Logo" width="21%">
</p>

# BitBlik on StartOS

> Everything not listed in this document should behave the same as upstream
> BitBlik. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[BitBlik](https://github.com/bit-blik/bitblik) is a peer-to-peer client for
exchanging Bitcoin over Lightning for BLIK payment codes through Nostr-based
coordinators. This package runs its browser client on StartOS.

- **Upstream repo:** <https://github.com/bit-blik/bitblik>
- **Wrapper repo:** <https://github.com/bit-blik/bitblik-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

Package uses upstream's unmodified, commit-tagged web image.

| Property      | Value                       |
| ------------- | --------------------------- |
| Image         | `ghcr.io/bit-blik/app-web`  |
| Architectures | x86_64, aarch64             |
| Entrypoint    | Upstream image entrypoint   |

| Subcontainer | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `bitblik`    | Nginx server for the Flutter web client            |

StartOS supplies `PAYMENT_SYSTEM=blik` on every launch. Upstream entrypoint
renders this runtime setting into the client configuration before starting
Nginx.

## Volume and Data Layout

No StartOS volumes are declared or mounted. Container serves static files and
does not own durable server-side state.

Neko identity, settings, and browser session data remain inside browser storage
for the exact origin used to open BitBlik.

## File Models

None. Package writes no configuration files.

## Dependencies

None. Package does not require another StartOS service. Browser connects to
Nostr relays, selected coordinators, and wallet providers directly.

## Network Access and Interfaces

One browser interface exposes the web client.

| Interface     | Id   | Type | Internal Port | Protocol                     |
| ------------- | ---- | ---- | ------------- | ---------------------------- |
| Web Interface | `ui` | ui   | 80            | HTTP with StartOS TLS wrapper |

StartOS launcher preference targets TLS-enabled mDNS address because browser
secure identity storage does not initialize over plain HTTP.

## Installation and First-Run Flow

No account, credential, setup task, or server-side initialization exists.
First browser opening creates or imports a Neko identity inside that browser
profile. User must export identity backup before trading.

## Actions

None.

## Tasks

None. Package raises no tasks, so service startup is never blocked by a setup
prompt.

## Health Checks

One readiness check belongs to the only daemon.

| Check     | Displayed       | Method               |
| --------- | --------------- | -------------------- |
| `bitblik` | Web Interface   | Port 80 is listening |

Failure means Nginx did not bind its port. Inspect service logs for image,
entrypoint, or runtime configuration errors.

## Backups and Restore

Package uses an empty StartOS backup definition because it has no volumes.
Restore recreates container and interface configuration only.

Browser-local Neko identity and settings are not part of StartOS backups.
Recovery depends on backup exported from BitBlik itself.

## Limitations and Differences

1. Browser identity is origin- and profile-specific. Opening another hostname,
   device, or browser profile creates separate storage.
2. Plain HTTP cannot initialize secure identity storage. Use HTTPS address
   exported by StartOS.
3. Package runs only BitBlik web client. It does not run a coordinator,
   Lightning node, Nostr relay, or wallet backend.
4. StartOS cannot back up browser-local identity or settings.

---

## Quick Reference for AI Consumers

```yaml
package_id: bitblik
image: ghcr.io/bit-blik/app-web
architectures:
  - x86_64
  - aarch64
subcontainers:
  - bitblik
volumes: {}
file_models: []
startos_managed_env_vars:
  - PAYMENT_SYSTEM
dependencies: []
interfaces:
  ui: { type: ui, port: 80 }
actions: []
tasks: []
health_checks:
  - bitblik
```
