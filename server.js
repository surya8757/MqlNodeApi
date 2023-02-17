const express=require('express');
const cors=require('cors');
const app=express();


var corOptions={
    origin:"https://localhost:8081"
}


//middleware

app.use(cors(corOptions));
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({message:"hello form api"});
})

//routers
const router=require('./routers/productRouter')

app.use('/api/products',router)

//port

const PORT=process.env.PORT || 8080;
//Server
app.listen(PORT,()=>{
    console.log(`sever running in port${PORT}`);
})