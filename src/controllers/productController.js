const productService = require("../services/productService");

let getProducts = async (req, res) => {

    const { filter, offset, limit } = req.body;
    const pagination = { offset, limit }
    try {
        const result = await productService.getProducts(filter || {}, pagination);
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

let addProduct = async (req, res) => {

    const product = req.body;

    try {
        const isCreated = await productService.addProduct(product);

        res.json(isCreated);
    } catch (error) {
        res.status(400).json(error);
    }
};

let updateProduct = async (req, res) => {

    const product = req.body;
    const { id } = req.body;

    try {
        const newProduct = await productService.updateProduct(id, product);

        res.json(newProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

let deleteProduct = async (req, res) => {

    const { id } = req.body;

    try {
        const productId = await productService.deleteProduct(id);

        res.json(productId);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getProducts: getProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}