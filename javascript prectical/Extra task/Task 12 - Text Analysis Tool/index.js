function getInfoOfString() {
    let input = document.querySelector("#input");
    let info_div = document.querySelector(".info");

    let str = input.value;

    let length = str.length;
    let word = str.split(" ").length;

    let frequencyCount = {};

    str.split("").forEach((element) => {
        frequencyCount[element] = (frequencyCount[element] || 0) + 1;
    });

    let maxValue = Math.max(...Object.values(frequencyCount));
    let mostRepeated = Object.keys(frequencyCount).filter(
        (key) => frequencyCount[key] === maxValue
    );

    let div_ele = document.createElement("p");
    div_ele.innerHTML = `Word : ${word}`;
    div_ele.style.padding = "10px 0 0 0";
    info_div.appendChild(div_ele);

    let div_avg_word = document.createElement("p");
    div_avg_word.innerHTML = `Average Word Length : ${Math.floor(
        length / word
    )}`;
    info_div.appendChild(div_avg_word);

    let div_freq = document.createElement("p");
    div_freq.innerHTML = `Most Repeated Word : ${mostRepeated}`;
    div_freq.style.borderBottom = "1px solid white";
    div_freq.style.padding = "0 0 10px 0";
    info_div.appendChild(div_freq);
}
