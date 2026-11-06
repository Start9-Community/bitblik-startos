# Updating the upstream version

BitBlik StartOS package wraps public multi-architecture image published by
BitBlik's `app-web-docker` workflow.

## Determining the upstream version

Read application version from `packages/app/pubspec.yaml` in upstream repo. Get
commit from latest successful release-image workflow:

```sh
gh run list --repo bit-blik/bitblik --workflow app-web-docker.yml \
  --status success --limit 1 --json headSha --jq '.[0].headSha'
```

Release image tag format is `bitblik-release-<full-commit-sha>`. Confirm tag
exists and has both `linux/amd64` and `linux/arm64` manifests:

```sh
docker buildx imagetools inspect \
  ghcr.io/bit-blik/app-web:bitblik-release-<full-commit-sha>
```

## Applying the bump

1. Update `images.bitblik.source.dockerTag` in
   `startos/manifest/index.ts` to immutable release tag.
2. Update `version` and localized release notes in
   `startos/versions/current.ts` to application version from upstream pubspec.
3. Reset downstream version component to `0` for new upstream release.
