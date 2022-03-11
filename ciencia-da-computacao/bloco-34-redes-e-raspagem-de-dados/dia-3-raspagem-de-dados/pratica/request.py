import requests

# requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)
print(response.headers["Content-Type"])
print(response.text)
print(response.content)


# Requisicao do tipo POST
response = requests.post("https://httpbin.org/post", data="some content")
print(response.text)