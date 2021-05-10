window.addEventListener("load", function () {
    document.querySelector("#kick").addEventListener("mousedown", function () { playSample("L07_kick.mp3"); });
    document.querySelector("#hithat").addEventListener("mousedown", function () { playSample("L07_hihat.mp3"); });
    document.querySelector("#snare").addEventListener("mousedown", function () { playSample("L07_snare.mp3"); });
    document.querySelector("#noteA").addEventListener("mousedown", function () { playSample("L07_A.mp3"); });
    document.querySelector("#noteC").addEventListener("mousedown", function () { playSample("L07_C.mp3"); });
    document.querySelector("#noteF").addEventListener("mousedown", function () { playSample("L07_F.mp3"); });
    document.querySelector("#noteG").addEventListener("mousedown", function () { playSample("L07_G.mp3"); });
    document.querySelector("#laugh1").addEventListener("mousedown", function () { playSample("L07_laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("mousedown", function () { playSample("L07_laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", Play);
});
function playSample(samples) {
    var sound = new Audio(samples);
    sound.play();
}
;
function Play() {
    var Kick = setInterval(party, 300);
    var Beat = ["L07_kick.mp3", "L07_hihat.mp3", "L07_snare.mp3", "L07_hihat.mp3",];
    var index = 0;
    function party() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index > 3)
            index = 0;
    }
    ;
}
;
//# sourceMappingURL=script7.js.map