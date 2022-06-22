import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import "./mystyles.scss";
import logoImg from "./content/logo_1.png";

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

const samplerNumber = 1;

console.log(`hello ${samplerNumber}`);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);
