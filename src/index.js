import "./styles.css";
import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";
export const content = document.querySelector("#content");

const navBtn = document.querySelector(".nav-links");
homeLoad();
navBtn.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  console.log(btn.textContent);
  switch (btn.textContent) {
    case "Home":
      for (const child of navBtn.children) {
        child.classList.remove("active");
      }

      content.textContent = "";
      homeLoad();
      btn.classList.add("active");
      break;
    case "Menu":
      for (const child of navBtn.children) {
        child.classList.remove("active");
      }
      content.textContent = "";
      menuLoad();
      btn.classList.add("active");
      break;

    case "Contact":
      for (const child of navBtn.children) {
        child.classList.remove("active");
      }
      content.textContent = "";
      contactLoad();
      btn.classList.add("active");
      break;
    default:
      break;
  }
});
console.log("hi");
