window.onload = () => {
    document
        .getElementsByClassName("navbar-toggler")[0]
        .addEventListener("click", () => {
            document
                .getElementsByClassName("navbar-toggler")[0]
                .classList.toggle("collapsed");
            document
                .getElementsByClassName("navbar-collapse")[0]
                .classList.toggle("show");
        });
};
