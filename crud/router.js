const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get('/getProducts', controller.getAllProduct);
router.post('/createProduct', controller.createProduct);
router.put('/updateProduct', controller.updateProduct);

module.exports = router;

