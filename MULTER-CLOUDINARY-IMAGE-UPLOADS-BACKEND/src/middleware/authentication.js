const jwt = require('jsonwebtoken');

const authenticateJWT = (req,res,next) => {
    const token = req.header('Authorization')?.split(' ')[1]
    //Bearer {vgjghghbgk,,.} => token

    if(!token ){
        return res.status(403).json({message: "No token provides, authorization denied."})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        console.error(error);
        return res.status(401).json({message:"Invalid token, authorization denied." })
    }
};

module.exports = authenticateJWT;