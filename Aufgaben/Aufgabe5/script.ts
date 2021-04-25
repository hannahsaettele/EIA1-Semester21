var africa: string = "Afrika";
var southamerica: string ="Südamerika";
var europe: string = "Europa";
var northamerica: string = "Nordamerika";
var asia: string = "Asien";
var australia: string = "Australien";

var africa2008: number = 1028;
var southamerica2008: number = 1132.6;
var europe2008: number = 4965.7;
var northamerica2008: number = 6600.4;
var asia2008: number = 12954.7;
var australia2008: number = 1993;

var africa2018: number = 1235.5;
var southamerica2018: number = 1261.5;
var europe2018: number = 4209.3;
var northamerica2018: number = 6035.6;
var asia2018: number = 16274.2;
var australia2018: number = 2100.5;

var entire2018: number = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018; 

console.log("Die Emission von " + africa + " ist: " + africa2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + africa + " damit " + Math.round(africa2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((africa2018-africa2008)/africa2008*100 * 100) / 100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (africa2018-africa2008) + "kg CO2");

console.log("Die Emission von " + southamerica + " ist: " + southamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + southamerica + " damit " + Math.round(southamerica2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((southamerica2018-southamerica2008)/southamerica2008*100 * 100) / 100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((southamerica2018-southamerica2008) * 100) / 100 + "kg CO2");

console.log("Die Emission von " + europe + " ist: " + europe2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + europe + " damit " + Math.round(europe2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ Math.round((europe2018-europe2008)/europe2008*100 * 100) / 100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((europe2018-europe2008) * 100) / 100 + "kg CO2")

console.log("Die Emission von " + northamerica + " ist: " + northamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + northamerica + " damit " + Math.round(northamerica2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((northamerica2018-northamerica2008)/northamerica2008*100 * 100) / 100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((northamerica2018-northamerica2008) * 100) / 100 + "kg CO2")

console.log("Die Emission von " + asia + " ist: " + asia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + asia + " damit " + Math.round(asia2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((asia2018-asia2008)/asia2008*100 * 100) / 100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (asia2018-asia2008) + "kg CO2")

console.log("Die Emission von " + australia + " ist: " + australia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + australia + " damit " + Math.round(australia2018/entire2018*100 * 100) / 100 + "%");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((australia2018-australia2008)/australia2008*100 * 100) / 100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (australia2018-australia2008) + "kg CO2")
