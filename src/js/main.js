import { Problem1 } from "./Modules/problem-1.js";
import { Problem2 } from "./Modules/problem-2.js";
import { Problem3 } from "./Modules/problem-3.js";
import { Problem4 } from "./Modules/problem-4.js";
import { Problem5 } from "./Modules/problem-5.js";
import { Problem6 } from "./Modules/problem-6.js";
import { Problem7 } from "./Modules/problem-7.js";
import { Problem8 } from "./Modules/problem-8.js";
import { Problem9 } from "./Modules/problem-9.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  Problem1(".btn-p1");
  Problem2(".btn-p2");
  Problem3(".input-p3", ".btn-accept-p3", ".btn-cancel-p3");
  Problem4(".input-p4", ".btn-accept-p4", ".btn-cancel-p4");
  Problem5(".btn-p5");
  Problem6(".btn-p6");
  Problem7(".btn-p7");
  Problem8(".btn-p8");
  Problem9(".btn-p9");
});
