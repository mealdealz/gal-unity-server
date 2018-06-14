var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Holy Shit Your Test Controller Still Works!');
};

// controllers/products.js
exports.product_create = function (req, res, next) {
    console.log(req.body)
    var product = new Product(req.body
    //     {
    //     restaurantName: req.body.restaurantName,
    //     restuarantSite: req.body.restuarantSite,
    //     restaurantPhone: req.body.restaurantPhone,
    //     restaurantAddress: req.body.restaurantAddress,
    //     restaurantLocation: req.body.restaurantLocation,
    //     restaurantSpecials: [{
    //         specialCategory: req.body.specialCategory,
    //         specialDays: req.body.specialDays,
    //         startTime: req.body.startTime,
    //         endTime: req.body.endTime,
    //         deals: [{
    //             dealName: req.body.dealName,
    //             dealPrice: req.body.dealPrice
    //         }],
    //     }]
    // }
);
console.log('******')
console.log(product)
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created Fo Sho!')
    })
};

// controllers/products.js
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//controllers/products.js
exports.product_list = function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};   

// controllers/products.js
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, product) {
        if (err) return next(err);
        res.send("Product Updated Y'all");
    });
};

// controllers/products.js
exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Another One Bites the Dust!');
    })
};