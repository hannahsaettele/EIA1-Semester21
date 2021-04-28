window.addEventListener ('load', function() {
    document.querySelector("").addEventListener('click', )
});
var europa18: number = 4209.3;
var europa08: number = 4965.7;
var afrika18: number = 1235.5;
var afrika08: number = 1028;
var südamerika18: number = 1261.5;
var südamerika08: number = 1132.6;
var nordamerika18: number = 6035.6;
var nordamerika08: number = 6600.4;
var asien18: number = 16274.1;
var asien08: number = 12954.7;
var australien18: number = 1993;
var australien08: number = 2100.5;

var world = europa18 + afrika18 + südamerika18 + nordamerika18 + asien18 + australien18;
var relativeuropa = Math.round(europa18 / world * 100 * 100) / 100;
var relativafrika =  Math.round(afrika18 / world * 100 * 100) / 100;
var relativsüdamerika = Math.round(südamerika18 / world * 100 * 100) / 100;
var relativnordamerika = Math.round(nordamerika18 / world * 100 * 100) / 100;
var relativasien = Math.round(asien18 / world * 100 * 100) / 100;
var relativaustralien = Math.round(australien18 / world * 100 * 100) / 100;

var differenzeuropa = Math.round((europa18 - europa08) / europa08 * 100 * 100) / 100;
var differenzafrika = Math.round((afrika18 - afrika08) / afrika08 * 100 * 100) / 100;
var differenzsüdamerika = Math.round((südamerika18 - südamerika08) / südamerika08 * 100 * 100) / 100;
var differenznordamerika = Math.round((nordamerika18 - nordamerika08) / nordamerika08 * 100 * 100) / 100;
var differenzasien = Math.round((asien18 - asien08) / asien08 * 100 * 100) / 100;
var differenzaustralien = Math.round((australien18 - australien08) / australien08 * 100 * 100) / 100;

var emissioneuropa = Math.round(europa18 - europa08 * 100) / 100;
var emissionafrika = Math.round(afrika18 - afrika08 * 100) / 100;
var emissionsüdamerika = Math.round(südamerika18 - südamerika08 * 100) / 100;
var emissionnordamerika = Math.round(nordamerika18 - nordamerika08 * 100) / 100; 
var emissionasien = Math.round(asien18 - asien08 * 100) / 100;
var emissionaustralien = Math.round(australien18 - australien08 * 100) / 100;

function continent(continentName: string, continentValue2008: number, continentValue2018: number){
    continentValue



    document.querySelector("#titleregion").innerHTML;

}

document.querySelector('.europa').addEventListener('click', function () )
document.querySelector('.afrika').addEventListener('click', function () )
document.querySelector('.südamerika').addEventListener('click', function () )
document.querySelector('.nordamerika').addEventListener('click', function () )
document.querySelector('.asien').addEventListener('click', function () )
document.querySelector('.australien').addEventListener('click', function () )