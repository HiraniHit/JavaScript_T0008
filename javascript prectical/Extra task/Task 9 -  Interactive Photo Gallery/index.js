const photoUrlInput = document.getElementById("photoUrl");
const addPhotoBtn = document.getElementById("addPhotoBtn");
let photos = [
    "img/101.jpg",
    "img/102.jpg",
    "img/103.jpg",
    "img/104.png",
    "img/105.jpg",
    "img/106.jpg",
    "img/107.jpg",
    "img/108.jpg",
    "img/109.jpg",
    "img/110.jpg",
];
localStorage.setItem("img", JSON.stringify(photos));

function renderGallery() {
    let data = JSON.parse(localStorage.getItem("img"));
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    data.map((value, index) => {
        gallery.innerHTML += `<div>
            <img src="${value}" id="${index}" width="300" height="250" onclick="displayBigImg(${index})" alt="Opps!!!  Something is wrong"/>
            <button class="delete-btn" onclick="deleteImg(${index})">Delete</button>
        </div>`;
    });
}

function addphoto() {
    const newPhotoUrl = photoUrlInput.value.trim();
    if (newPhotoUrl) {
        let data = JSON.parse(localStorage.getItem("img"));
        data.push(newPhotoUrl);
        localStorage.setItem("img", JSON.stringify(data));
        photoUrlInput.value = "";
        renderGallery();
    }
}

function deleteImg(id) {
    let data = JSON.parse(localStorage.getItem("img"));
    data.splice(id, 1);
    localStorage.setItem("img", JSON.stringify(data));
    renderGallery();
}

function displayBigImg(index) {
    let data = JSON.parse(localStorage.getItem("img"));
    let imgSrc = data[index];

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "imgElement");
    imgElement.src = imgSrc;

    modal.onclick = () => {
        document.body.removeChild(modal);
    };

    modal.appendChild(imgElement);
    document.body.appendChild(modal);
}

renderGallery();
