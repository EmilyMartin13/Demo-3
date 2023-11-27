var dog = $("#Doggo");
var cat = $("#Cat");
var meow = document.getElementById("meow");
var bark = document.getElementById("bark");
var plant = $("#Plant");

dog.hide();
cat.hide();

$("#Chair-seat").on("click", function () {
    dog.fadeToggle(800);

});

$("#Chair").on("click", function () {
    cat.fadeToggle(800);
});

dog.on("click", function () {
    // bark.play();
    $("#Doggo .cls-8").css("fill", "brown")
});

cat.on("click", function () {
    //meow.play();
    $("#Cat .cls-8").css("fill", "grey")
});

$(document).on("keypress", function (e) {
    //   console.log(e.key);
    if (e.key == " ") {
        console.log("tip plant over")
        plant.css("transform", "rotate(90deg)");

    }
});


