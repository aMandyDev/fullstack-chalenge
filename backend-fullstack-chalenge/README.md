# Project Title

## Description
Serviço REST API do sistema pokémon

## Tech Stack

## Tecnologias

 1. [NodeJs 20x](https://nodejs.org/dist/v14.17.0/)
 2. [HapiJS](https://hapijs.com/)

 ## Big Picture
![Alt](microservice.png)

## Dependencies

### External Services

1.  PokeAPI
2.  MongoDB

cURL login
```
curl -X 'POST' \
  'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge/v1/fullStackChalenge/authentication' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "amanda@gmail.com",
  "password": "12345"
}'
```

cURL - Consulta Caçcador por Id
```
curl -X 'GET' \
  'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge/v1/fullStackChalenge/hunter?hunterId=65ce7622348cf068993bf352' \
  -H 'accept: application/json' \
  -H 'authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1Y2U3NjIyMzQ4Y2YwNjg5OTNiZjM1MiIsImVtYWlsIjoiYW1hbmRhQGdtYWlsLmNvbSIsImlhdCI6MTcwODExMTIxMzQxNCwiZXhwIjoxNzA4MTk3NjEzNDE0fQ.Gq9h5WAHDujQ4cfCXY9kGRCrltKYi7gmp6-vJ42Xmig'
```

cURL - Caça pokemon
```
curl -X 'GET' \
  'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge/v1/fullStackChalenge/pokemon/hunt?hunterId=65ce7622348cf068993bf352' \
  -H 'accept: application/json' \
  -H 'authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1Y2U3NjIyMzQ4Y2YwNjg5OTNiZjM1MiIsImVtYWlsIjoiYW1hbmRhQGdtYWlsLmNvbSIsImlhdCI6MTcwODExMTIxMzQxNCwiZXhwIjoxNzA4MTk3NjEzNDE0fQ.Gq9h5WAHDujQ4cfCXY9kGRCrltKYi7gmp6-vJ42Xmig'

```

cURL - Cadastra pokemon Capturado

```
curl -X 'POST' \
  'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge/v1/fullStackChalenge/pokemon/register?hunterId=65ce7622348cf068993bf352' \
  -H 'accept: application/json' \
  -H 'authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1Y2U3NjIyMzQ4Y2YwNjg5OTNiZjM1MiIsImVtYWlsIjoiYW1hbmRhQGdtYWlsLmNvbSIsImlhdCI6MTcwODExMTIxMzQxNCwiZXhwIjoxNzA4MTk3NjEzNDE0fQ.Gq9h5WAHDujQ4cfCXY9kGRCrltKYi7gmp6-vJ42Xmig' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "volbeat",
  "number": "313",
  "height": 7,
  "weight": 177,
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/313.png",
  "types": [
    "bug"
  ],
  "abilities": [
    "illuminate",
    "swarm",
    "prankster"
  ]
}'
```

## Variables Local

Variables local

```
USE_ROUTE_PREFIX=true
NODE_ENV=desenv
PORT=3001
SERVICE_NAME=bff-ms-fullstack-chalenge
JWT_TOKEN_SECRET=65cbdfe38e1d638a98051ab6
## Services ###
POKEMON_HOST=https://pokeapi.co/api/v2
POKEMON_ROUTE=/pokemon

##Mongo##
MONGO_HOST=mongo_HOST
MONGO_DATABASE=fullstack-chalenge
MONGO_COLLECTIONS_HUNTERS=hunters
MONGO_COLLECTIONS_POKEMONS=pokemons
MONGO_COLLECTIONS_WHITELIST=whitelists

```

## Run Application

How to run the application

```
npm run dev
```