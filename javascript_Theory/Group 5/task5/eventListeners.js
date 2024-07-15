let btn = document.getElementById("btn4");

btn.addEventListener("click", () => {
  console.log("click event triggred");
});

btn.addEventListener("mouseover", () => {
  console.log("mouse over");
});
btn.addEventListener("mouseout", () => {
  console.log("mouse out");
});

function task4() {
  let div = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.innerText = "Hover me";
  h2.setAttribute("id", "h2-hover");

  h2.addEventListener("mouseenter", () => {
    alert("mouseenter event");
  });

  div.appendChild(h2);
  document.body.appendChild(div);
}

window.addEventListener("resize",()=>{
    console.log("window is resizeing");
})
