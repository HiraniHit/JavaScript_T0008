function task3() {
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  let div = document.createElement("div");

  div.style.color = "white";

  btn1.innerText = "Click for info";
  btn1.setAttribute("id", "personal-info");
  btn1.setAttribute("onclick", "setInfo()");
  btn1.style.padding = "8px 16px";
  btn1.style.borderRadius = "25px";
  btn1.style.backgroundColor = " black";
  btn1.style.color = "white";
  btn1.style.border = "none";

  btn2.innerText = "Click for Date";
  btn2.setAttribute("id", "Date");
  btn2.setAttribute("onclick", "setDate()");
  btn2.style.padding = "8px 16px";
  btn2.style.borderRadius = "25px";
  btn2.style.backgroundColor = " black";
  btn2.style.color = "white";
  btn2.style.border = "none";

  div.appendChild(btn1);
  div.appendChild(btn2);
  document.body.appendChild(div);
}

function setInfo() {
  let div = document.createElement("div");
  div.style.backgroundColor = "lightgray";
  div.style.width = "40%";
  div.style.height = "auto";
  div.style.borderRadius = "10px";
  div.style.padding = "15px";

  let h2 = document.createElement("h2");
  h2.innerText = "Hello.. My name is hit.";
  h2.style.textAlign = "center";
  div.appendChild(h2);

  let p = document.createElement("p");
  p.innerText =
    "i am from india..i'm working from devotee infotch as a softwear devloper";

  div.appendChild(p);

  document.body.appendChild(div);
}

function setDate() {
  let div = document.createElement("div");
  div.style.backgroundColor = "lightgray";
  div.style.width = "40%";
  div.style.height = "auto";
  div.style.borderRadius = "10px";
  div.style.padding = "15px";

  let h3 = document.createElement("h3");
  h3.innerText = new Date();
  div.appendChild(h3);

  document.body.appendChild(div);
}
