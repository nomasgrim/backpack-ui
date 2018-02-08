import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Divider from "./";

storiesOf("Dividers", module)
  .add("Divider", () => (
    <Divider />
  ));
