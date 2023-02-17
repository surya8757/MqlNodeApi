const db=require('../models');

//create main models

const Products=db.products

const Reviews=db.reviews

// main work

//1. create product

const addProduct=async(req,res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published:false
    }
    const product=await Products.create(info)
    res.status(200).send(product);
}

//get all products

const getAllProducts=async(req,res)=>{
    let products=await Products.findAll({});
    res.status(200).send(products);
}



//@ get single product

const getOneProduct=async(req,res)=>{
    let id=req.params.id;
    let products=await Products.findOne({where:{id:id}});
    res.status(200).send(products);
}

//@ update products

const updateProduct=async(req,res)=>{
    let id=req.params.id;
    let product=await Products.update(req.body,{where:{id:id}});

    res.status(200).send(product);
}


//@ delete product by id

const deleteProduct=async(req,res)=>{
    let id=req.params.id;
    await Products.destroy({where:{id:id}});
    res.status(200).send('Product is deleted!')
}

//@ published product

const getPublishedProduct=async(req,res)=>{
    let products=await Products.findAll({where:{published:true}});
    res.status(200).send(products);
}

module.exports={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}