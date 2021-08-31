import menuCard from "./menu-card.hbs"; // отримуємо шаблони у вигляді функції
import menuItem from "./menu.json"; // отримуємо розпарсений масив з об'єктами

const menuRef = document.querySelector(".js-menu"); // посилання на місце для вставення розмітки меню 
const inputChangeTheme = document.querySelector(".theme-switch__toggle"); // посилання на переключатель теми

const menuMarkup = menuCard(menuItem); // тут повертаємо розмітку у вигляді строки
menuRef.insertAdjacentHTML("beforeend", menuMarkup); // тут вставляємо меню на сторінку 

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const {LIGHT, DARK} = Theme;

document.body.classList.add(LIGHT); // роблю по замовчуванню світлу тему

const handleInputChange = (e) => { // перевірка якщо input checked, то включається темна тема, а якщо ні то залишається світла 
    if(e.target.checked) {
        document.body.classList.replace(LIGHT, DARK);
        localStorage.setItem("Theme", DARK);
    } else {
        document.body.classList.replace(DARK, LIGHT);
        localStorage.setItem("Theme", LIGHT);
    }
}

const localStorageTheme = () => { // якщо тема в localStorage dark, тоді чекбокс ставимо в положення true та устанавлюжмо темну тему
    if(localStorage.getItem("Theme") === "dark-theme") {
        inputChangeTheme.checked = "true";
        document.body.classList.replace(LIGHT, DARK);
    }
    return
}

inputChangeTheme.addEventListener("change", handleInputChange); // вішаю слухача події на перемикач теми
localStorageTheme()