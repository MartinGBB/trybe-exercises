import requests

# requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)
