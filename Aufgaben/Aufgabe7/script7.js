window.addEventListener("load", function () {
    function playSample(samples) {
        var sound = new Audio('L07_A.mp3');
        sound.play();
    }
    ;
    document.querySelector("#kick").addEventListener("mousedown", function () { playSample("L07_kick.mp3"); });
    document.querySelector("#snare").addEventListener("mousedown", function () { playSample("L07_snare.mp3"); });
    document.querySelector("#hithat").addEventListener("mousedown", function () { playSample("L07_hihat.mp3"); });
    document.querySelector("#noteA").addEventListener("mousedown", function () { playSample("L07_A.mp3"); });
    document.querySelector("#noteC").addEventListener("mousedown", function () { playSample("L07_C.mp3"); });
    document.querySelector("#noteF").addEventListener("mousedown", function () { playSample("L07_F.mp3"); });
    document.querySelector("#noteG").addEventListener("mousedown", function () { playSample("L07_G.mp3"); });
    document.querySelector("#laugh1").addEventListener("mousedown", function () { playSample("L07_laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("mousedown", function () { playSample("L07_laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", play);
});
function playSample() {
}
function play() {
}
//# sourceMappingURL=script7.js.map