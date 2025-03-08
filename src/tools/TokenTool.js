const jwt = require("jsonwebtoken");
//load env variable
require('dotenv').config();
function generateToken(data,timeExpired){
    const time = timeExpired? timeExpired:'1h';
    const token = jwt.sign(data,process.env.JWT_SECRET_KEY,{expiresIn:time});
    return token;
}

async function verityToken(token){
    let data = null;
    let error = null; 
    try{
        const result = jwt.verify(token);
        data = result;
    }catch(err){
        error = err;
    }
    return [data,error]
}