const { Category } = require('../../../dataBase');

const getAllCategories = async ()=> {
    return await Category.findAll({attributes:['name']})
}
const createCategoryModel= async (body)=>{
    return await Category.create({
        name: body.name
    })
}
module.exports={
    getAllCategories,
    createCategoryModel
}
