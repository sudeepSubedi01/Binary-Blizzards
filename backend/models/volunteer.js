const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
var slug = require('mongoose-slug-updater');
const {Schema} = mongoose

mongoose.plugin(slug);

const volunteerSchema = new Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    gender: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password: {type: String, required: true},
    profilePicture: {type: String, required: true},
    about: {type: String, required: true},
    country: {type: String, required: true},
    province: {type: String},
    district: {type: String},
    municipality: {type: String},
    trainings: [{type: String, required: true}],
    qualification: {type: String, required: true},
    occupation: {type: String, required: true},
    slug: { type: String, slug: ["firstName", "lastName"]  }
}, {
    timestamps: true
})

volunteerSchema.pre('save', async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

volunteerSchema.methods.matchPassword = async function(enteredpassword){
    const flag = await bcrypt.compare(enteredpassword, this.password)
    return flag
}


const Volunteers = mongoose.model('Volunteers', volunteerSchema)

module.exports = Volunteers;