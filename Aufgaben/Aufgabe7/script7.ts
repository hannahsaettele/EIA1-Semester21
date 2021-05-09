window.addEventListener("load", function (){

    document.querySelector("#Sound1").addEventListener("mousedown", function(){playSample("L07_kick.mp3");});
    document.querySelector("#Sound2").addEventListener("mousedown", function(){playSample("L07_hihat.mp3");});
    document.querySelector("#Sound3").addEventListener("mousedown", function(){playSample("L07_snare.mp3");});
    document.querySelector("#Sound4").addEventListener("mousedown", function(){playSample("L07_A.mp3");});
    document.querySelector("#Sound5").addEventListener("mousedown", function(){playSample("L07_C.mp3");});
    document.querySelector("#Sound6").addEventListener("mousedown", function(){playSample("L07_F.mp3");});
    document.querySelector("#Sound7").addEventListener("mousedown", function(){playSample("L07_G.mp3");});
    document.querySelector("#Sound8").addEventListener("mousedown", function(){playSample("L07_laugh-1.mp3");});
    document.querySelector("#Sound9").addEventListener("mousedown", function(){playSample("L07_laugh-2.mp3");});
    document.querySelector("#PlayButton").addEventListener("click", Play)});

function playSample(samples: string): void{
var sound:HTMLAudioElement = new Audio(samples);
sound.play();};


function Play () {
var Kick = setInterval(party, 300);
var Beat: string [] = ["L07_kick.mp3", "L07_hihat.mp3", "L07_snare.mp3","L07_hihat.mp3",];
var index:number = 0;
function party (){
var sequence:HTMLAudioElement = new Audio(Beat [index]);
sequence.play();
index += 1;
if (index>3) index=0;
};};