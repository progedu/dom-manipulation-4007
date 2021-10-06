"use strict";
import $ from "jquery";
const block = $("#block");
const scailingButton = $("#scaling-button");
const moving = $("#moving-button");

scailingButton.click(() => {
  block.animate({ width: "200pt", hright: "200pt" }, 2000);
  block.animate({ width: "100pt", hright: "100pt" }, 2000);
});

moving.click(() => {
  block.animate({ marginLeft: "500px" }, 1000);
  block.animate({ marginLeft: "20px" }, 1000);
});
