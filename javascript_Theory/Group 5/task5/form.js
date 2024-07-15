//   *
//   *
// *****
//   *
//   *

// let num = 9;

// for (let i = 0; i < num; i++) {
//   for (let j = num; j > 0; j--) {
//     if (j == Math.ceil(num / 2) || i == Math.floor(num / 2)) {
//       document.write("*&nbsp;&nbsp;");
//     } else{
//       document.write("&nbsp;&nbsp;&nbsp;&nbsp;");}
//   }
//   document.write("</br>");
// }

function validateForm() {
    event.preventDefault()
    let x = document.getElementById("name").value;
    if (x == "") {
        document.getElementById("error-name").innerText = "Name must be filled out";
    } else{
        document.getElementById("error-name").innerText = "";
    }

    
    let y = document.getElementById("email").value;

    if (y == "") {
        document.getElementById("error-email").innerText = "Email required"
    }else{
         document.getElementById("error-email").innerText = ""
    }


}

