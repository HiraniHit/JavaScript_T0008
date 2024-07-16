async function getdata() {
    await fetch("https://dummyjson.com/quotes")
        .then((res) => res.json())
        .then((data) =>
            localStorage.setItem("quote-data", JSON.stringify(data))
        );
}
function nextQuote() {
    ganareteRendomNumber();
    showData();
}
function showData() {
    try {
        let data = JSON.parse(localStorage.getItem("quote-data")).quotes;
        let div_quote = document.createElement("div");
        div_quote = "";
        let id = ganareteRendomNumber();

        data.map((value) => {
            if (value.id == id) {
                div_quote += `<div>
            <h1>Quotes</h1>
                <div>${value.quote}</div>
                <div>-${value.author}</div>
            </div>`;
            }
            document.querySelector(".main").innerHTML = div_quote;
        });
    } catch (error) {
        console.log(error);
    }
}
showData();

function ganareteRendomNumber() {
    let ganareteRendomNumber = Math.floor(Math.random() * 30) + 1;
    return ganareteRendomNumber;
}

// function nextQuote(){
//     window.location.reload()
// }
