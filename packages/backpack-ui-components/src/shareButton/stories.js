import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ShareButton from "./";

storiesOf("Buttons", module)
  .add("Share button - Email", () => (
    <ShareButton onClick={action("clicked")} network="email">
      LP
    </ShareButton>
  ))
  .add("Share button - Facebook", () => (
    <ShareButton onClick={action("clicked")} network="facebook">
      LP
    </ShareButton>
  ))
  .add("Share button - Facebook Messenger", () => (
    <ShareButton onClick={action("clicked")} network="facebookMessenger">
      LP
    </ShareButton>
  ))
  .add("Share button - Reddit", () => (
    <ShareButton onClick={action("clicked")} network="reddit">
      LP
    </ShareButton>
  ))
  .add("Share button - Twitter", () => (
    <ShareButton onClick={action("clicked")} network="twitter">
      LP
    </ShareButton>
  ));
