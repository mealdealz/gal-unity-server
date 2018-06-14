var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/product');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

module.exports = router;

var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Holy Shit Your Test Controller Still Works!');
};

// routes/products.js
router.post('/create', product_controller.product_create);

// routes/products.js
router.get('/:id', product_controller.product_details);

// routes/products.js
router.put('/:id/update', product_controller.product_update);

// routes/products.js
router.delete('/:id/delete', product_controller.product_delete);

//routes/products.js
router.get('/', product_controller.product_list)
