# backpack-ui-global-css [![Build Status][ci-img]][ci]

backpack-ui-global-css provides a global stylesheet to be used across lonelyplanet.com.

The stylesheet:
* uses `@font-face` to set custom web fonts Benton Sans and Miller Daily
* sets `box-sizing: border-box` to normalize the box model
* includes normalize.css and a custom reset to create a baseline across multiple browsers.
* contains some of helper classes
* provides some default typographic styling
* includes print styles

#### Browser support

Last 2 versions and IE 11

## Installation

```sh
$ npm install @lonelyplanet/backpack-ui-global-css
```

## Usage

```js
@import "@lonelyplanet/backpack-ui-global-css/common.css";
```

## Contributing

Please read the [Contributing][contrib] document before writing any code.

## License

[MIT License][license]

[contrib]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-global-css/contributing.md
[license]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-global-css/license.md
[ci-img]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-global-css.svg
[ci]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-global-css
