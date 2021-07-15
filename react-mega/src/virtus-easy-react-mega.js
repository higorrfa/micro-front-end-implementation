import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Mega from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Mega
});

export const { bootstrap, mount, unmount } = lifecycles;
