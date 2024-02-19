import { linksFooter } from '../../utils/navLinksFooter';
import './Footer.css'

export const Footer = () => {
    const footer = document.querySelector("footer");
    linksFooter.forEach((link) => {
        const a = document.createElement("a");
        a.textContent = link.name;
        footer.appendChild(a);
    })
    const copy = document.createElement("p");
    copy.textContent = "Todos los derechos reservados Jonatan Sanchez";
    footer.appendChild(copy);
}