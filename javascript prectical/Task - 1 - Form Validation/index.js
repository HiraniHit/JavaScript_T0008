const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const validateName = () => {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;

    let errorEle = document.getElementById("nameError");
    let successEle = document.getElementById("nameSuccess");

    if (nameValue.length < 3) {
        errorEle.textContent = "Name must be at least 3 characters long";
        successEle.textContent = "";
    } else if (!nameRegex.test(nameValue)) {
        errorEle.textContent =
            "Name Must not contain numbers or special characters";
        successEle.textContent = "";
    } else {
        errorEle.textContent = "";
        successEle.textContent = "Valid";

        return true;
    }
    return false;
};

const validateEmail = () => {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let errorEle = document.getElementById("emailError");
    let successEle = document.getElementById("emailSuccess");

    if (!emailRegex.test(emailValue)) {
        errorEle.textContent = "Email is required in there format";
        successEle.textContent = "";
    } else {
        errorEle.textContent = "";
        successEle.textContent = "Valid";

        return true;
    }
    return false;
};

const validatePassword = () => {
    const passwordValue = passwordInput.value.trim();
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let errorEle = document.getElementById("passwordError");
    let successEle = document.getElementById("passwordSuccess");

    if (!passwordRegex.test(passwordValue)) {
        errorEle.textContent =
            "Must include at least one uppercase letter, one lowercase letter, one number, and one special character";
        successEle.textContent = "";
    } else {
        errorEle.textContent = "";
        successEle.textContent = "Valid";

        return true;
    }
    return false;
};

const validateConfirmPassword = () => {
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    let errorEle = document.getElementById("confirmPasswordError");
    let successEle = document.getElementById("confirmPasswordSuccess");

    if (confirmPasswordValue !== passwordInput.value) {
        errorEle.textContent = "Password is not matched";
        successEle.textContent = "";
    } else if (confirmPasswordValue == "") {
        errorEle.textContent = "confirm password is required";
        successEle.textContent = "";
    } else {
        errorEle.textContent = "";
        successEle.textContent = "Valid";

        return true;
    }
    return false;
};

const validForm = () => {
    event.preventDefault();

    let validName = validateName();
    let validEmail = validateEmail();
    let validPassword = validatePassword();
    let validConformPassword = validateConfirmPassword();

    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConformPassword
    );

    validName && validEmail && validPassword && validConformPassword
        ? (submitBtn.innerText = "submit")
        : (submitBtn.innerText = "disabled");

    if (!submitBtn.disabled) {
        let obj = {
            name: nameInput.value,
            email: emailInput.value,
            password: confirmPasswordInput.value,
        };
        console.log(obj);
    }
};

nameInput.addEventListener("input", validForm);
emailInput.addEventListener("input", validForm);
passwordInput.addEventListener("input", validForm);
confirmPasswordInput.addEventListener("input", validForm);
