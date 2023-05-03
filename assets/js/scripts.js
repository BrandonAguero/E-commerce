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

        //! Agregar productos al carrito AQUI!!!! 
        const divAddArticle = document.querySelectorAll(".article__div--add");

        divAddArticle.forEach((div) => {
            div.addEventListener("click", addProductCartArticle);
        });

        function addProductCartArticle () {
            console.log("Te escucho!");
        };
    
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
                        divAdd.classList.add("div--add");
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

            //! Agregar productos al carrito AQUI!!!
            const iconClose = document.querySelector(".article__details--close");
            const articleDetails = document.querySelector(".article--details");
            const divAddDetails = document.querySelector(".details__container--divadd");
    
            iconClose.addEventListener("click", closeArticleDetails);
            divAddDetails.addEventListener("click", addProductCartDetails);
    
            function closeArticleDetails() {
                articleDetails.remove();
            }
        
            function addProductCartDetails() {
                console.log("Te escucho!");
            };
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
        const divAddDetails = document.querySelector(".details__container--divadd");

        iconClose.addEventListener("click", closeArticleDetails);
        divAddDetails.addEventListener("click", addProductCartDetails);

        function closeArticleDetails() {
            articleDetails.remove();
        }
    
        function addProductCartDetails() {
            console.log("Te escucho!");
        };
    };

    
    //! Agregar productos al carrito AQUI!!!!
    const divAddArticle = document.querySelectorAll(".article__div--add");
    const containerProducts = document.querySelector(".diferents--products");


    divAddArticle.forEach((div) => {
        div.addEventListener("click", countProductCartArticle);
    });

    let counterProducts = [];

    function countProductCartArticle(e) {
        if (e.target) {
            const productName = e.target.previousElementSibling;
            if (counterProducts.length === 0) {
                for (const product of dataObject.products) {
                    if (product.name === productName.textContent) {
                        product.quantity--;
                        counterProducts.push(product);
                        break;
                    };
                };
            } else {
                let find = false;
                for (let i = 0; i < counterProducts.length; i++) {
                    if (counterProducts[i].name === productName.textContent) {
                        if (counterProducts[i].quantity > 0) {
                            counterProducts[i].quantity--;
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...No tenemos más stock',
                                text: `${counterProducts[i].name}`,
                            })
                        } 
                        const article = document.createElement("article");
                        article.classList.add("header__cart--product")
                        const figure = document.createElement("figure");
                        const img = document.createElement("img");
                        img.setAttribute("src", counterProducts[i].image);
                        const div = document.createElement("div");
                        div.classList.add("product--details");
                        const h3 = document.createElement("h3");
                        h3.textContent = `${counterProducts[i].name}`;
                        const pStock = document.createElement("p");
                        pStock.textContent = `Stock: ${counterProducts[i].quantity} | `;
                        const spanPrice = document.createElement("span");
                        spanPrice.textContent = `$${counterProducts[i].price}`;
                        const pSubTotal = document.createElement("p");
                        pSubTotal.textContent = `Subtotal:`
                        const pAddDel = document.createElement("p");
                        const spanSubtract = document.createElement("span");
                        spanSubtract.classList.add("subtract--product");
                        const spanQuantity = document.createElement("span");
                        spanQuantity.textContent = `2 Units`;
                        spanQuantity.classList.add("quantity--products");
                        spanQuantity.products
                        const spanPlus = document.createElement("span");
                        spanPlus.classList.add("plus--product");
                        const spanTrash = document.createElement("span");
                        spanTrash.classList.add("trash--product");
                        pAddDel.append(spanSubtract, spanQuantity, spanPlus, spanTrash);
                        pStock.appendChild(spanPrice);
                        div.append(h3, pStock, pSubTotal, pAddDel);
                        figure.appendChild(img);
                        article.append(figure, div);
                        containerProducts.appendChild(article); 
                        find = true;
                        break;
                    }
                }
                if (!find) {
                    for (const product of dataObject.products) {
                        if (product.name === productName.textContent) {
                            product.quantity--;
                            counterProducts.push(product);
                            break;
                        };
                    };
                }
            }
            console.log(counterProducts);
        };


    };


})();


//! Important

/*                 const article = document.createElement("article");
                article.classList.add("header__cart--product")
                const figure = document.createElement("figure");
                const img = document.createElement("img");
                img.setAttribute("src", onlyProduct.image);
                const div = document.createElement("div");
                div.classList.add("product--details");
                const h3 = document.createElement("h3");
                h3.textContent = `${onlyProduct.name}`;
                const pStock = document.createElement("p");
                pStock.textContent = `Stock: ${onlyProduct.quantity} | `;
                const spanPrice = document.createElement("span");
                spanPrice.textContent = `$${onlyProduct.price}`;
                const pSubTotal = document.createElement("p");
                const pAddDel = document.createElement("p");
                const spanSubtract = document.createElement("span");
                spanSubtract.classList.add("subtract--product");
                const spanQuantity = document.createElement("span");
                spanQuantity.classList.add("quantity--products");
                spanQuantity.products
                const spanPlus = document.createElement("span");
                spanPlus.classList.add("plus--product");
                const spanTrash = document.createElement("span");
                spanTrash.classList.add("trash--product");
                pAddDel.append(spanSubtract, spanQuantity, spanPlus, spanTrash);
                pStock.appendChild(spanPrice);
                div.append(h3, pStock, pSubTotal, pAddDel);
                figure.appendChild(img);
                article.append(figure, div);
                containerProducts.appendChild(article); */
//! Important



/* Overcroll Dinámico */
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

/* Dark Mode */

const body = document.querySelector("body");
const convertDarkMode = document.querySelectorAll(".convert--darkmode");

convertDarkMode.forEach((item) => {
    item.addEventListener("click", darkMode);
});

function darkMode() {
    body.classList.toggle("darkmode");
}

const openDash = document.querySelector(".dashboard--close");
const dashboard = document.querySelector(".header__dashboard--close");
openDash.addEventListener("click", openDashBoard);

function openDashBoard() {
    if (openDash.classList.contains("dashboard--close")) {
        openDash.classList.remove("dashboard--close");
        openDash.classList.add("dashboard--open");
        dashboard.classList.add("header__dashboard--open");
    } else {
        openDash.classList.remove("dashboard--open");
        openDash.classList.add("dashboard--close");
        dashboard.classList.remove("header__dashboard--open");
    }

}

const openCart = document.querySelectorAll(".bag--close");
const cart = document.querySelector(".header__cart--close");


openCart.forEach((div) => {
    div.addEventListener("click", openCartProducts);
})

function openCartProducts() {
    cart.classList.toggle("header__cart--open");
}

window.addEventListener("load", function() {
    setTimeout(() => {
        const contentloanding = document.querySelector(".loanding");
        contentloanding.classList.add("loanding--none");
    }, 3000)
})