fetch('https://pokeapi.co/api/v2/').then(function(requestMade){
    return requestMade.json();
}).then(function (jsonMade){
    console.log(jsonMade);
})