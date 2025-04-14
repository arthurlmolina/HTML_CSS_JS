fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function(requestMade){
    return requestMade.json();
})
.then(function (jsonMade){
    console.log(jsonMade);
})