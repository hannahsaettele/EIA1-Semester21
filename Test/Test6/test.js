var africa2008 = 1.01;
var southAmerica2008 = 1.13;
var europe2008 = 4.97;
var northAmerica2008 = 6.60;
var asia2008 = 12.95;
var australia2008 = 1.99;
var africa2018 = 1.24;
var southAmerica2018 = 1.26;
var europe2018 = 4.21;
var northAmerica2018 = 6.04;
var asia2018 = 12.27;
var australia2018 = 2.10;
var world2018 = (africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018);
var relativeAfrica = Math.round(africa2018 / world2018 * 100 * 100) / 100;
var relativeSouthA = Math.round(southAmerica2018 / world2018 * 100 * 100) / 100;
var relativeEurope = Math.round(europe2018 / world2018 * 100 * 100) / 100;
var relativeNorthA = Math.round(northAmerica2018 / world2018 * 100 * 100) / 100;
var relativeAsia = Math.round(asia2018 / world2018 * 100 * 100) / 100;
var relativeAustralia = Math.round(australia2018 / world2018 * 100 * 100) / 100;
var growthAfrica = Math.round((africa2018 - africa2008) / africa2008 * 100 * 100) / 100;
var growthSouthA = Math.round((southAmerica2018 - southAmerica2008) / southAmerica2008 * 100 * 100) / 100;
var growthEurope = Math.round((europe2018 - europe2008) / europe2008 * 100 * 100) / 100;
var growthNorthA = Math.round((northAmerica2018 - northAmerica2008) / northAmerica2008 * 100 * 100) / 100;
var growthAsia = Math.round((asia2018 - asia2008) / asia2008 * 100 * 100) / 100;
var growthAustralia = Math.round((australia2018 - australia2008) / australia2008 * 100 * 100) / 100;
var absoluteAfrica = Math.round(africa2018 - africa2008 * 100) / 100;
var absoulteSouthA = Math.round(southAmerica2018 - southAmerica2008 * 100) / 100;
var absoluteEurope = Math.round(europe2018 - europe2008 * 100) / 100;
var absoluteNorthA = Math.round(northAmerica2018 - northAmerica2008 * 100) / 100;
var absoulteAsia = Math.round(asia2018 - asia2008 * 100) / 100;
var absoluteAustralia = Math.round(australia2018 - australia2008 * 100) / 100;
console.log("Die Emission von Afrika ist:" + africa2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afirka damit" + relativeAfrica + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAfrica + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoluteAfrica + "kg CO2");
console.log("Die Emission von Südamerika ist:" + southAmerica2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit" + relativeSouthA + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthSouthA + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoulteSouthA + "kg CO2");
console.log("Die Emission von Europa ist:" + europe2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit" + relativeEurope + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + growthEurope + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoluteEurope + "kg CO2");
console.log("Die Emission von Nordamerika ist:" + northAmerica2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit" + relativeNorthA + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthNorthA + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoluteNorthA + "kg CO2");
console.log("Die Emission von Asien ist:" + asia2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit" + relativeAsia + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAsia + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoulteAsia + "kg CO2");
console.log("Die Emission von Australien ist:" + australia2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit" + relativeAustralia + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAustralia + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + absoluteAustralia + "kg CO2");
//# sourceMappingURL=test.js.map