window.addEventListener("load", function () {
    document.querySelector(".kick").addEventListener("click", function () { beats("L07_kick.mp3"); });
    document.querySelector(".hithat").addEventListener("click", function () { beats("L07_hihat.mp3"); });
    document.querySelector(".snare").addEventListener("click", function () { beats("L07_snare.mp3"); });
    document.querySelector(".noteA").addEventListener("click", function () { beats("L07_A.mp3"); });
    document.querySelector(".noteC").addEventListener("click", function () { beats("L07_C.mp3"); });
    document.querySelector(".noteF").addEventListener("click", function () { beats("L07_F.mp3"); });
    document.querySelector(".noteG").addEventListener("click", function () { beats("L07_G.mp3"); });
    document.querySelector(".laugh1").addEventListener("click", function () { beats("L07_laugh-1.mp3"); });
    document.querySelector(".laugh2").addEventListener("click", function () { beats("L07_laugh-2.mp3"); });
    function beats(music) {
        var sound = new Audio(music);
        sound.play();
    }
    ;
    var sounds = [new Audio("L07_kick.mp3"), new Audio("L07_hihat.mp3"), new Audio("L07_snare.mp3"), new Audio("L07_A.mp3"), new Audio("L07_C.mp3"), new Audio("L07_F.mp3"), new Audio("L07_G.mp3"), new Audio("L07_laugh-1.mp3"), new Audio("L07_laugh-2.mp3")];
    function intervall() {
        setTimeout(function () {
            sounds[0].play();
        }, 500);
        setTimeout(function () {
            sounds[1].play();
        }, 1000);
        setTimeout(function () {
            sounds[2].play();
        }, 1500);
        setTimeout(function () {
            sounds[1].play();
        }, 2000);
        setTimeout(function () {
            sounds[0].play();
        }, 2500);
        setTimeout(function () {
            sounds[1].play();
        }, 3000);
        setTimeout(function () {
            sounds[2].play();
        }, 3500);
        setTimeout(function () {
            sounds[1].play();
        }, 4000);
    }
    ;
    document.querySelector(".play").addEventListener("click", function () {
        intervall();
    });
    function keyBoard(event) {
        var keys = event.keyBoard;
        if (keys == 49) {
            beats("L07_kick.mp3");
        }
        ;
    }
    ;
});
//# sourceMappingURL=script7.js.map