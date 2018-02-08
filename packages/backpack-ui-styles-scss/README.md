# backpack-ui-styles-scss [![Build Status][ci-img]][ci]

Officially, these SCSS variables are deprecated, but this package exists because there are some legacy apps that still has Sass as a dependency. As older apps migrate from Sass, they should still have access to the global UI styles. Newer apps should be configured to use CSS modules with PostCSS and postcss-map to use the [backpack-ui-styles][backpack-ui-styles] package.

The variable names follow a standard naming convention to match map and variable names defined in [backpack-ui-styles][backpack-ui-styles].

```scss
$<mapName>-<variableName>: map(mapName, variableName);
```

For more info on the styles, please see the [backpack-ui-styles readme][backpack-ui-styles-readme].

## Installation

```sh
$ npm install @lonelyplanet/backpack-ui-styles
```

## Usage

```scss
@import "@lonelyplanet/backpack-ui-styles-scss/dist/index.scss";

body {
  background-color: $color-bgPrimary;
  color: $color-textPrimary;
  font-family: $font-benton;
  font-size: $typography-fontSizeBodyArticle;
  line-height: $typography-lineHeightBodyArticle;
}
```

## Contributing

Please read the [Contributing][contrib] document before writing any code.

## License

[MIT License][license]

[backpack-ui-styles]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles
[backpack-ui-styles-readme]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles/readme.md
[contrib]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles-scss/contributing.md
[license]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles-scss/license.md
[ci-img]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-styles-scss.svg
[ci]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-styles-scss
