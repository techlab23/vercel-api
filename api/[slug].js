const cors = require('micro-cors')()
const products = require("./products.json")

const handler = async (req, res) => {

  const { query: { slug } } = req
  const product = products.find(m => m.slug == slug)
  res.json(product)

}

module.exports = cors(handler)