const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    restaurantName: String, 
    restaurantSite: String,
    restaurantPhone: String,
    restaurantAddress: String,
    restaurantLocation: [String, String],
    restaurantSpecials: [{
            specialCategory: String, 
            specialDays: [Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean], 
            startTime: Number, 
            endTime: Number, 
            deals: [{
                    dealName: String, 
                    dealPrice: Number, 
                }], 
        }], 
})

// const specialsSchema = new Schema({
//     special_id: Number,
//     specialCategory: String, 
//     specialDays: [Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean], 
//     startTime: Number, 
//     endTime: Number, 
//     deals: [dealSchema], 
// })

// const dealSchema = new Schema({
//     deal_id: Number,
//     dealName: String, 
//     dealPrice: Number, required: true
// })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product