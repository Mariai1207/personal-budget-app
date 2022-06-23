'use strict'
const router =require("express").Router();
const {getCategory, createCategory}= require('./functionsCategory')

router.get('/', getCategory)
router.post('/', createCategory)

module.exports= router;