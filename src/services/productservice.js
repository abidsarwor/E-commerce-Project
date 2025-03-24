const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductSliderModel=require('../models/productSliderModel')
const productModel=require('../models/ProductModel')
const ProductDetailModel=require('../models/ProductDetailModel')
const ReviewModel=require('../models/ReviewModel')



const BrandListService=async () =>{
     try{
      let data=  await BrandModel.find();
      return {status:"success",data:data}
     }
     catch(e){
         return {status:"fail",data:e}.toString()
     }
}


const CategoryListService=async () =>{
    try{
        let data=  await CategoryModel.find();
        return {status:"success",data:data}
    }
    catch(e){
        return {status:"fail",data:e}.toString()
    }
}

const SliderListService=async () =>{
    try{
        let data=  await ProductSliderModel.find();
        return {status:"success",data:data}
    }
    catch(e){
        return {status:"fail",data:e}.toString()
    }
}



const ListByBrandService=async () =>{

}





const ListByCategoryService=async () =>{

}



const ListBySmilerService=async () =>{

}



const ListByKeywordService=async () =>{

}




const ListByRemarkService=async () =>{

}




const Detailservice=async () =>{

}


const ReviewListservice=async () =>{

}



module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilerService,
    ListByKeywordService,
    ListByRemarkService,
    Detailservice,
    ReviewListservice

}