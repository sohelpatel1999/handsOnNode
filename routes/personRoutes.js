const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.post("/", personController.createPerson);
router.get("/", personController.getAllPerson);
router.get("/:id", personController.getPerson);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

module.exports = router;
