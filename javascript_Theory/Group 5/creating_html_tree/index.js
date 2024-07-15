
const root = document.createElement("html")
root.lang = "en";

const head = document.createElement("head")
const title = document.createElement("title")
title.innerText = "hii"
head.appendChild(title)

const body = document.createElement("body")
const header = document.createElement("h1");
header.appendChild(document.createTextNode("welcome"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);


root.appendChild(head)
root.appendChild(body)
