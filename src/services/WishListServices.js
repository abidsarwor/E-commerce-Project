const wishlist=require("../models/wishModel");
const WishModel = require("../models/WishModel");



const WishListService=async(req)=>{

}

const SaveWishListService=async(req)=> {
    try {
        let user_id = req.headers.userid;
        let reqBody = req.body;
        reqBody.user_id = user_id;
        WishModel.updateOne(reqBody, {$set: reqBody}, {upsert: true})
        return {status: "sucess", messege: "Wish List Save Sucess`"}
    }
    catch (e){
        return {status: "fail", messege: "SomethingWent Wrong !"}
    }
}






const RemoveWishListService=async(req)=>{
    try {
        let user_id = req.headers.userid;
        let reqBody = req.body;
        reqBody.user_id = user_id;
        await WishModel.deleteOne(reqBody, {$set: reqBody}, {upsert: true})
        return {status: "sucess", messege: "Wish List Remove Sucess`"}
    }
    catch (e){
        return {status: "fail", messege: "SomethingWent Wrong !"}
    }

}



module.exports={
    WishListService,
    SaveWishListService,
    RemoveWishListService
}

