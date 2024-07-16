let data = JSON.parse(localStorage.getItem("questions"));
let currntQuetion = 1;
let score = 0;
let isSubmitted = false;

function showData() {
    try {
        let qution_div = document.querySelector(".quetion");
        qution_div = "";
        data.map((value) => {
            if (value.id == currntQuetion) {
                qution_div += `<div>
                    <p>${value.question}</p>
                    <div>
                        <input type="radio" name="radio" id="" value="${value.options[0]}"/>
                        <label>${value.options[0]}</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="" value="${value.options[1]}"/>
                        <label>${value.options[1]}</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="" value ="${value.options[2]}"/>
                        <label>${value.options[2]}</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="" value = "${value.options[3]}"/>
                        <label>${value.options[3]}</label>
                    </div>
                    <button onclick="answerSubmit(${value.id})" style="width:80px" id="submit">Submit</button>
                </div>`;
            }
            if (currntQuetion <= 15) {
                document.querySelector(
                    ".currentQuetion"
                ).textContent = `Currnt Quetion :${currntQuetion}/15`;
            } else {
                // document.querySelector(".quetion").setAttribute("display","none")
                document
                    .querySelector(".currentQuetion")
                    .setAttribute("display", "none");
                document.querySelector(
                    ".FinalScore"
                ).textContent = `FinalScore : ${score}`;
                document.querySelector("#next-btn").textContent = "End";
            }
        });

        document.querySelector(".quetion").innerHTML = qution_div;
    } catch (error) {
        console.log(error);
    }
}

function answerSubmit(id) {
    try {
        if (isSubmitted) {
            return;
        }

        const selectedRadio = document.querySelector(
            'input[name="radio"]:checked'
        );
        const answerData = data.filter((value) => value.id === id);
        if (selectedRadio) {
            const selectedAnswer = selectedRadio.value;
            console.log("answer :", selectedAnswer);
            console.log("data :", answerData[0].correct);
            console.log("-");
            if (
                answerData[0].correct === selectedAnswer &&
                currntQuetion <= 15
            ) {
                score = score + 1;
            }
            document.querySelector("#next-btn").removeAttribute("disabled");
            document.querySelector(".error-tag").textContent = ``;
            isSubmitted = true;
            document.querySelector("#submit").setAttribute("disabled", "");
        } else {
            console.log("No answer selected");
            document.querySelector(
                ".error-tag"
            ).textContent = `One answer will must be selected`;
        }
        if (currntQuetion <= 15) {
            currntQuetion = currntQuetion + 1;
            isSubmitted = false;

            document.querySelector("#next-btn").textContent = "Next";
            document.querySelector("#next-btn").removeAttribute("disabled", "");
        } else {
        }
    } catch (error) {
        console.log(error);
    }
}
