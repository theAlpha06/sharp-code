const Profile = require("../models/Profile");
const User = require("../models/User");

exports.submission = async (req, res) => {
    console.log("hii from submissionPage");
    try {
        // Fetch data
        // const { gender="", college="", collegeLocation, branch, mobile } = req.body;
        // Get userId
        console.log(req.body);
        const id = req.user.id;

        // Find the user by email (assuming email is unique)
        const userDetails = await User.findOne({ "email": req.cookies.email });
        // const userDetails = await User.findById(id);

        // If user not found, return an error
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Find the profile by the user's additionalDetails
        const profileDetails = await Profile.findById(userDetails.additionalDetails);

        // If profile not found, return an error
        if (!profileDetails) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            });
        }

        // Update profile
        profileDetails.linkedinProfile = req.body.LinkedIn_Profile_Link;
        profileDetails.githubProfile = req.body.GitHub_Profile_Link;
        profileDetails.projectData.githubLinks = [
            req.body.Task1_GitHub_Link,
            req.body.Task2_GitHub_Link,
            req.body.Task3_GitHub_Link
        ];
        profileDetails.projectData.linkedinLinks = [
            req.body.Task1_LinkedIn_Link,
            req.body.Task2_LinkedIn_Link,
            req.body.Task3_LinkedIn_Link
        ];
        await profileDetails.save();

        // Return response
        return res.status(200).json({
            success: true,
            message: 'Profile Updated Successfully',
            profileDetails,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Profile Not Updated',
            error: error.message,
        });
    }
};
