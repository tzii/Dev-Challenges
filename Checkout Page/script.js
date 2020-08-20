window.onload = () => {
    fetch("./country.json")
        .then((result) => result.json())
        .then((res) => setCountry(res));
    Array.from(document.getElementsByClassName("count-border")).forEach(
        (count) => {
            let minus = count.children[0];
            let number = count.children[1];
            let plus = count.children[2];
            minus.addEventListener("click", () => {
                if (number.innerHTML == 0) return;
                number.innerHTML -= 1;
                updateTotal();
            });
            plus.addEventListener("click", () => {
                number.innerHTML = Number(number.innerHTML) + 1;
                updateTotal();
            });
        }
    );
    // select country
    document
        .getElementsByClassName("country")[0]
        .children[2].addEventListener("click", () => {
            document
                .getElementsByClassName("country")[0]
                .classList.toggle("show");
        });
    document
        .getElementsByClassName("country")[0]
        .children[3].addEventListener("click", () => {
            document
                .getElementsByClassName("country")[0]
                .classList.toggle("show");
        });
    document
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
            e.preventDefault();
            if (checkInput()) showSuccess();
        });
};
function updateTotal() {
    cout = document.getElementsByClassName("count-border");
    document.getElementsByClassName("total")[0].lastElementChild.innerHTML =
        "$" +
        (
            cout[0].children[1].innerHTML * 54.99 +
            cout[1].children[1].innerHTML * 74.99 +
            19
        ).toFixed(2);
}
function setCountry(data) {
    let options = "";
    data.country.forEach((country) => {
        options += `<div class="option">${country}</div>`;
    });
    document.getElementsByClassName("select-country")[0].innerHTML = options;
    Array.from(document.getElementsByClassName("option")).forEach((option) => {
        option.addEventListener("click", () => {
            document.getElementsByClassName("country")[0].children[3].value =
                option.innerHTML;
            document
                .getElementsByClassName("country")[0]
                .classList.remove("show");
            Array.from(
                document.getElementsByClassName("option")
            ).forEach((op) => op.classList.remove("selected"));
            option.classList.add("selected");
        });
    });
}
function checkInput() {
    // check e-mail
    let infor = document.getElementsByClassName("contact-infor")[0];
    let email = infor.children[1].children[2];
    console.log(email.value);
    if (email.value == "") return false;
    return true;
}
function showSuccess() {
    alert("Success");
}
