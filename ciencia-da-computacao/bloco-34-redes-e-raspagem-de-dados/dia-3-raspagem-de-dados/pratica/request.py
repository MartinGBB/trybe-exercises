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

# Requisição enviando cabeçalho (header)
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# Requisicao a recurso binario
response = requests.get("http://httpbin.org/get")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/image/png")
# Equivalente ao json.loads(response.content)
print(response.json())

# resposta lance uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
print(response.raise_for_status())
