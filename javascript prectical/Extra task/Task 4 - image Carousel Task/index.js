let images = [
    "./img/31.jpg",
    "./img/32.jpg",
    "./img/33.jpg",
    "./img/34.jpg",
    "./img/35.jpg",
];

let carouselImage = document.querySelector(".carousel-image");
let currentIndex = 0;

function changeImage(index) {
    currentIndex += index;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    carouselImage.src = images[currentIndex];
}

setInterval(() => changeImage(1), 5000);

let nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => {
    changeImage(1);
});
let preBtn = document.querySelector(".pre-btn");
preBtn.addEventListener("click", () => {
    changeImage(-1);
});
