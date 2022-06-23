'use strict'
const {getAllCategories, createCategoryModel}= require('../Dao/categoryDao');

const getCategory = async (req,res)=>{
   const response = await getAllCategories();
    res.json(response)
}
const createCategory = async(req, res)=>{
    const categoryCreated = await createCategoryModel(req.body)
    res.send(categoryCreated)
}
module.exports={
    getCategory,
    createCategory
}