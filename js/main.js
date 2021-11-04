// JSON
// JavaScript Object Notation
// Notacion de objetos de javascript
const objetoJSON = {
    key: 'value',
    clave: 'valor',
    clave2: 10,
    edad: 15,
    nombre: 'Pepito Perez',
    claveNueva: {
        clave: 'otroValor'
    },
    lista: [1, 2, 3, 4, 5],
    listasJSON: [{ cedula: 123 }, { cedula: 456 }, { cedula: 789 }]
}

const pokemons = {
    count: 1118,
    next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    previous: null,
    results: [{
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}

const getApiPokemon = async() => {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await respuesta.json()
    return data
}

const listarPokemons = async() => {
    // alert(JSON.stringify(pokemons.results))
    // alert(pokemons.results[0].name)
    const listaApiPokemons = await getApiPokemon();
    for (let i = 0; i < listaApiPokemons.results.length; i++) {
        document.getElementById("listaPokemons").innerHTML += `
        <li> <a target="_blank" href="${listaApiPokemons.results[i].url}">${listaApiPokemons.results[i].name}</a> </li>`
    }
}

const pintarLista = (listado) => {
    document.getElementById("listaPokemons").innerHTML += "<li>SOY UN ELEMENTO</li>"
}