import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Avatar from "./";

storiesOf("Avatar", module)
  .add("24px", () => (
    <Avatar
      src="http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png"
      alt="Rizzo"
      size={24}
      href={null}
    />
  ))
  .add("40px", () => (
    <Avatar
      src="http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png"
      alt="Rizzo"
      size={40}
      href={null}
    />
  ))
  .add("48px", () => (
    <Avatar
      src="http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png"
      alt="Rizzo"
      size={48}
      href={null}
    />
  ))
  .add("80px", () => (
    <Avatar
      src="http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png"
      alt="Rizzo"
      size={80}
      href={null}
    />
  ))
  .add("104px", () => (
    <Avatar
      src="http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png"
      alt="Rizzo"
      size={104}
      href={null}
    />
  ));
