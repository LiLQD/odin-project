import { content } from "./index.js"
export function menuLoad(){
    const menu = document.createElement("section");
    menu.classList.add("menu-section");
    content.appendChild(menu);

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("section-title");
    sectionTitle.textContent = "Our Menu"
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");
    const menuNote = document.createElement("p");
    menuNote.classList.add("menu-note");
    menuNote.textContent = "Prices are subject to change without notice.";
    menu.appendChild(sectionTitle);
    menu.appendChild(menuGrid);
    menu.appendChild(menuNote);

    const firstMenuCate = document.createElement("div");
    const starters = document.createElement("h1");
    starters.textContent = "Starters";
    const starterMenu = document.createElement("ul");
    starterMenu.classList.add("menu-list")
    const garlicBread = document.createElement("li");
    garlicBread.classList.add("menu-item");
    garlicBread.textContent = "Garlic Bread"
    const garlicBreadPrice = document.createElement("span");
    garlicBreadPrice.classList.add("item-price");
    garlicBreadPrice.textContent = "$4.50";
    garlicBread.appendChild(garlicBreadPrice);
    const bruschetta = document.createElement("li");
    bruschetta.classList.add("menu-item");
    bruschetta.textContent = "Bruschetta"
    const bruschettaPrice = document.createElement("span");
    bruschettaPrice.classList.add("item-price");
    bruschettaPrice.textContent = "$5.50";
    bruschetta.appendChild(bruschettaPrice);
    const tomatoSoup = document.createElement("li");
    tomatoSoup.classList.add("menu-item");
    tomatoSoup.textContent = "Tomato Soup";
    const tomatoSoupPrice = document.createElement("span");
    tomatoSoupPrice.classList.add("item-price");
    tomatoSoupPrice.textContent = "$4.00";
    tomatoSoup.appendChild(tomatoSoupPrice);
    starterMenu.appendChild(garlicBread);
    starterMenu.appendChild(bruschetta);
    starterMenu.appendChild(tomatoSoup);
    firstMenuCate.appendChild(starters);
    firstMenuCate.appendChild(starterMenu);

    const secondMenuCate = document.createElement("div");
    const mains = document.createElement("h1");
    mains.textContent = "Mains";
    const mainMenu = document.createElement("ul");
    mainMenu.classList.add("menu-list")
    const spaghettiBolognese = document.createElement("li");
    spaghettiBolognese.classList.add("menu-item");
    spaghettiBolognese.textContent = "Spaghetti Bolognese"
    const spaghettiBolognesePrice = document.createElement("span");
    spaghettiBolognesePrice.classList.add("item-price");
    spaghettiBolognesePrice.textContent = "$12.00";
    spaghettiBolognese.appendChild(spaghettiBolognesePrice);
    const chickenAlfredo = document.createElement("li");
    chickenAlfredo.classList.add("menu-item");
    chickenAlfredo.textContent = "Chicken Alfredo"
    const chickenAlfredoPrice = document.createElement("span");
    chickenAlfredoPrice.classList.add("item-price");
    chickenAlfredoPrice.textContent = "$12.50";
    chickenAlfredo.appendChild(chickenAlfredoPrice);
    const margheritaPizza = document.createElement("li");
    margheritaPizza.classList.add("menu-item");
    margheritaPizza.textContent = "Margherita Pizza";
    const margheritaPizzaPrice = document.createElement("span");
    margheritaPizzaPrice.classList.add("item-price");
    margheritaPizzaPrice.textContent = "$14.00";
    margheritaPizza.appendChild(margheritaPizzaPrice);
    mainMenu.appendChild(spaghettiBolognese);
    mainMenu.appendChild(chickenAlfredo);
    mainMenu.appendChild(margheritaPizza);
    secondMenuCate.appendChild(mains);
    secondMenuCate.appendChild(mainMenu);

    const thirdMenuCate = document.createElement("div");
    const desserts = document.createElement("h1");
    desserts.textContent = "Desserts";
    const dessertsMenu = document.createElement("ul");
    dessertsMenu.classList.add("menu-list")
    const tiramisu = document.createElement("li");
    tiramisu.classList.add("menu-item");
    tiramisu.textContent = "Tiramisu"
    const tiramisuPrice = document.createElement("span");
    tiramisuPrice.classList.add("item-price");
    tiramisuPrice.textContent = "$6.00";
    tiramisu.appendChild(tiramisuPrice);
    const cheesecake = document.createElement("li");
    cheesecake.classList.add("menu-item");
    cheesecake.textContent = "Cheesecake"
    const cheesecakePrice = document.createElement("span");
    cheesecakePrice.classList.add("item-price");
    cheesecakePrice.textContent = "$5.50";
    cheesecake.appendChild(cheesecakePrice);
    const chocolateBrownie = document.createElement("li");
    chocolateBrownie.classList.add("menu-item");
    chocolateBrownie.textContent = "Chocolate Brownie";
    const chocolateBrowniePrice = document.createElement("span");
    chocolateBrowniePrice.classList.add("item-price");
    chocolateBrowniePrice.textContent = "$5.00";
    chocolateBrownie.appendChild(chocolateBrowniePrice);
    dessertsMenu.appendChild(tiramisu);
    dessertsMenu.appendChild(cheesecake);
    dessertsMenu.appendChild(chocolateBrownie);
    thirdMenuCate.appendChild(desserts);
    thirdMenuCate.appendChild(dessertsMenu);

    menuGrid.appendChild(firstMenuCate);
    menuGrid.appendChild(secondMenuCate);
    menuGrid.appendChild(thirdMenuCate);
}