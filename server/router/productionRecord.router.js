const express = require('express');
const router = express.Router();

const {
  createProductionRecord,
  findAllProductionRecords,
  findProductionRecord,
  endProductionRecord,
  updateProductionRecord,
  deleteProductionRecord,
} = require("../controllers/ProductionRecord.controller.js");

const { authenticateToken } = require("../utlits/authenticate.js");
const checkSubscription = require("../utlits/checkSubscription.js");


// Create a new Production Record
router
  .route("/")
  .post(authenticateToken, checkSubscription, createProductionRecord)
  .get(authenticateToken, checkSubscription, findAllProductionRecords);

// Retrieve all Production Records
router
  .route("/:productionRecordId")
  .get(authenticateToken, checkSubscription, findProductionRecord)
  .put(authenticateToken, checkSubscription, updateProductionRecord)
  .delete(authenticateToken, checkSubscription, deleteProductionRecord);

// End a Production Record
router
  .route("/end/:productionRecordId")
  .put(authenticateToken, checkSubscription, endProductionRecord);




module.exports = router;
