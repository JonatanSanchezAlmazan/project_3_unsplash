import { btnClouse, btnOpen } from '../../utils/buttons';
import { navLinks } from '../../utils/navLinks';
import { renderMain } from '../../utils/renderMain';
import { createButtons } from '../Buttons/Buttons';
import { Link } from '../Link/Link';
import './Header.css'

export const Header = () => {
    const header = document.querySelector("header");
    const divLogo = document.createElement("div");
    divLogo.className = "divLogo";
    const imgLogo = document.createElement("img");
    imgLogo.src = "/Pinterest_Logo.svg.png";
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    const ul = document.createElement("ul");
    navLinks.forEach((link) => {
        Link(ul, link);
    });
    nav.append(ul);
    nav.appendChild(createButtons("clouse_menu", "clouse"))
    divLogo.appendChild(imgLogo);
    header.appendChild(divLogo);
    header.appendChild(createButtons("open_menu", "menu_hamb"));
    header.append(nav);
    divLogo.addEventListener("click", renderMain)
    btnOpen();
    btnClouse();




}