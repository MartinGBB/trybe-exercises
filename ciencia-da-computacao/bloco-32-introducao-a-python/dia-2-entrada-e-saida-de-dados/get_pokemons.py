import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    pokemons_type_fire = [
        pokemon for pokemon in pokemons if "Fire" in pokemon["type"]
    ]

print(pokemons_type_fire[0])
