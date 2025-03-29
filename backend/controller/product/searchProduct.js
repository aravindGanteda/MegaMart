const productModel = require("../../models/productModel");

const searchProduct = async (req, res) => {
  try {
    const query = req.query.q;

    const products = await productModel.aggregate([
      {
        $search: {
          index: "search_index_products",
          text: {
            query: query,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);

    res.json({
      success: true,
      error: false,
      data: products,
      message: "Results of search...🤪",
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: err.message || err,
    });
  }
};

module.exports = searchProduct;
