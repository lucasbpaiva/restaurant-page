export const loadMenu = function() {
    const container = document.querySelector("#content");
    container.classList.add("menu");

    const burgersHeading = document.createElement("p");
    burgersHeading.textContent = "Burgers";
    burgersHeading.classList.add("heading");

    const burgers = document.createElement("div");
    burgers.classList.add("items");

    const burgersLeft = document.createElement("div");
    burgersLeft.classList.add("items-left");
    addMenuItem(burgersLeft, "Beef Burger", "beef, onion, tomato, pickle, lettuce, mustard");
    addMenuItem(burgersLeft, "Cheeseburger", "beef, onion, tomato, pickle, lettuce, cheese");
    addMenuItem(burgersLeft, "Creamy Mushroom", "beef, onion, tomato, pickle, mushroom, mayo");

    const burgersRight = document.createElement("div");
    burgersRight.classList.add("items-right");
    addMenuItem(burgersRight, "Spicy Buffalo", "chicken, onion, tomato, pickle, chilli pepper");
    addMenuItem(burgersRight, "Barbeque Burger", "beef, onion, tomato, pickle, bbq sauce");
    addMenuItem(burgersRight, "Hawaiian Burger", "beef, onion, tomato, pineapple, cheese");

    const drinksHeading = document.createElement("p");
    drinksHeading.textContent = "Drinks";
    drinksHeading.classList.add("heading");

    const drinks = document.createElement("div");
    drinks.classList.add("items");

    const drinksLeft = document.createElement("div");
    drinksLeft.classList.add("items-left");
    addMenuItem(drinksLeft, "Soft Drinks");
    addMenuItem(drinksLeft, "Iced Tea");
    addMenuItem(drinksLeft, "Pink Lemonade");

    const drinksRight = document.createElement("div");
    drinksRight.classList.add("items-right");
    addMenuItem(drinksRight, "Bottled Water");
    addMenuItem(drinksRight, "Milkshake");
    addMenuItem(drinksRight, "Beer");

    //add elements to container-----------
    container.appendChild(burgersHeading);

    burgers.appendChild(burgersLeft);
    burgers.appendChild(burgersRight);
    container.appendChild(burgers);

    container.appendChild(drinksHeading);

    drinks.appendChild(drinksLeft);
    drinks.appendChild(drinksRight);
    container.appendChild(drinks);
};

function addMenuItem(parent, itemName, description) {
    const item = document.createElement("div");
    item.classList.add("item");

    const namePara = document.createElement("p");
    namePara.classList.add("item-name");
    namePara.textContent = itemName;
    item.appendChild(namePara);

    if (description != undefined) {
        const descriptionPara = document.createElement("p");
        descriptionPara.classList.add("description");
        descriptionPara.textContent = description;
        item.appendChild(descriptionPara);
    }

    parent.appendChild(item);
}