disc = document.getElementById("disc");
playing = true;
rotation = 0;

setInterval(() => {
    if (!playing) return;
    rotation = rotation > 360 ? 0 : rotation + 10;
    disc.style.transform = "Rotate(" + rotation + "deg)";
}, 10);

disc.addEventListener("mousedown", function() {
    playing = false;
});
document.addEventListener("mouseup", function() {
    playing = true;
});
