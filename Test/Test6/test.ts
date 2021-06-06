window.addEventListener("load", function () {

    let africa2008: number = 1.01;
    let southAmerica2008: number = 1.13;
    let europe2008: number = 4.97;
    let northAmerica2008: number = 6.60;
    let asia2008: number = 12.95;
    let australia2008: number = 1.99;
    
    let africa2018: number = 1.24;
    let southAmerica2018: number = 1.26;
    let europe2018: number = 4.21;
    let northAmerica2018: number = 6.04;
    let asia2018: number = 12.27;
    let australia2018: number = 2.10;
    
    let world2018: number = (africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018);
    
    let relativeAfrica = Math.round(africa2018 / world2018 * 100 * 100) / 100;
    let relativeSouthA = Math.round(southAmerica2018 / world2018 * 100 * 100) / 100;
    let relativeEurope = Math.round(europe2018 / world2018 * 100 * 100) / 100;
    let relativeNorthA = Math.round(northAmerica2018 / world2018 * 100 * 100) / 100;
    let relativeAsia = Math.round(asia2018 / world2018 * 100 * 100) / 100;
    let relativeAustralia = Math.round(australia2018 / world2018 * 100 * 100) / 100;
    
    let growthAfrica = Math.round((africa2018 - africa2008) / africa2008 * 100 * 100) / 100;
    let growthSouthA = Math.round((southAmerica2018 - southAmerica2008) / southAmerica2008 * 100 * 100) / 100;
    let growthEurope = Math.round((europe2018 - europe2008) / europe2008 * 100 * 100) / 100;
    let growthNorthA = Math.round((northAmerica2018 - northAmerica2008) / northAmerica2008 * 100 * 100) / 100;
    let growthAsia = Math.round((asia2018 - asia2008) / asia2008 * 100 * 100) / 100;
    let growthAustralia = Math.round((australia2018 - australia2008) / australia2008 * 100 * 100) / 100;
    
    let absoluteAfrica = Math.round(africa2018 - africa2008 * 100) / 100;
    let absoulteSouthA = Math.round(southAmerica2018 - southAmerica2008 * 100) / 100;
    let absoluteEurope = Math.round(europe2018 - europe2008 * 100) / 100;
    let absoluteNorthA = Math.round(northAmerica2018 - northAmerica2008 * 100) / 100;
    let absoulteAsia = Math.round(asia2018 - asia2008 * 100) / 100;
    let absoluteAustralia = Math.round(australia2018 - australia2008 * 100) / 100;

    document.querySelector("h1").innerHTML = ""
    
    console.log("Die Emission von Afrika ist:" + africa2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Afirka damit"+ relativeAfrica + "%");
    console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAfrica + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoluteAfrica + "kg CO2");
    
    console.log("Die Emission von Südamerika ist:" + southAmerica2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit"+ relativeSouthA + "%");
    console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthSouthA + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoulteSouthA + "kg CO2");
    
    console.log("Die Emission von Europa ist:" + europe2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit"+ relativeEurope + "%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + growthEurope + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoluteEurope + "kg CO2");
    
    console.log("Die Emission von Nordamerika ist:" + northAmerica2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit"+ relativeNorthA + "%");
    console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + growthNorthA + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoluteNorthA + "kg CO2");
    
    console.log("Die Emission von Asien ist:" + asia2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit" + relativeAsia + "%");
    console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAsia + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoulteAsia + "kg CO2");
    
    console.log("Die Emission von Australien ist:" + australia2018 + "kg CO2."); 
    console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit"+ relativeAustralia + "%");
    console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um" + growthAustralia + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das" + absoluteAustralia + "kg CO2");
    
    
});
