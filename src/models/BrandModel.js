const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    bramdName:{type:String,unique:true,required:true},
    brandImg:{type:String,unique:true,required:true},
},
    {timestamps:true,versionKey:false}
)
const BrandModel=mongoose.model('brands',DataSchema)
module.exports=BrandModel