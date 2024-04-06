const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        trim: true
    },
    college: {
        type: String,
        trim: true
    },
    collegeLocation: {
        type: String,
        trim: true
    },
    course: {
        type: String,
        trim: true
    },
    batch: {
        type: String,
        trim: true
    },
    branch: {
        type: String,
        trim: true
    },
    certificate: {
        type: String,
        trim: true
    },
    mobile: {
        type: Number,
        trim: true
    },
    linkedinProfile: {
        type: String,
        trim: true
    },
    githubProfile: {
        type: String,
        trim: true
    },
    projectData: {
        githubLinks: {
            type: [String],
            default: []
        },
        linkedinLinks: {
            type: [String],
            default: []
        }
    }
});

module.exports = mongoose.model("Profile", profileSchema);
