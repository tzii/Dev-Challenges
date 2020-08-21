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
    //check phone input
    // document.getElementsByClassName("phone")[0].children[2].onkeypress = (
    //     e
    // ) => {
    //     e = e ? e : window.event;
    //     var charCode = e.which ? e.which : e.keyCode;
    //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //         return false;
    //     }
    //     return true;
    // };

    //check postal code input
    document.getElementsByClassName("postal-code")[0].children[2].onkeypress = (
        e
    ) => {
        e = e ? e : window.event;
        var charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    // submid btn
    document
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
            e.preventDefault();
            if (checkInput()) showSuccess();
        });
    // OK btn
    document.getElementsByClassName("ok-btn")[0].onclick = (e) => {
        e.preventDefault();
        document.getElementsByClassName("alert")[0].classList.remove("show");
    };
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
    if (email.value == "") {
        document.documentElement.style.setProperty(
            "--invalid-email",
            '"Please enter an email address."'
        );
        infor.children[1].classList.add("invalid");
        return false;
    }
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
        document.documentElement.style.setProperty(
            "--invalid-email",
            '"Email is invalid."'
        );
        infor.children[1].classList.add("invalid");
        return false;
    }
    infor.children[1].classList.remove("invalid");
    //check phone
    let phone = infor.children[2].children[2];
    if (phone.value == "") {
        infor.children[2].classList.add("invalid");
        return false;
    }
    infor.children[2].classList.remove("invalid");
    // check name
    let adr = document.getElementsByClassName("shipping-address")[0];
    let name = adr.children[1].children[2];
    if (name.value == "") {
        adr.children[1].classList.add("invalid");
        return false;
    }
    adr.children[1].classList.remove("invalid");
    // check address
    let address = adr.children[2].children[2];
    if (address.value == "") {
        adr.children[2].classList.add("invalid");
        return false;
    }
    adr.children[2].classList.remove("invalid");
    // check city
    let city = adr.children[3].children[2];
    if (city.value == "") {
        adr.children[3].classList.add("invalid");
        return false;
    }
    adr.children[3].classList.remove("invalid");
    // check country
    if (
        document
            .getElementsByClassName("select-country")[0]
            .getElementsByClassName("selected").length == 0
    ) {
        adr.children[4].classList.add("invalid");
        return false;
    }
    adr.children[4].classList.remove("invalid");
    // check postal code
    let pcode = adr.children[5].children[2];
    if (pcode.value == "") {
        adr.children[5].classList.add("invalid");
        return false;
    }
    adr.children[5].classList.remove("invalid");
    return true;
}
function showSuccess() {
    document.getElementsByClassName("alert")[0].classList.add("show");
}
