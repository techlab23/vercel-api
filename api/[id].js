const cors = require('micro-cors')()
const products = require("./products.json")

const handler = async (req, res) => {

  const { query: { id } } = req
  const product = products.find(m => m.id == id)
  res.json(product)

}

module.exports = cors(handler)