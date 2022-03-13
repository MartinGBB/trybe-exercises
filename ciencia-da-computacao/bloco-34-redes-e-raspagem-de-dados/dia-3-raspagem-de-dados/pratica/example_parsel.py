from importlib.metadata import requires
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
url_next_page = 'page-1.html'

while url_next_page:
    response = requests.get(URL_BASE + url_next_page)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        titles = product.css("h3 a::attr(title)").get()
        prices = product.css(".price_color::text").get()
        print(titles, prices)
        # Buscando url do card
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href
        # Entrondo no card
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)
        # Buscando descripcao
        details_card = detail_selector.css("#product_description ~ p::text").get()
        print(details_card)

    url_next_page = selector.css(".next a::attr(href)").get()
    print(f"---------------- NEXT PAGE ({url_next_page}) ------------------")
