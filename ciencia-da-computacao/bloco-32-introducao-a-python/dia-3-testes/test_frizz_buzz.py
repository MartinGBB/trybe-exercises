from frizz_buzz import frizz_buzz


def test_frizz_buzz_in_frizz():
    "testa se retorna Frizz"
    assert frizz_buzz(3)[2] == "Frizz"
