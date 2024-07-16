const Quote = "https://dummyjson.com/quotes";
const product = "https://dummyjson.com/products";
const Post = "https://dummyjson.com/posts";

const request1 = fetch(Quote).then((response) => response.json());
const request2 = fetch(product).then((response) => response.json());
const request3 = fetch(Post).then((response) => response.json());

Promise.all([request1, request2, request3])
    .then(([data1, data2, data3]) => {
        localStorage.setItem(
            "combaine-data",
            JSON.stringify([data1, data2, data3])
        );
    })
    .catch((error) => {
        console.error(error);
    });

function productData() {
    let productData = JSON.parse(localStorage.getItem("combaine-data"))[1];
    let div_product = document.querySelector(".product");
    div_product = "";

    productData.products.map((value) => {
        div_product += `<div>
            <div><img src="${value.thumbnail}" width="200"/></div>
            <h2>${value.title.substring(0, 10) + "..."}</h2>
            <p>${value.description.substring(0, 30) + "..."}</p>
            <p>Price : ${value.price}</p>
            <button>Cart</button>
        </div>`;
    });
    document.querySelector(".product").innerHTML = div_product;
}

productData();

function PostData() {
    let postData = JSON.parse(localStorage.getItem("combaine-data"))[2];
    console.log(postData[0]);
    console.log(productData);
    let div_post = document.querySelector(".Post");
    div_post = "";

    postData.posts.map((value) => {
        console.log(value);
        div_post += `<div>
            <h3>${value.title.substring(0, 35) + "..."}</h3>
            <p>${value.body.substring(0, 30) + "..."}</p>
            <p>Likes :${value.reactions.likes} , Dislike :${
            value.reactions.dislikes
        }   </p>
            <p>Views :${value.views}</p>
        </div>`;
    });
    document.querySelector(".Post").innerHTML = div_post;
}
PostData();

function quoteData() {
    let quoteData = JSON.parse(localStorage.getItem("combaine-data"))[0];
    console.log(quoteData);
    console.log(productData);
    let div_quote = document.querySelector(".Post");
    div_quote = "";

    quoteData.quotes.map((value) => {
        div_quote += `<div>
            <p>${value.quote}</p>
            <p> - ${value.author}</p>
        </div>`;
    });

    document.querySelector(".quote").innerHTML = div_quote;
}
quoteData();
