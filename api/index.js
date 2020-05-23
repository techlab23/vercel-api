const cors = require('micro-cors')()
const products = require("./products.json")

const handler = async (req, res) => {
  res.json(products)
}

module.exports = cors(handler)