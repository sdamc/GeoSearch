const btnSearch = document.getElementById('btnSearch');
const txtSearch = document.getElementById('food');
const resultArea = document.getElementById('result');
let out = "";

btnSearch.onclick = function(){
    var searchTerm = txtSearch.value;
    const url = `https://api.punkapi.com/v2/beers?food=${searchTerm}`;
    console.log(url)
    fetch(url)
    .then(data => data.json())
    .then(jsonObject => {
        console.log(jsonObject);
        for(beer in jsonObject){
            const beerInfo = new Array(jsonObject[beer].name, jsonObject[beer].tagline, jsonObject[beer].description, jsonObject[beer].image_url)
            beerOut(beerInfo);
        }
        resultArea.innerHTML = out;
    })
    .catch(function(e){
        console.log("Error: " + e);
    });
}

function beerOut(beer) {
    console.log(beer);
    out += `<div class="beer">
    <div class="beerImage"><img src="${beer[3]}"/></div>
    <div class="beerText">
        <h2>${beer[0]}</h2>
        <h3>${beer[1]}</h3>
        <p><em>${beer[2]}</em></p>
    </div>
    </div>`;
}

//#######wine

//Authorization: Token {f16aaf0eba63dc50268bae7bff67bcca58a82407}

const wineSearch = document.getElementById('wineSearch');
const wineTxt = document.getElementById('wine');
const resultWine = document.getElementById('wine_result');
let outWine = "";

wineSearch.onclick = function(){
    var searchTerm = wineTxt.value;
    const url = `https://api.globalwinescore.com/globalwinescores/latest=${searchTerm}`;
    fetch(url, {
        mode: 'no-cors'
    })
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token {f16aaf0eba63dc50268bae7bff67bcca58a82407}")
    .then(data => data.json())
    .then(jsonObject => {
        console.log(jsonObject);
        for(wine in jsonObject){
            const wineInfo = new Array (jsonObject[wine].wine, jsonObject[wine].wine_id, jsonObject[wine].color, jsonObject[wine].wine_type)

            wineOut(wineInfo);
        }
        resultWine.innerHTML = out;
    })
    .catch(function(e){
        console.log("Error: " + e);
    });
}

function wineOut(wine) {
    console.log(wine);
    out += `<div class="beer">
    <div class="beerImage"><img src="${beer[3]}"/></div>
    <div class="beerText">
        <h2>${wine[0]}</h2>
        <h3>${wine[1]}</h3>
        <p><em>${wine[2]}</em></p>
    </div>
    </div>`;
}



