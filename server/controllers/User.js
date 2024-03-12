
const Profile = require("../models/Profile");
const User = require("../models/User");
const mongoose = require("mongoose");




exports.findUser = async (req, res) => {
    try {
        const email=req.body.email;
        
        const user = await User.findOne({email});
        
        id=user._id;
        const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()

        res.send({
            success: true,
            data:userDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User does not found",
        })
    }
};

// exports.findUser = async (req, res) => {
//     try {
//         const email = req.body.eamil;

//         const user = await User.findOne({ email:email });

//         if (!user) {
//             console.log("User not found with email:", email);
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found with this email",
//             });
//         }

//         console.log("User found:", user);

//         const userDetails = await User.findById(user._id)
//             .populate("additionalDetails")
//             .exec();

//         res.send({
//             success: true,
//             data: userDetails,
//         });
//     } catch (error) {
//         console.error("Error:", error.message);
//         return res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };



exports.deleteUser = async (req, res) => {
    try {
      const email = req.body.email;
      const userData=await User.findOne(email);
      id=userData._id
      console.log(id)
      if (!userData) {
        return res.status(404).json({
          success: false,
          message: "User not found with this email",
        })
      }
      const user = await User.findById({ _id: id })
      
      // Delete Assosiated Profile with the User
      await Profile.findByIdAndDelete({
        _id: new mongoose.Types.ObjectId(user.additionalDetails),
      })
      
      // Now Delete User
      await User.findByIdAndDelete({ _id: id })
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      })
    } catch (error) {
      console.log(error)
      res
        .status(500)
        .json({ success: false, message: "User Cannot be deleted " })
    }
  }
