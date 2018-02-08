import { configure, addDecorator } from "@storybook/react";
import { withInfo, setDefaults } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";
import "@lonelyplanet/backpack-ui-global-css";
import "./style.css";

const req = require.context("../src/", true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

setOptions({
  name: "Backpack UI",
  url: "https://lonelyplanet.github.io/backpack-ui",
});

setDefaults({
  header: false,
  inline: false,
});

addDecorator((story, context) => withInfo(context.kind)(story)(context));
configure(loadStories, module);
