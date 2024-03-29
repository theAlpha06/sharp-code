const express = require("express")
const router = express.Router();

const { 
    findUser,
    deleteUser,
    getUserSecurity
} = require("../controllers/User");

console.log("hii from userdetails");
router.get("/userDetail",getUserSecurity,findUser);
router.get("/deleteUser", deleteUser)


module.exports = router