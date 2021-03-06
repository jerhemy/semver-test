module.exports = {
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/github",
      ["@semantic-release/npm", {
        npmPublish: false
      }],
      ["@semantic-release/release-notes-generator"],
      ["@semantic-release/git", {
        "assets": ["package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }]
    ],
    repositoryUrl:"https://github.com/jerhemy/semver-test",
    branches: ['main'],
    preset: 'angular'
  }
