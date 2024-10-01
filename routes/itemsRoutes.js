const express = require("express");
const { createItems, getItems, updateItems, deleteItems } = require("../controllers/itemsControllers");
const router = express.Router();

router.route("/").post(createItems).get(getItems);
router.route("/:id").put(updateItems).delete(deleteItems);

module.exports = router;