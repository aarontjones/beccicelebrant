const app = document.getElementById("app");
if (!app)
    throw new Error("App container not found");
const container = document.createElement("div");
container.className = "container";
const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
// Title
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
const title = document.createElement("h2");
title.className = "title";
title.innerText = "Rebecca Roach";
const tagline = document.createElement("p");
tagline.className = "tagline";
tagline.innerText = "celebrant";
titleContainer.appendChild(title);
titleContainer.appendChild(tagline);
// Appending
mainContainer.appendChild(titleContainer);
container.appendChild(mainContainer);
app.appendChild(container);
export {};
//# sourceMappingURL=main.js.map