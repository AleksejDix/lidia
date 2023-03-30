# Semantic Versioning

SemVer is a versioning system that helps manage changes in software by using a 3-component versioning schema: MAJOR.MINOR.PATCH (e.g., 1.0.0). Each component has a specific meaning:

 - **MAJOR**: Indicates a breaking change that is incompatible with previous versions.
 - **MINOR**: Introduces new features while maintaining backwards compatibility.
 - **PATCH**: Represents bug fixes and other improvements, while maintaining backwards compatibility.

When publishing your package to npm, you should adhere to the SemVer system to help users understand the level of changes between package versions.

## Here's how to use SemVer with npm when publishing:

Update your package version in the package.json file:
Before publishing, manually update the version field in your package.json file, following the SemVer principles. For example, if your current version is 1.2.3 and you've made a bug fix, update the version to 1.2.4.

## Alternatively, use npm version to update the package version automatically:

Instead of manually updating the version field, you can use the npm version command to automatically increment the version based on the type of update:

- For a major update: npm version major
- For a minor update: npm version minor
- For a patch update: npm version patch

This command will update the version field in the package.json file and create a new Git commit and tag for the new version.

## Publish your package:

After updating the package version, use the npm publish command to publish your package to the npm registry:

```sh
npm publish
```

By following the SemVer system and updating your package version accordingly, you make it easier for users to understand the implications of updating to a new version of your package.