import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

fire_type_pokemons = [
    pokemon for pokemon in pokemons if "Fire" in pokemon["type"]
]

with open("fire_type_pokemons.txt", mode="w") as fire_pokemons:
    json.dump(fire_type_pokemons, fire_pokemons)
