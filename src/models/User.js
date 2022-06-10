import bcrypt from "bcryptjs";
import {Schema, model, trusted  } from "mongoose";

const userScherma = new Schema ({
    username: {
        type: String,
        unique: true, 
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: trusted
    },
    roles:[{
        ref: "Role",
        type:  Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})


userScherma.statics.encryptPassword = async (password) =>{
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(password, salt)
}

userScherma.statics.comparePassword = async (password, recivedPassword) => {
   return await bcrypt.compare(password, recivedPassword)
}


export default model('User', userScherma)

