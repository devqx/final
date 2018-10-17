// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import ProductsController from '../controllers/productsController';


//get all products 
Router.get('/products', (req,res)=>{
    ProductsController.fetchAllProducts(req,res);
})

//add a product 
Router.post('/products', (req,res)=>{  
    ProductsController.addProduct(req,res);
});

Router.get('/products/:id', (req,res)=>{
    ProductsController.findAProduct(req,res);
})

Router.get('/products/delete/:id', (req,res)=>{
    ProductsController.deleteAProduct(req,res);
})

module.exports = Router;