# Javascript JSON - FETCH - API

## Algunas API Publicas
https://the-api-collective.com/
https://api.imgflip.com/get_memes
https://jsonformatter.org/json-pretty-print
https://pokemontcg.io/
https://api.pokemontcg.io/v2/cards?q=name:gardevoir
https://rickandmortyapi.com/api/character/
https://rickandmortyapi.com/documentation#character

## Proyecto - Ejercicio
###  para 09-11-2021
En equipos de 2 o 3 personas
Hacer uso o consumo de una API (puede tomar las mencionadas en el anterior mensaje)
Y dibujar esto en html, tenga en cuenta que use imagenes , es decir que la api, traiga imagenes para tener algo que dibujar mas alla de solamente texto o nombre.


### para 16-11-2021
En equipos de 2 o 3 personas
Hacer uso o consumo de una API (puede tomar las mencionadas en el anterior mensaje)
Lo que retorne el API, debe guardarse en el localStorage.
Debe tener un boton en la pagina web, que dibuje en una tabla, toda la informacion guardada en el localStorage.

### Asignaciones para proxima clase
Instalar NodeJS
Instalar MongoDB
Instalar Postman

#### Ejemplos de uso de localStorage
localStorage.getItem('NOMBREUSUARIO')
<!-- 'JOHANBERT' -->
localStorage.setItem('APELLIDO','MOSQUERA')
<!-- undefined -->
localStorage.getItem('APELLIDO')
<!-- 'MOSQUERA' -->
localStorage.setItem('edad',28)
<!-- undefined -->
localStorage.getItem('EDAD')
<!-- null -->
localStorage.getItem('Edad')
<!-- null -->
localStorage.getItem('edad')
<!-- '28' -->
localStorage.setItem('apiData',{ clave: 'valor'})
<!-- undefined -->
localStorage.getItem('apiData')
<!-- '[object Object]' -->
JSON.parse('{"clave":"valor"}')
<!-- {clave: 'valor'} -->
JSON.stringify({ clave: 'valor'})
<!-- '{"clave":"valor"}' -->
localStorage.setItem('apiData', JSON.stringify({ clave: 'valor'}) )
<!-- undefined -->
localStorage.getItem('apiData')
<!-- '{"clave":"valor"}' -->
JSON.parse( localStorage.getItem('apiData') )
<!-- {clave: 'valor'} -->