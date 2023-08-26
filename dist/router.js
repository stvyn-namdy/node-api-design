"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var middlewares_1 = require("./modules/middlewares");
var products_1 = require("./handlers/products");
var update_1 = require("./handlers/update");
var router = (0, express_1.Router)();
/**
 * Product
 */
router.get('/product', products_1.getProducts);
router.get('/product/:id', products_1.getOneProduct);
router.put('/product/:id', (0, express_validator_1.body)('name').isString(), middlewares_1.handleInputErrors, function (req, res) {
});
router.post('/product', (0, express_validator_1.body)('name').isString(), middlewares_1.handleInputErrors, products_1.createProduct);
router.delete('/product/:id', products_1.deleteProduct);
/**
 * Update
 */
router.get('/update', update_1.getUpdates);
router.get('/update/:id', update_1.getOneUpdate);
router.put('/update/:id', (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(), (0, express_validator_1.body)('version').optional(), update_1.updateUpdate);
router.post('/update', (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), update_1.createUpdate);
router.delete('/update/:id', update_1.deleteUpdate);
/**
 * Update Point
 */
router.get('/updatepoint', function () { });
router.get('/updatepoint/:id', function () { });
router.put('/updatepoint/:id', (0, express_validator_1.body)('name').optional().isString(), (0, express_validator_1.body)('description').optional().isString(), function () { });
router.post('/updatepoint', (0, express_validator_1.body)('name').optional().isString(), (0, express_validator_1.body)('description').optional().isString(), (0, express_validator_1.body)('updateId').exists().isString(), function () { });
router.delete('/updatepoint/:id', function () { });
router.use(function (err, req, res, next) {
    console.log(err);
    res.status(400).json({ message: 'Oops...Invalid product input' });
});
exports.default = router;
//# sourceMappingURL=router.js.map