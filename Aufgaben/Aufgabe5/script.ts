
let europa18: number = 4209.3;
let europa08: number = 4965.7;
let afrika18: number = 1235.5;
const afrika08: number = 1028;
let südamerika18: number = 1261.5;
let südamerika08: number = 1132.6;
let nordamerika18: number = 6035.6;
let nordamerika08: number = 6600.4;
let asien18: number = 16274.1;
let asien08: number = 12954.7;
let australien18: number = 1993;
let australien08: number = 2100.5;

let world = europa18 + afrika18 + südamerika18 + nordamerika18 + asien18 + australien18;
let relativeuropa = Math.round(europa18 / world * 100 * 100) / 100;
let relativafrika =  Math.round(afrika18 / world * 100 * 100) / 100;
let relativsüdamerika = Math.round(südamerika18 / world * 100 * 100) / 100;
let relativnordamerika = Math.round(nordamerika18 / world * 100 * 100) / 100;
let relativasien = Math.round(asien18 / world * 100 * 100) / 100;
let relativaustralien = Math.round(australien18 / world * 100 * 100) / 100;

let differenzeuropa = Math.round((europa18 - europa08) / europa08 * 100 * 100) / 100;
let differenzafrika = Math.round((afrika18 - afrika08) / afrika08 * 100 * 100) / 100;
let differenzsüdamerika = Math.round((südamerika18 - südamerika08) / südamerika08 * 100 * 100) / 100;
let differenznordamerika = Math.round((nordamerika18 - nordamerika08) / nordamerika08 * 100 * 100) / 100;
let differenzasien = Math.round((asien18 - asien08) / asien08 * 100 * 100) / 100;
let differenzaustralien = Math.round((australien18 - australien08) / australien08 * 100 * 100) / 100;

let emissioneuropa = Math.round(europa18 - europa08 * 100) / 100;
let emissionafrika = Math.round(afrika18 - afrika08 * 100) / 100;
let emissionsüdamerika = Math.round(südamerika18 - südamerika08 * 100) / 100;
let emissionnordamerika = Math.round(nordamerika18 - nordamerika08 * 100) / 100; 
let emissionasien = Math.round(asien18 - asien08 * 100) / 100;
let emissionaustralien = Math.round(australien18 - australien08 * 100) / 100;





console.log("Die Emission von Europa ist: " + europa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + relativeuropa + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzeuropa + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissioneuropa + "kg CO2");


console.log("Die Emission von Nordamerika ist: " + nordamerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + relativnordamerika + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenznordamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissionnordamerika  +"kg CO2");


console.log("Die Emission von Südamerika ist: " + südamerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + relativsüdamerika + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzsüdamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissionsüdamerika + "kg CO2");


console.log("Die Emission von Afrika ist: " + afrika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + relativafrika + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzafrika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissionafrika + "kg CO2");


console.log("Die Emission von Asien ist: " + asien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + relativasien + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzasien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissionasien + "kg CO2");


console.log("Die Emission von Australien ist: " + australien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + relativaustralien + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzaustralien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + emissionaustralien +"kg CO2");
