const express=require('express');
const dataPort = require('./model/model');
const router=express.Router();

const create=async(req,res)=>{
    const data=await dataPort.find({});
    
    const name=req.body.name;
    const number=req.body.number;

    const token=10000+data.length;
    console.log(token);
    try{
        await dataPort.create({
            name,
            number,
            token
        })

        return res.json({"token":token,"status":"successfull"});
    }
    catch(e){
        return res.json(e);
    }
    
    
}

const collect_data=async(req,res)=>{
    const data=await dataPort.find({});
    if(data.length)
        return res.json(data);
    else
        return res.status(400).json("No data in db");
}

const date_range_data=async(req,res)=>{
    let D=[];
    const data=await dataPort.find({createdAt:{$gte:req.body.sdate,$lte:req.body.edate}});
    // await data.forEach(async product=>{
    //     const start_date="2022-08-29T10:00:15.833Z"
    //     const date=product.createdAt;
    //     if()
    // })
    
    return res.json(data);
    
}

const remove=async(req,res)=>{
    await dataPort.remove({}).then(data=>{
        return res.json(data);
    })
}

router.post('/created',create);
router.get('/collect',collect_data)
router.post('/date',date_range_data)
router.post('/remove',remove)

module.exports=router;