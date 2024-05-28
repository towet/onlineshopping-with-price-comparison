from flask import Flask, request, jsonify, render_template


app = Flask(__name__, static_folder='static')

app = Flask(__name__)

# Function to retrieve product links based on the search query
def get_product_links(product):
    # Implement your logic to fetch product links from various shops based on the search query
    # This could involve scraping websites or using APIs

    # For demonstration purposes, we'll return hardcoded links
    return {
        "jumia": f"https://www.jumia.co.ke/catalog/?q={product}",
        "kilimall": f"https://www.kilimall.co.ke/new/commoditysearch?q={product}",
        "Carrefour": f"https://www.carrefour.ke/mafken/en/v4/search?keyword={product}"
    }

@app.route("/", methods=["GET"])
def index():
    return render_template("home.html")

@app.route("/search", methods=["POST"])
def search():
    data = request.json
    product = data["product"]

    # Retrieve product links based on the search query
    links = get_product_links(product)

    # Include the links in the JSON response
    response = {
        "jumia": links["jumia"],
        "kilimall": links["kilimall"],
        "Carrefour": links["Carrefour"]
    }

    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)