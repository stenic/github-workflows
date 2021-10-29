# Shareable workflows

## Docker-Helm

Steps:

- Build docker image (multi-arch)
- Use semantic-release to find version
  - Update helm chart version
  - Generate CHANGELOG.md
  - Publish helm chart
- Publish Docker images

```yaml
name: Release
on:
  push:
    branches:
      - 'main'

jobs:
  release:
    name: Release
    uses: stenic/github-workflows/.github/workflows/release-docker-helm.yaml@main
    with:
      docker_image: "ghcr.io/${{ github.repository }}"
    secrets:
      token: ${{ secrets.GH_TOKEN }}
```
