from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector.css(".product_pod h3 a::attr(title)").getall())
