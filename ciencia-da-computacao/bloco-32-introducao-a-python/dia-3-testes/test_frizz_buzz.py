from frizz_buzz import frizz_buzz


def test_frizz_buzz_in_frizz():
    "testa se retorna Frizz"
    assert frizz_buzz(15)[2] == "Frizz"


def test_frizz_buzz_in_buzz():
    "testa se retorna Buzz"
    assert frizz_buzz(15)[4] == "Buzz"


def test_frizz_buzz_in_frizz_buzz():
    "testa se retorna FrizzBuzz"
    assert frizz_buzz(15)[14] == "FrizzBuzz"


def test_frizz_buzz_in_number():
    "testa se retorna numero"
    assert frizz_buzz(15)[0] == 1
