const mongoose=require('mongoose');
const blackListTokenSchema = mongoose.Schema({
    token:{type:String, required:true}
},{
        versionKey:false
})
const BlacklistToken= mongoose.model('BlacklistToken',blackListTokenSchema);
module.exports={BlacklistToken}