var europa18: number = 4209.3;
var europa08: number = 4965.7;
var afrika18: number = 1235.5;
var afrika08: number = 1028;
var südAmerika18: number = 1261.5;
var südAmerika08: number = 1132.6;
var nordAmerika18: number = 6035.6;
var nordAmerika08: number = 6600.4;
var asien18: number = 16274.1;
var asien08: number = 12954.7;
var australien18: number = 1993;
var australien08: number = 2100.5;
var world = europa18 + afrika18 + südAmerika18 + nordAmerika18 + asien18 + australien18;
var continentEuropa: string = "Europa";
var continentAfrika: string = "Afrika";
var continentSüdAmerika: string ="Südamerika";
var continentNordAmerika: string = "Nordamerika";
var continentAsien: string = "Asien";
var continentAustralien: string = "Australien";

window.addEventListener('load',function (): void {

    document.querySelector('.europe').addEventListener('click', function () { emissions(continentEuropa, europa18, europa08) });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(continentNordAmerika, nordAmerika18, nordAmerika08) });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(continentSüdAmerika, südAmerika18, südAmerika08) });
    document.querySelector('.africa').addEventListener('click', function () { emissions(continentAfrika, afrika18, afrika08) });
    document.querySelector('.asia').addEventListener('click', function () { emissions(continentAsien, asien18, asien08) });
    document.querySelector('.australia').addEventListener('click', function () { emissions(continentAustralien, australien18, australien08) });

    function emissions (continent: string, continent18: number, continent08: number) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#subtitleRegion").innerHTML = continent;
        document.querySelector("#continent2018").innerHTML = continent18.toString();
        document.querySelector("#cRelative").innerHTML = Math.round(continent18 / world * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateRel").innerHTML = Math.round((continent18 - continent08) / continent08 * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateAbs").innerHTML = (Math.round((continent18 - continent08) * 100) / 100).toString();
        document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continent18 / world * 100 + '%');
        document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in ";
    };
});