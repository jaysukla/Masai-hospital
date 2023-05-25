const jsonServer = require('json-server');
const app = jsonServer.create();
const data = require('./db.json')
const middlewares = jsonServer.defaults();
var cors = require('cors')
const port = 3000;
app.use(jsonServer.bodyParser);
app.use(middlewares);
 
app.use(cors())

let id=0;


app.post('/login',(req,res)=>{
let d= req.body;
c=0;
a=0;
for(let i=0;i<(data.admin).length;i++){
  if(d.email==(data.admin)[i].email && d.password==(data.admin)[i].password){
    console.log(d)
    a=1;
    break;
  }
  
  
  }


for(let i=0;i<(data.users).length;i++){
if(d.email==(data.users)[i].email && d.password==(data.users)[i].password){
  console.log(d)
  c=1
  break;
}


}


if(a==1){
  res.json({"msg":1})
}
else if(c==1){
  res.json({'msg':2})
}else{
  res.json({"msg":0})
}


})


app.post('/users',(req,res)=>{
let d= req.body;

if(d.docter==true){
  data.admin.push(d)
    console.log(d)
}else{
  data.users.push(d)
    console.log(d)
}



  res.json({"msg":"regestered"})
    
    })




app.get('/appointments',(req,res)=>{

  res.json({"data":data.docters})

})  




app.post('/appointments',(req,res)=>{
  let {name,image,specialization,experience,location,date,slots,fee}= req.body;

data.docters.push({id,name,image,specialization,experience,location,date,slots,fee})

id++

res.json({'msg':'added'})



})


app.delete("/appointments",(req,res)=>{

  let d=req.query.id;
  
for(let i=0;i<(data.docters).length;i++){

  if((data.docters)[i].id==d){
    (data.docters).splice(i,1)
  }

}


res.json({"msg":'deleted'})
})





app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
