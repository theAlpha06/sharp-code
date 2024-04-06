const express = require("express")
const router = express.Router();
console.log("hii from submissionRouter")
const { 
    submission,
} = require("../controllers/submission");
// Route for user login
router.post("/", submission)

module.exports = router