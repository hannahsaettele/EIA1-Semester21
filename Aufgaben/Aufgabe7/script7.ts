
function playSample(samples: string): void {
    var sound: HTMLAudioElement = new Audio('sample'); sound.play();
};

document.querySelector("#kick").addEventListener("mousedown", function (): void { playSample("L07_kick.mp3"); });
document.querySelector("#snare").addEventListener("mousedown", function () { playSample("L07_snare.mp3"); });
document.querySelector("#hithat").addEventListener("mousedown", function () { playSample("L07_hihat.mp3"); });
document.querySelector("#noteA").addEventListener("mousedown", function () { playSample("L07_A.mp3"); });
document.querySelector("#noteC").addEventListener("mousedown", function () { playSample("L07_C.mp3"); });
document.querySelector("#noteF").addEventListener("mousedown", function () { playSample("L07_F.mp3"); });
document.querySelector("#noteG").addEventListener("mousedown", function () { playSample("L07_G.mp3"); });
document.querySelector("#laugh1").addEventListener("mousedown", function () { playSample("L07_laugh-1.mp3"); });
document.querySelector("#laugh2").addEventListener("mousedown", function () { playSample("L07_laugh-2.mp3"); });

document.querySelector("#play").addEventListener("click", function (){play()}); 

function play() {

}
