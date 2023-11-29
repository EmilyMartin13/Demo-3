var dog = $("#Doggo");
var cat = $("#Cat");
var meow = document.getElementById("meow");
var bark = document.getElementById("bark");
var plant = $("#Plant");
var dogColors = ["#020887", "#647AA3", "#15B2C2", "#C6EBBE", "#9AD4DG"];
var catColors = ["#00A676", "#276FBF", "#F2C94C", "#F2994A", "#EB5757"];

var quotes = ["home sweet home", "your mom", "home is where the heart is",
    "don't worry be happy", "don't talk to me before I have my coffee"];

var lll = ["live", "laugh", "love"];

dog.hide();
cat.hide();



$("#Chair-seat").on("click", function () {
    dog.fadeToggle(800);

});

$("#Chair").on("click", function () {
    cat.fadeToggle(800);
});

var counter = 0;
dog.on("click", function () {
    // bark.play();
    $("#Doggo .cls-8").css("fill", dogColors[counter])
    counter++;
    if (counter == dogColors.length) {
        counter = 0;
    }
});

cat.on("click", function () {
    //meow.play();
    var num = Math.floor(Math.random() * 6);
    console.log(num)
    $("#Cat .cls-8").css("fill", catColors[counter])
    counter++;
    if (counter == catColors.length) {
        counter = 0;
    }
});

$(document).on("keypress", function (e) {
    //   console.log(e.key);
    if (e.key == " ") {
        console.log("tip plant over")
        plant.css("transform", "rotate(90deg)");

    } else if (e.key == 'q') {
        var num = Math.floor(Math.random() * quotes.length + 1);
        $("#quotes").text(quotes[num]);

    }
});

// } else if (e.key == 'l') {
//     var num = Math.floor(Math.random() * 2);
//     $("#lll").html(quotes[counter]);
//     counter++;
//     if (counter == lll.length) {
//         counter = 0;
//     }
// });



