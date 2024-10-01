
const Item = require("../models/itemsModel");


const createItems = async (req, res) => {
    const { name, price, description } = req.body;
    const item = new Item({ name, price, description });
    try {
        const createdItems = await item.save();
        res.status(201).json(createdItems)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

const updateItems = async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
        const updateItem = await Item.findByIdAndUpdate(id, { name, price, description });
        res.json(updateItem);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

};

const deleteItems = async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndDelete(id);
        res.json({ message: "Items Deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

module.exports = { createItems, getItems, updateItems, deleteItems }