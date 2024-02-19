import { Footer } from './src/components/Footer/Footer';
import { Header } from './src/components/Header/Header';
import { Photos } from './src/components/Photos/Photos';

import './style.css'

const divApp = document.querySelector("#app");

divApp.innerHTML = `
<header></header>
<main></main>
<footer></footer>
`;

Header();
Photos(3, 10, "javascript");
Footer();