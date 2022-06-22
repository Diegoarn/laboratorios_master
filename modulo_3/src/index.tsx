import logoImg from "./content/logo_1.png";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
