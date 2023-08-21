import { Problem1 } from "./Modules/problem-1.js";
import { Problem2 } from "./Modules/problem-2.js";
import { Problem3 } from "./Modules/problem-3.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  Problem1(".btn-p1");
  Problem2(".btn-p2");
  Problem3(".input-p3", ".btn-accept-p3", ".btn-cancel-p3", "form-p3");
});
