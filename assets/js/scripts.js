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
    //* Contador de los productos disponibles
    (() => {
        const amountShirt = document.querySelector(".counter--shirt");
        const amountHoddie = document.querySelector(".counter--hoddie");
        const amountSweater = document.querySelector(".counter--sweater");
        let counterShirt = 0;
        let counterHoddie = 0;
        let counterSweater = 0;
        for (const data of dataObject.products) {
            if (data.category === "shirt") counterShirt++;
            if (data.category === "hoddie") counterHoddie++;
            if (data.category === "sweater") counterSweater++;
        }
        amountShirt.textContent = `${counterShirt} products`;
        amountHoddie.textContent = `${counterHoddie} products`;
        amountSweater.textContent = `${counterSweater} products`;
    })();
    //* Inserción de todos los productos
    const mainSectionProducts = document.querySelector(".main__section--second");
    for (const data of dataObject.products) {
        const article = document.createElement("article");
        article.classList.add("section__article");
        const figure = document.createElement("figure");
        figure.classList.add("section__article--figure");
        const img = document.createElement("img");
        img.setAttribute("src", `${data.image}`)
        const divInfo = document.createElement("div");
        divInfo.classList.add("section__article--div");
        const divAdd = document.createElement("div");
        divAdd.classList.add("article__div--add");
        divAdd.textContent = "+";
        const h4 = document.createElement("h4");
        h4.textContent = `$${data.price}.00`;
        const span = document.createElement("span");
        span.textContent = `Stock: ${data.quantity}`;
        const p = document.createElement("p");
        p.textContent = `${data.name}`;
        figure.appendChild(img);
        h4.appendChild(span);
        divInfo.append(h4, p, divAdd);
        article.append(figure, divInfo);
        mainSectionProducts.append(article);
    }
    console.log(mainSectionProducts);
})();

/* Overcroll Dinámico */
const headerNav = document.querySelector(".header__div");
const weHere = document.querySelector(".we--here");
const hereProducts = document.querySelector(".products");
const hereHome = document.querySelector(".home");

function animationScroll() {
    let y = window.scrollY;
    if (y > 100) {
        headerNav.classList.add("header__nav--scroll");
    } else {
        headerNav.classList.remove("header__nav--scroll");
    }
    console.log(y);
    if (y > 680) {
        weHere.classList.remove("we--here");
        hereProducts.classList.add("we--here");
    } else {
        hereHome.classList.add("we--here");
        hereProducts.classList.remove("we--here");
    }
}


window.onscroll = () => animationScroll();

/* Dark Mode */

const body = document.querySelector("body");
const convertDarkMode = document.querySelectorAll(".convert--darkmode");

convertDarkMode.forEach((item) => {
    item.addEventListener("click", darkMode);
});

function darkMode() {
    body.classList.toggle("darkmode");
}

/* Desplazamiento del target */


const sectionDiv = document.querySelectorAll(".main__section--div");

sectionDiv.forEach((div) => {
    div.addEventListener("click", moveDivTarget);
});

function moveDivTarget(e) {
    sectionDiv.forEach((div) => {
        div.classList.remove("main__div--target");
    });
    if (e.target instanceof HTMLDivElement) {
        e.target.classList.add("main__div--target");
    } else {
        e.target.parentNode.classList.add("main__div--target");
    }
}

/* loanding image */

window.onload = () => {
    let img = document.querySelector(".loanding--page")
    img.style.visibility = "hidden";
    img.style.opacity = "0";
}
