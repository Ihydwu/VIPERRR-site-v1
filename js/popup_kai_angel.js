const kaiangel = document.querySelector(".KaiAngel_form").addEventListener("click", function() {
    $(".overlayKA").fadeIn();
    $(".popup_Kai_Angel").fadeIn();
});
const ka1 = document.querySelector(".close_Kai_Angel").addEventListener("click", function() {
    $(".overlayKA").fadeOut();
    $(".popup_Kai_Angel").fadeOut();
});
const ka2 = document.querySelector(".overlayKA").addEventListener("click", function() {
    $(".overlayKA").fadeOut();
    $(".popup_Kai_Angel").fadeOut();
});