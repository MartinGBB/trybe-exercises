from pymongo import MongoClient

client = MongoClient()

db = client.catalogue
book = {
    "title": "A Light in the Attic",
}

document_id = db.books.insert_one(book)
print(document_id)
client.close()