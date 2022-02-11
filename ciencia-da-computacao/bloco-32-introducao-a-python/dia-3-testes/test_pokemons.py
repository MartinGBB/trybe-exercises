import json
from io import StringIO
from pokemons import retrieve_pokemons_by_type


def test_retrieve_pokemons_by_type():
    grass_type_pokemon = {
        "national_number": "003",
        "evolution": None,
        "sprites": {
            "normal": "https://img.pokemondb.net/sprites",
            "large": "https://img.pokemondb.net/artwork/venusaur.jpg",
            "animated": "https://img.pokemondb.net/sprites/black-white/anim/",
        },
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "total": 525,
        "hp": 80,
        "attack": 82,
        "defense": 83,
        "sp_atk": 100,
        "sp_def": 100,
        "speed": 80,
    }

    fire_type_pokemon = {
        "national_number": "004",
        "evolution": None,
        "sprites": {
            "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha",
            "large": "https://img.pokemondb.net/artwork/charmander.jpg",
            "animated": "https://img.pokemondb.net/sprites/black-white/anim/",
        },
        "name": "Charmander",
        "type": ["Fire"],
        "total": 309,
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "sp_atk": 60,
        "sp_def": 50,
        "speed": 65,
    }

    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, fire_type_pokemon]})
    )

    assert retrieve_pokemons_by_type("Fire", fake_file) == [fire_type_pokemon]
