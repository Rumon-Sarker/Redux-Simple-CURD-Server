const mongoose = require('mongoose');

const itemSehema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }

});

const Item = mongoose.model('ItemTD', itemSehema);
module.exports = Item;