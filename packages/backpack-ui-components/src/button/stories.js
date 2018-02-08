import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./";

storiesOf("Buttons", module)
  .add("Primary button", () => (
    <Button href="#">
      Learn more
    </Button>
  ))
  .add("Primary button - small", () => (
    <Button onClick={action("clicked")} small>
      Learn more
    </Button>
  ))
  .add("Secondary button", () => (
    <Button onClick={action("clicked")} secondary>
      Learn more
    </Button>
  ))
  .add("Secondary button - small", () => (
    <Button onClick={action("clicked")} secondary small>
      Learn more
    </Button>
  ))
  .add("Overlay button", () => (
    <Button onClick={action("clicked")} overlay>
      Learn more
    </Button>
  ))
  .add("Overlay button - small", () => (
    <Button onClick={action("clicked")} overlay small>
      Learn more
    </Button>
  ));
