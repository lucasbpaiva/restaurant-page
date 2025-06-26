import homeImage from "./images/home.jpg";

export const loadHomepage = function() {
    const container = document.querySelector("#content");

    const image = document.createElement("img");
    image.src = homeImage;
    container.appendChild(image);

    const textBox = document.createElement("div");
    textBox.classList.add("hero");

    const title = document.createElement("p");
    title.textContent = "BEST BURGER IN TOWN";
    title.classList.add("title");

    const subtitle = document.createElement("p");
    subtitle.textContent = "Locally Sourced / Crafted with Love";

    textBox.appendChild(title);
    textBox.appendChild(subtitle);

    container.appendChild(textBox);
}