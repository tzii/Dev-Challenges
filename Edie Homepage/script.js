$(document).ready(function () {
    $(".collapse-btn").click(() => {
        $(".collapse-nav").toggleClass("collapsed");
    });
    $(".collapse-nav a").click(() => {
        $(".collapse-nav").addClass("collapsed");
    });
});
