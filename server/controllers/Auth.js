const User=require("../models/User");
const Profile=require("../models/Profile")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


require("dotenv").config();



// login--------------------------------------------

exports.login=async(req,res)=>{
    try {
        // fetch data fromreq body
        const {email,password}=req.body;

        // validate data
        if(!email || ! password){
            return req.status(403).json({
                success:false,
                message:"All fileds are required, Please try again",
            });
        }
        // check user exist or not
        const user=await User.findOne({email});
        //if user not found with provided email
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User is not Registered with Us Please SignUp to Continue',
            })
        }
        // generate JWT, after password matching
        if(await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                accountType:user.accountType,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"24h",
            });
            user.token = token;
            user.password= undefined;

            //create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successfully',
            })

        }
        else {
            return res.status(401).json({
                success:false,
                message:'Password is incorrect',
            });
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure, please try again',
        });
    }
}




// signup-----------------------------------------

exports.signUp=async(req,res)=>{
    try {
        const  {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            domain,

        }=req.body;

        // check validation
        if(!firstName || !lastName || !email || !password || !confirmPassword || !domain) {
                return res.status(403).json({
                    success:false,
                    message:"All fields are required",
                })
        }

        // matching password

        if(password!=confirmPassword){
            return res.status(400).json({
                success:false,
                message:'Password and ConfirmPassword Value does not match, please try again',
            });
        };

        // check user already exits

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User is aready registered",
            })
        }

    

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // //create the usser
        // let approved="";
        // approved==="Instructor"?(approved=false):(approved=true);
        //entry create in DB

        const profileDetails = await Profile.create({
            gender:"",
            mobile: "",
            collage:"",
            collageLocation:"",
            branch:"",
            certificate:"",

        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            domain,
            additionalDetails:profileDetails._id,
        })

        //return res
        return res.status(200).json({
            success:true,
            message:'User is registered Successfully',
            user,
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User cannot be registrered. Please try again",
        })
    }
}