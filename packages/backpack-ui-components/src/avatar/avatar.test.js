import React from "react";
import Avatar from "./avatar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Avatar />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
