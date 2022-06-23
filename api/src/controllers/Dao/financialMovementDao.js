const {FinancialMovement, Category } = require('../../../dataBase');

const getAllFinancialMovement = async ()=>{
    const allFinancialMovement= await FinancialMovement.findAll({
        include: Category,
        attributes:['id','concept', 'amount', 'type', 'date']
    });
    const response= allFinancialMovement.map(e=>{
        let obj={
            id: e.id,
            concept: e.concept,
            amount: e.amount,
            type: e.type,
            date: e.date
        }
        e.Category!==null?obj.category= e.Category.name:obj.category=''
        return obj
    })
    return response
}

const createFinancialMovementModel = async (body)=>{
    let movementCreated= await FinancialMovement.create({
        concept: body.concept,
        amount:body.amount,
        type: body.type,
        date: body.date
    })
    return movementCreated
}
const getCategory= async (name)=>{
    return await Category.findOne({where:{name:name}})
}


const putFinancialMovement= async(id, concept, amount, date)=>{
    const financialMovementFound= await FinancialMovement.findOne({where:{id: id}})
    if(!financialMovementFound){
        return undefined
    }else{
        concept?financialMovementFound.concept= concept:null
        amount?financialMovementFound.amount= amount:null
        date?financialMovementFound.date= date:null
        financialMovementFound.save()
        return financialMovementFound
    }

}
const deleteFinancialMovementModel= async (id)=>{
    return FinancialMovement.destroy({where:{id:id}})
}
module.exports={
    getAllFinancialMovement,
    createFinancialMovementModel,
    getCategory,
    putFinancialMovement,
    deleteFinancialMovementModel
}