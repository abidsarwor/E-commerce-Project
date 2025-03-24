const {
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
} = require('../services/productservice');

exports.ProductBrandList = async (req, res) => {
    let result = await BrandListService();
    return res.status(200).json(result);
};

exports.ProductCategoryList = async (req, res) => {
    let result = await CategoryListService();
    return res.status(200).json(result);
};

exports.ProductSliderList = async (req, res) => {
    let result = await SliderListService();
    return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {

};

exports.ProductListByCategory = async (req, res) => {

};

exports.ProductListBySmiler = async (req, res) => {

};

exports.ProductListByKeyword = async (req, res) => {

};

exports.ProductListByRemark = async (req, res) => {

};

exports.ProductDetails = async (req, res) => {

};

exports.ProductReviewList = async (req, res) => {

};




