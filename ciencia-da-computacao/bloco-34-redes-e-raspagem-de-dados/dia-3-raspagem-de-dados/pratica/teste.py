from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"
url_next_page = 'page-1.html'

response = requests.get(URL_BASE + url_next_page)
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
PAGE = URL_BASE + href

detail_response = requests.get(PAGE)
detail_selector = Selector(text=detail_response.text)

paragrafo = detail_selector.css("#product_description ~ p::text").get()
print(paragrafo)
