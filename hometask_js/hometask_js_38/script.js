"use strict";

const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

c.beginPath();
c.arc(250, 150, 100, 0, Math.PI * 2, true);
c.closePath();
c.stroke();


c.beginPath();
c.arc(210, 130, 10, 0, Math.PI * 2, true);
c.closePath();
c.stroke();

c.beginPath();
c.arc(290, 130, 10, 0, Math.PI * 2, true);
c.closePath();
c.stroke();

c.beginPath();
c.arc(250, 160, 65, 0, Math.PI, false);
c.stroke();






