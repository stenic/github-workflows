

module.exports = {
  "plugins": [
    ["@semantic-release/commit-analyzer"],
    ["@semantic-release/release-notes-generator"],
    ["@semantic-release/changelog", {
      "changelogTitle": "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines."
    }],
    ["semantic-release-helm", {
      "chartPath": process.env.CHART_PATH,
      "crPublish": true,
      "crConfigPath": process.env.CR_CONFIG_PATH
    }],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "charts/**"],
      "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
    }],
    ["@semantic-release/github"]
  ],
  "branches": ["master", "main"]
}