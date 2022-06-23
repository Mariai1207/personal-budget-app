'use strict'
const router =require("express").Router();
const {getFinancialMovement, createFinancialMovement, updateFinancialMovement, deleteFinancialMovement}= require('./functionsFinancialMovement')

router.get('/', getFinancialMovement)
router.post('/', createFinancialMovement)
router.patch('/', updateFinancialMovement)
router.delete('/:id', deleteFinancialMovement)

module.exports= router;
