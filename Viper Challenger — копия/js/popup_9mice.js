const nineMice_summon_popup = document.querySelector(".nineMice_form").addEventListener("click", function() {
    // console.log("Ты нажал на 9mice")
    $(".overlay").fadeIn();
    $(".popup").fadeIn();
});
// $(".close, .overlay").click(function() {
//   $(".overlay").fadeOut();
//   $(".popup").fadeOut();
// });
const e = document.querySelector(".close").addEventListener("click", function(){
    $(".overlay").fadeOut();
    $(".popup").fadeOut();
});
const e1 = document.querySelector(".overlay").addEventListener("click", function(){
    $(".overlay").fadeOut();
    $(".popup").fadeOut();
});