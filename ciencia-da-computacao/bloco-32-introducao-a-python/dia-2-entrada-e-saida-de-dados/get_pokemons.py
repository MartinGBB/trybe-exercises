import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    fire_type_pokemons = [
        pokemon for pokemon in pokemons if "Fire" in pokemon["type"]
    ]

print(fire_type_pokemons[0])

with open("fire_type_pokemons.txt", mode="w") as fire_pokemons:
    json_write = json.dumps(fire_type_pokemons)
    fire_pokemons.write(json_write)
