'use strict'
const {getAllFinancialMovement,createFinancialMovementModel, getCategory, putFinancialMovement, deleteFinancialMovementModel}= require('../Dao/financialMovementDao');

const getFinancialMovement = async (req,res)=>{
   const response = await getAllFinancialMovement();
    res.json(response)
}

const createFinancialMovement= async(req,res)=>{
    const {category}=req.body
    const categoryModel = category ? await getCategory(category) : null
    const financialMovementModel= await createFinancialMovementModel(req.body)
    if(category)  financialMovementModel.setCategory(categoryModel)
    const financialMovement= createFinancialMovementDTO(financialMovementModel, categoryModel, true)
    res.json(financialMovement)
}

function createFinancialMovementDTO(financialMovementModel, categoryModel, created){
        if(created){
                return  {
                    id: financialMovementModel.dataValues.id,
                    concept: financialMovementModel.dataValues.concept,
                    date: financialMovementModel.dataValues.date,
                    amount: financialMovementModel.dataValues.amount,
                    type: financialMovementModel.dataValues.type,
                    category: categoryModel.dataValues.name
                }
            }else{
                return{
                    id: financialMovementModel.id,
                    concept: financialMovementModel.concept,
                    date: financialMovementModel.date,
                    amount: financialMovementModel.amount,
                    type: financialMovementModel.type,
                    category: categoryModel.dataValues.name
                }
              }
}


const updateFinancialMovement = async (req, res)=>{
   const{id, concept, amount, date, category} = req.body
   const categoryModel= category ? await getCategory(category) : null
   const financialMovementUpdate= await putFinancialMovement(id, concept, amount, date)
   if(category && financialMovementUpdate) financialMovementUpdate.setCategory(categoryModel)

   if(!financialMovementUpdate){
       res.status(404).json({message:"financialMovement does not exist"})
   }else{
       res.status(200).json(createFinancialMovementDTO(financialMovementUpdate, categoryModel, false ))
   }
}

const deleteFinancialMovement = async (req, res)=>{
    const financialMovementDeleted= await deleteFinancialMovementModel(req.params.id)
    financialMovementDeleted===0?res.status(404).send():res.status(200).send()
}
module.exports={
    getFinancialMovement,
    createFinancialMovement,
    updateFinancialMovement,
    deleteFinancialMovement
}