const express = require('express');

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');
/**
 * 
 */

let router = express.Router();

let initAllWebRoutes = (app) => {

    // auth controller
    router.post("/api/login", authController.loginUser);

    // Products controller
    router.post("/api/products", productController.getProducts);
    router.post("/api/product", auth, productController.addProduct);
    router.put("/api/product", auth, productController.updateProduct);
    router.delete("/api/product", auth, productController.deleteProduct);


    return app.use("/", router);
}

module.exports = initAllWebRoutes;