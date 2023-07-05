require('dotenv').config();
const express=require('express');
const app=express();
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');




const User=require('./models/user');
const Message = require('./models/message');
const Forgotpassword = require('./models/password');



User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User)



const userroutes=require('./routes/user');
const passwordroutes=require('./routes/password');
const messageroutes=require('./routes/message');




app.use(cors());
app.use(bodyParser.json());



app.use('/user',userroutes);
app.use('/password',passwordroutes)
app.use('/message',messageroutes)




const sequelize=require('./util/database');
sequelize.sync();
app.listen(4000,()=>{
    console.log('server started at port 4000');
});