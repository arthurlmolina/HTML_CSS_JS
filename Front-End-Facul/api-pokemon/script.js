fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=2').then(function(requestMade){
    return requestMade.json();
}).then(function (jsonMade){
    console.log(jsonMade.amount)
})