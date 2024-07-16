function buildForm() {
    try {
        let form = document.querySelector("#form");
        let labelData = document.querySelector("#label").value;
        let inputData = document.getElementById("input").value;
        let input_div = document.createElement("div");
        input_div = "";

        if (labelData !== "" && inputData !== "") {
            input_div += `<div>
                <label>${labelData} :</label>
                <input type ="${inputData}" name="${inputData}" required/>
            </div>`;
            console.log(input_div);
        }
        form.innerHTML += input_div;

        document.querySelector("#label").value = "";
        document.getElementById("input").value = "";
    } catch (error) {
        document.querySelector(".error-box").textContent = error;
        document.querySelector(".container").classList.toggle("hide");
        console.warn(error);
    }
}

function buildDynamicForm() {
    const num = parseInt(
        prompt("How many form elements do you want to create?")
    );
    let form = document.querySelector("#form");
    form = "";

    for (let i = 0; i < num; i++) {
        const formType = prompt(`Enter the type for element ${i + 1} `);
        const label = prompt(`Enter the label for element ${i + 1}:`);
        console.log(formType);
        console.log(label);

        switch (formType) {
            case "text":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}"  placeholder="${formType}" required/>
            </div>`;
                break;

            case "checkbox":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
            </div>`;
                break;

            case "radio":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
            </div>`;
                break;

            case "select":
                form += `<div>
                <label>${label} :</label>
                <${formType} name="${formType}" id="${formType}" form="${formType}">
                    <option value="${label} + 1">${label} + 1</option>
                    <option value="${label} + 2">${label} + 2</option>
                    <option value="${label} + 3">${label} + 3</option>
                    <option value="${label} + 4">${label} + 4</option>
                </${formType}>
                </div>`;
                break;

            case "number":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "color":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "button":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "date":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "email":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "file":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "datetime-local":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "file":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "hidden":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "image":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "month":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "password":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "range":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "reset":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "search":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "submit":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "tel":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "text":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "time":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "url":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            case "week":
                form += `<div>
                <label>${label} :</label>
                <input type ="${formType}" name="${formType}" placeholder="${formType}" required/>
                </div>`;
                break;

            default:
                document.querySelector(".error-box").textContent =
                    "Enter Valid Input Type";
        }
    }
    document.querySelector("#form").innerHTML += form;
}
function data() {}
