var europa18 = 4209.3;
var europa08 = 4965.7;
var afrika18 = 1235.5;
var afrika08 = 1028;
var südAmerika18 = 1261.5;
var südAmerika08 = 1132.6;
var nordAmerika18 = 6035.6;
var nordAmerika08 = 6600.4;
var asien18 = 16274.1;
var asien08 = 12954.7;
var australien18 = 1993;
var australien08 = 2100.5;
var world = europa18 + afrika18 + südamerika18 + nordamerika18 + asien18 + australien18;
var cEuropa = "Europa";
var cAfrika = "Afrika";
var cSüdAmerika = "Südamerika";
var cNordAmerika = "Nordamerika";
var cAsien = "Asien";
var cAustralien = "Australien";
window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', function () { emissions(cEuropa, europa18, europa08); });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(cNordAmerika, nordAmerika18, nordAmerika08); });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(cSüdAmerika, südAmerika18, südAmerika08); });
    document.querySelector('.africa').addEventListener('click', function () { emissions(cAfrika, afrika18, afrika08); });
    document.querySelector('.asia').addEventListener('click', function () { emissions(cAsien, asien18, asien08); });
    document.querySelector('.australia').addEventListener('click', function () { emissions(cAustralien, australien18, australien08); });
    function emissions(continent, continent2018, continent2008) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#subtitleRegion").innerHTML = continent;
        document.querySelector("#c2018").innerHTML = continent2018.toString();
        document.querySelector("#cRelative").innerHTML = Math.round(continent2018 / world * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateRel").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        document.querySelector("#cGrowthRateAbs").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continent2018 / world * 100 + '%');
        document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in ";
    }
    ;
});
//# sourceMappingURL=script6.js.map