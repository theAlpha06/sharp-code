const Profile = require("../models/Profile");
const User = require("../models/User");


exports.updateProfile=async(req,res)=>{
    try {
        //fetch deta
        const {gender="", collage="", collageLocation, branch,mobile} = req.body;
        //get userId
        const id = req.user.id;

		// Find the profile by id
        const userDetails = await User.findById(id);
        const profileDetails = await Profile.findById(userDetails.additionalDetails);

        //update profile

        profileDetails.gender = gender;
        profileDetails.mobile = mobile;
        profileDetails.collage = collage;
        profileDetails.collageLocation = collageLocation;
        profileDetails.branch = branch;
        await profileDetails.save();

        //return response
        return res.status(200).json({
            success:true,
            message:'Profile Updated Successfully',
            profileDetails,
        });




    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Profile Not Updated',
            error:error.message,
        });
    }
};