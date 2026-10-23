import { content } from "./index.js"
export function homeLoad(){
    const hero = document.createElement("section");
    hero.classList.add("hero");
    content.appendChild(hero);

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    hero.appendChild(heroText);

    const welcome = document.createElement("h1");
    welcome.textContent = "Welcome to Simple Bites"
    const slogan = document.createElement("p");
    slogan.textContent = "We serve delicious, fresh, and wholesome food made with love. Come hungry, leave happy! ";
    const btnPrimary = document.createElement("button");
    btnPrimary.classList.add("btn-primary");
    btnPrimary.textContent = "Learn More"
    heroText.appendChild(welcome);
    heroText.appendChild(slogan);
    heroText.appendChild(btnPrimary);

    const heroImg = document.createElement("div")
    heroImg.classList.add("hero-image");
    hero.appendChild(heroImg);
}