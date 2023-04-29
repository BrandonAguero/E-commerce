async function getData() {
    try {
        const response = await fetch("https://ecommercebackend.fundamentos-29.repl.co/");
        const data = await response.json();
        window.localStorage.setItem("data", JSON.stringify(data));
        return data;
    } catch(error) {
        console.log(error);
    }
}

(async () => {
    const dataObject = {
        products: JSON.parse(window.localStorage.getItem("data")) || (await getData()),
        cart: {},
    };
    console.log(dataObject);
})();

/* Overcroll Dinámico */
const headerNav = document.querySelector(".header__nav");

function animationScroll() {
    let y = window.scrollY;
    if (y > 100) {
        headerNav.classList.add("header__nav--scroll");
    } else {
        headerNav.classList.remove("header__nav--scroll");
    }
}
window.onscroll = () => animationScroll();

/* Dark Mode */

const body = document.querySelector("body");
const convertDarkMode = document.querySelectorAll(".convert--darkmode");
const headerLogo = document.querySelector(".header--logo");
const moonSun = document.querySelector(".moon--sun");
const bagColor = document.querySelector(".bag--color");
const dashBoard = document.querySelector(".dashboard--color");

convertDarkMode.forEach((item) => {
    item.addEventListener("click", darkMode);
});

function darkMode() {
    body.classList.toggle("darkmode");
}