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
    console.log(dataObject.products);
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
        p.classList.add("product--name")
        figure.appendChild(img);
        h4.appendChild(span);
        divInfo.append(h4, p, divAdd);
        article.append(figure, divInfo);
        mainSectionProducts.append(article);
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

    const filterSectionDiv = document.querySelectorAll(".main__section--div");

    filterSectionDiv.forEach((div) => {
        div.addEventListener("click", filterProductsDiv);
    })

    function filterProductsDiv() {
        filterSectionDiv.forEach((div) => {
            let currentTarget = div.classList.contains("main__div--target");
            let currentDivOne = div.classList.contains("section__div--one");
            let currentDivTwo = div.classList.contains("section__div--two");
            let currentDivThree = div.classList.contains("section__div--three");
            let currentDivFour = div.classList.contains("section__div--four");
            if (currentDivOne & currentTarget) {
                div.removeEventListener("click", filterProductsDiv);
                let articlesRemove = document.querySelectorAll(".section__article");
                articlesRemove.forEach((article) => {
                    article.remove();
                })
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
                    p.classList.add("product--name")
                    figure.appendChild(img);
                    h4.appendChild(span);
                    divInfo.append(h4, p, divAdd);
                    article.append(figure, divInfo);
                    mainSectionProducts.append(article);
                }                
            } else if (currentDivTwo & currentTarget) {
                div.removeEventListener("click", filterProductsDiv);
                let articlesRemove = document.querySelectorAll(".section__article");
                articlesRemove.forEach((article) => {
                    article.remove();
                })
                const mainSectionProducts = document.querySelector(".main__section--second");
                for (const data of dataObject.products) {
                    if (data.category === "shirt") {
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
                        p.classList.add("product--name")
                        figure.appendChild(img);
                        h4.appendChild(span);
                        divInfo.append(h4, p, divAdd);
                        article.append(figure, divInfo);
                        mainSectionProducts.append(article);
                    }
                }
            } else if (currentDivThree & currentTarget) {
                div.removeEventListener("click", filterProductsDiv);
                let articlesRemove = document.querySelectorAll(".section__article");
                articlesRemove.forEach((article) => {
                    article.remove();
                })
                const mainSectionProducts = document.querySelector(".main__section--second");
                for (const data of dataObject.products) {
                    if (data.category === "hoddie") {
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
                        p.classList.add("product--name")
                        figure.appendChild(img);
                        h4.appendChild(span);
                        divInfo.append(h4, p, divAdd);
                        article.append(figure, divInfo);
                        mainSectionProducts.append(article);
                    }
                }
            } else if (currentDivFour & currentTarget) {
                div.removeEventListener("click", filterProductsDiv);
                let articlesRemove = document.querySelectorAll(".section__article");
                articlesRemove.forEach((article) => {
                    article.remove();
                })
                const mainSectionProducts = document.querySelector(".main__section--second");
                for (const data of dataObject.products) {
                    if (data.category === "sweater") {
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
                        p.classList.add("product--name")
                        figure.appendChild(img);
                        h4.appendChild(span);
                        divInfo.append(h4, p, divAdd);
                        article.append(figure, divInfo);
                        mainSectionProducts.append(article);
                    }
                }

            } else {
                div.addEventListener("click", filterProductsDiv);

            }
        })

        const productInfo = document.querySelectorAll(".product--name");
        productInfo.forEach((p) => {
            p.addEventListener("click", showProductInfo);
        });
    
        function showProductInfo(e) {
            if (e.target) {
                for (const data of dataObject.products) {
                    if (data.name === e.target.textContent) {
                        const articleDetails = document.createElement("article");
                        articleDetails.classList.add("article--details");
                        const closeArticleDetails = document.createElement("div");
                        closeArticleDetails.classList.add("article__details--close");
                        closeArticleDetails.innerHTML = "&times;";
                        const figureDetails = document.createElement("figure");
                        figureDetails.classList.add("article__details--figure");
                        const img = document.createElement("img");
                        img.setAttribute("src", `${data.image}`)
                        const divContainerInfo = document.createElement("div");
                        divContainerInfo.classList.add("article__details--container");
                        const h3 = document.createElement("h3");
                        h3.textContent = `$${data.name} - ${data.category}`;
                        h3.classList.add("product__details--name");
                        const p = document.createElement("p");
                        p.textContent = `${data.description}`;
                        const divPriceStock = document.createElement("div");
                        divPriceStock.classList.add("details__container--pristock");
                        const divPrice = document.createElement("h4");
                        divPrice.textContent = `$${data.price}.00`
                        divPrice.classList.add("details__container--price");
                        const divAdd = document.createElement("div");
                        divAdd.classList.add("details__container--divadd");
                        divAdd.textContent = "+";
                        const divStock = document.createElement("p")
                        divStock.textContent = `stock: ${data.quantity}`
                        divStock.classList.add("details__container--stock");
                        figureDetails.appendChild(img);
                        divPrice.append(divAdd);
                        divPriceStock.append(divPrice, divStock);
                        divContainerInfo.append(h3, p, divPriceStock);
                        articleDetails.append(figureDetails, divContainerInfo, closeArticleDetails);
                        mainSectionProducts.appendChild(articleDetails);
                        break
                    };
                };
            };
            const iconClose = document.querySelector(".article__details--close");
            const articleDetails = document.querySelector(".article--details");
            console.log(iconClose);
            iconClose.addEventListener("click", closeArticleDetails);
        
            function closeArticleDetails() {
                articleDetails.remove();
            }
        };
    };
    const productInfo = document.querySelectorAll(".product--name");
    productInfo.forEach((p) => {
        p.addEventListener("click", showProductInfo);
    });
    function showProductInfo(e) {
        if (e.target) {
            for (const data of dataObject.products) {
                if (data.name === e.target.textContent) {
                    const articleDetails = document.createElement("article");
                    articleDetails.classList.add("article--details");
                    const closeArticleDetails = document.createElement("div");
                    closeArticleDetails.classList.add("article__details--close");
                    closeArticleDetails.innerHTML = "&times;";
                    const figureDetails = document.createElement("figure");
                    figureDetails.classList.add("article__details--figure");
                    const img = document.createElement("img");
                    img.setAttribute("src", `${data.image}`)
                    const divContainerInfo = document.createElement("div");
                    divContainerInfo.classList.add("article__details--container");
                    const h3 = document.createElement("h3");
                    h3.textContent = `$${data.name} - ${data.category}`;
                    h3.classList.add("product__details--name");
                    const p = document.createElement("p");
                    p.textContent = `${data.description}`;
                    const divPriceStock = document.createElement("div");
                    divPriceStock.classList.add("details__container--pristock");
                    const divPrice = document.createElement("h4");
                    divPrice.textContent = `$${data.price}.00`
                    divPrice.classList.add("details__container--price");
                    const divAdd = document.createElement("div");
                    divAdd.classList.add("details__container--divadd");
                    divAdd.textContent = "+";
                    const divStock = document.createElement("p")
                    divStock.textContent = `stock: ${data.quantity}`
                    divStock.classList.add("details__container--stock");
                    figureDetails.appendChild(img);
                    divPrice.append(divAdd);
                    divPriceStock.append(divPrice, divStock);
                    divContainerInfo.append(h3, p, divPriceStock);
                    articleDetails.append(figureDetails, divContainerInfo, closeArticleDetails);
                    mainSectionProducts.appendChild(articleDetails);
                    break
                };
            };
        };
        const iconClose = document.querySelector(".article__details--close");
        const articleDetails = document.querySelector(".article--details");
        console.log(iconClose);
        iconClose.addEventListener("click", closeArticleDetails);
    
        function closeArticleDetails() {

            articleDetails.remove();
        }
    };
    



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
