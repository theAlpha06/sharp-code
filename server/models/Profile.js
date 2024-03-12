const mongoose=require("mongoose");

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
    },
    collage:{
        type: String,
    },
    collageLocation:{
        type: String,
    },
    branch:{
        type:String,
     
    },
    certificate:{
        type:String,
     
    },
    mobile:{
        type:Number,
       
    },
    
});

module.exports=mongoose.model("Profile",profileSchema);