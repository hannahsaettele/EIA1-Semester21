window.addEventListener ('load', function() {
    document.querySelector("").addEventListener('click', )
});
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
var world = europa18 + afrika18 + südamerika18 + nordamerika18 + asien18 + australien18;
var cEuropa: string = "Europa";
var cAfrika: string = "Afrika";
var cSüdAmerika: string ="Südamerika";
var cNordAmerika: string = "Nordamerika";
var cAsien: string = "Asien";
var cAustralien: string = "Australien";

window.addEventListener('load', function () {

    document.querySelector('.europe').addEventListener('click', function () { emissions(cEuropa, europa18, europa08) });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(cNordAmerika, nordAmerika18, nordAmerika08) });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(cSüdAmerika, südAmerika18, südAmerika08) });
    document.querySelector('.africa').addEventListener('click', function () { emissions(cAfrika, afrika18, afrika08) });
    document.querySelector('.asia').addEventListener('click', function () { emissions(cAsien, asien18, asien08) });
    document.querySelector('.australia').addEventListener('click', function () { emissions(cAustralien, australien18, australien08) });

    function emissions (continent: string, continent2018: number, continent2008: number) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#subtitleRegion").innerHTML = continent;
        document.querySelector("#c2018").innerHTML = continent2018.toString();
        document.querySelector("#cRelative").innerHTML = Math.round(continent2018 / world * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateRel").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateAbs").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continent2018 / world * 100 + '%');
        document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in ";
    };
});