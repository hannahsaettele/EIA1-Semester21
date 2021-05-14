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
    document.querySelector("#playbutton").addEventListener("click", Play);

    document.getElementById("trashbutton").addEventListener("mousedown", deleteBeat);
    document.getElementById("randombutton").addEventListener("mousedown", generateBeat);
    playButton = document.getElementById("playbutton");
});

var playButton: HTMLElement;

const sounds: string[] = ["L07_kick.mp3", "L07_hihat.mp3", "L07_snare.mp3", "L07_A.mp3", "L07_C.mp3", "L07_F.mp3", "L07_G.mp3", "L07_laugh-1.mp3", "L07_laugh-2.mp3"];

var beat: string[] = ["L07_kick.mp3", "L07_hihat.mp3", "L07_snare.mp3", "L07_hihat.mp3"];

var isPlaying: boolean = false;

var intervallIndex: number;

var currentIndex: number = 0;

function playSample(samples: string): void {
    var sound: HTMLAudioElement = new Audio(samples);
    sound.play();
}

function generateBeat(): void {
    deleteBeat();
    for (let i = 0; i < 7; i++) {
        var random: number = Math.floor(Math.random() * 9);
        var sound: string = sounds[random];
        beat.push(sound);
    }
}

function party(): void {
    playSample(beat[currentIndex]);
    currentIndex = currentIndex + 1;
    if (currentIndex >= beat.length) {
        currentIndex = 0;
    }
}

function deleteBeat(): void {
    beat = [];
}

function Play(): void {
    if (isPlaying == false) {
        isPlaying = true;
        playButton.className = "fas fa-stop";
        intervallIndex = setInterval(party, 300);
    } else if (isPlaying == true) {
        isPlaying = false;
        playButton.className = "fas fa-play";
        clearInterval(intervallIndex);
    }
}

