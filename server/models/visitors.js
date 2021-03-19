const mongoose = require('mongoose'),
      validator = require('validator'),
      bcrypt = require('bcryptjs'),
      jwt = require('jsonwebtoken');

      
const visitorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,

    },
    lastName: {
        type: String,
        required: true,
        trim: true,

    },
    address: {
        type: String,
        required:true,
        trim: false,
    
    },
    city: {
        type: String,
        required: true,
        trim: false,
        
    },
    state: {
        type: String,
        required: true,
        trim: true,
        
    },
    zip: {
        type: Number,
        required:true,
        trim: true,
        
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },

    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]


});





visitorSchema.pre("save", async function (next) {
    const visitor = this
    if(visitor.isModified("password")){
        visitor.password = await bcrypt.hash(visitor.password, 8)
    }
    next()
})

visitorSchema.methods.generateAuthToken = async function() {
    const visitor = this
    const token = jwt.sign({ _id: visitor._id, name: visitor.lastName, email: visitor.email}, "secret")
    visitor.tokens = visitor.tokens.concat({token})
    await visitor.save()
    return token
}




const visitors = mongoose.model('visitors', visitorSchema)
module.exports = visitors
