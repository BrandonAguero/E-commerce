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

function printProductsAvailableFilter(datos) {
    const amountShirt = document.querySelector(".counter--shirt");
    const amountHoddie = document.querySelector(".counter--hoddie");
    const amountSweater = document.querySelector(".counter--sweater");
    let counterShirt = 0;
    let counterHoddie = 0;
    let counterSweater = 0;
    for (const data of datos.products) {
        if (data.category === "shirt") counterShirt++;
        if (data.category === "hoddie") counterHoddie++;
        if (data.category === "sweater") counterSweater++;
    }
    amountShirt.textContent = `${counterShirt} products`;
    amountHoddie.textContent = `${counterHoddie} products`;
    amountSweater.textContent = `${counterSweater} products`;
}

function printDiferentsProducts(datos) {
    const mainSectionProducts = document.querySelector(".main__section--second");
    for (const data of datos.products) {
        const article = document.createElement("article");
        article.classList.add("section__article", `${data.category}`);
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
        p.classList.add("product--name")
        figure.appendChild(img);
        h4.appendChild(span);
        divInfo.append(h4, p, divAdd);
        article.append(figure, divInfo);
        mainSectionProducts.append(article);
    }
}

function filterProductsCategory() {
    const sectionDiv = document.querySelectorAll(".main__section--div");
    sectionDiv.forEach((div) => {
        div.addEventListener("click", moveDivTargetFilter);
    });
    function moveDivTargetFilter(e) {
        sectionDiv.forEach((div) => {
            div.classList.remove("main__div--target");
        });
        e.currentTarget.classList.add("main__div--target");
        mixitup(".main__section--second", {
            selectors: {
                target: '.section__article'
            },
            animation: {
                duration: 200
            }
        });
    }
}

function whereAreWeNow() {
    const headerNav = document.querySelector(".header__div");
    const weHere = document.querySelectorAll(".we--here");
    const hereProducts = document.querySelectorAll(".products");
    const hereHome = document.querySelectorAll(".home");
    
    function animationScroll() {
        let y = window.scrollY;
        if (y > 100) {
            headerNav.classList.add("header__nav--scroll");
        } else {
            headerNav.classList.remove("header__nav--scroll");
        }
        if (y > 680) {
            weHere.forEach((here) => {
                here.classList.remove("we--here");
            })
            hereProducts.forEach((here) => {
                here.classList.add("we--here");
            })
        } else {
            hereHome.forEach((here) => {
                here.classList.add("we--here");
            })
            hereProducts.forEach((here) => {
                here.classList.remove("we--here");
            })
        }
    }
    window.onscroll = () => animationScroll();
}

function darkModeConversion() {
    const body = document.querySelector("body");
    const moon = document.querySelector(".moon--sun");
    const bag = document.querySelector(".bag--close");
    const counter = document.querySelector(".header__ul--counter");
    const dash = document.querySelector(".dashboard");
    const convertDarkMode = document.querySelectorAll(".convert--darkmode");

    convertDarkMode.forEach((item) => {
        item.addEventListener("click", darkMode);
    });

    function darkMode() {
        if (!body.classList.contains("darkmode")) {
            body.classList.add("darkmode");
            moon.classList.add("moon--sun--dark");
            bag.classList.add("bag--close--dark");
            counter.classList.add("header__ul--counter--dark")
            dash.classList.add("dashboard--dark");
        } else {
            body.classList.remove("darkmode");
            moon.classList.remove("moon--sun--dark");
            bag.classList.remove("bag--close--dark");
            counter.classList.remove("header__ul--counter--dark")
            dash.classList.remove("dashboard--dark");
        }
        if (body.classList.contains("darkmode")) {
            localStorage.setItem("darkMode", "true");
        } else {
            localStorage.setItem("darkMode", "false");
        };
    };
    
};

function openCloseDashBoard() {
    const iconDash = document.querySelector(".dashboard");
    const closeDash = document.querySelector(".header__dashboard--close");
    iconDash.addEventListener("click", dashBoard);

    function dashBoard() {
        if (iconDash.classList.contains("dashboard--close")) {
            closeDash.classList.remove("header__dashboard--open");
            iconDash.classList.remove("dashboard--close");
        } else {
            closeDash.classList.add("header__dashboard--open");
            iconDash.classList.add("dashboard--close")
        }
    }
}

function openCloseCart() {
    const openCart = document.querySelectorAll(".bag--close");
    const cart = document.querySelector(".header__cart--close");
    
    openCart.forEach((div) => {
        div.addEventListener("click", openCartProducts);
    })
    
    function openCartProducts() {
        cart.classList.toggle("header__cart--open");
    }
}

function verifyDarkMode() {
    const body = document.querySelector("body");
    const moon = document.querySelector(".moon--sun");
    const bag = document.querySelector(".bag--close");
    const counter = document.querySelector(".header__ul--counter");
    const dash = document.querySelector(".dashboard");
    if (JSON.parse(localStorage.getItem("darkMode"))) {
        body.classList.add("darkmode");
        moon.classList.add("moon--sun--dark");
        bag.classList.add("bag--close--dark");
        counter.classList.add("header__ul--counter--dark")
        dash.classList.add("dashboard--dark");
    } else {
        body.classList.remove("darkmode");
        moon.classList.remove("moon--sun--dark");
        bag.classList.remove("bag--close--dark");
        counter.classList.remove("header__ul--counter--dark")
        dash.classList.remove("dashboard--dark");
    };
}

window.addEventListener("load", async () => {
    /* Preguntar porque no puedo agregarlo con la funcion convertDark Mode */
    //! Importante
    verifyDarkMode();

    //* Loanding Page
    setTimeout(() => {
        const contentloanding = document.querySelector(".loanding");
        contentloanding.classList.add("loanding--none");
    }, 3000)

    const dataObjectOriginal = {
        products: JSON.parse(window.localStorage.getItem("data")) || (await getData()),
        cart: {},
    };
    let dataObject = structuredClone(dataObjectOriginal);

    printProductsAvailableFilter(dataObjectOriginal);
    printDiferentsProducts(dataObjectOriginal); 
    filterProductsCategory();
    whereAreWeNow();
    darkModeConversion();
    openCloseDashBoard();
    openCloseCart();
});





