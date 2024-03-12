const express = require("express")
const router = express.Router();

const { 
    findUser,
    deleteUser
} = require("../controllers/User");


router.get("/userDetail", findUser);
router.get("/deleteUser", deleteUser)


module.exports = router