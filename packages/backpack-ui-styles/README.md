# backpack-ui-styles [![Build Status][ci-img]][ci]

backpack-ui-styles contains the design tokens used across lonelyplanet.com. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. They are to be used in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

The design tokens are organized as such:

##### colors
Includes color values for backgrounds, text, borders, shadows, links, ui and accents. It also includes social network branding colors.

##### fonts
Includes two primary font stacks; Benton Sans (sans-serif) and Miller Daily (serif); Benton Sans is set globally, so there is no need to set it at the component level. Miller Daily is generally used for accent text.

##### media queries
Includes both min- and max-width media queries. Used to define break points for components and pages.

##### timing
Used for animation durations.

##### typography
Includes font weights (for Benton Sans only), font sizes and line heights.

##### z-index
Used for layering elements on the z-axis.

## Installation

```sh
$ npm install @lonelyplanet/backpack-ui-styles
```

## Usage

#### ES6 module

```js
import styles from "@lonelyplanet/backpack-ui-styles"; // everything at once, or
import { colors } from "@lonelyplanet/backpack-ui-styles"; // only what you need
```

#### CommonJS module

```js
const styles = require("@lonelyplanet/backpack-ui-styles").default;
```

#### Using deprecated Sass variables

Please see [backpack-ui-styles-scss][backpack-ui-styles-scss].

## Contributing

Please read the [Contributing][contrib] document before writing any code.

## License

[MIT License][license]

[backpack-ui-styles-scss]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles-scss
[contrib]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles/contributing.md
[license]: https://github.com/lonelyplanet/backpack-ui/packages/backpack-ui-styles/license.md
[ci-img]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-styles.svg
[ci]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-ui-styles
