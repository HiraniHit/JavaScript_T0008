function darkMode(){
    document.body.classList.toggle("dark-mode")

    let card = document.querySelector(".card-main")
    card.classList.toggle("dark-card")
}


async function getApi() {
  let API = "https://jsonplaceholder.typicode.com/posts";

  await fetch(API)
    .then((res) => res.json())
    .then((data1) => {
      console.log(data1);
      localStorage.setItem("card-data", JSON.stringify(data1));
    });
}
getApi();

async function dispalydata() {
  let data = JSON.parse(localStorage.getItem("card-data"));
  let div = document.getElementById("card-main");
  let card = document.createElement("div");

  card = "";

  await data.map((value,index) => {
    card += `<div class="card" key=${index}>
                <div class="img">Img</div>
                <h2>${value.title.substring(0, 10) + "..."}</h2>
                <p>item no :${value.id}</p>
                <p>${value.body.substring(0, 75) + "..."}</p>
        </div>`;
  });
  div.innerHTML = card;
}
dispalydata();
