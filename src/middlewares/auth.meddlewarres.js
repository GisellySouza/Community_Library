import "dotenv/config";
import jwt from "jsonwebtoken";
import userServices from "../service/user.services.js";

function authMeddleware(req, res, next){
    const tokenHeader  =req.headers.authorization;
    if (!tokenHeader) {
        return res.status(401).send({message:"The Token was not informed!"});
    }
    //split tranforma uma string e array, aqui é usado pra separa o espaço estre eles => " "
    const partsToken = tokenHeader.split(" ");
    if (partsToken.length !== 2){
        return res.status(401).send({message:"Invalid token!"});
    }
    const [schema, token] = partsToken;

    if(!/^Bearer$/i.test(schema)) {
        return res.status(401).send({message:"Malformatted Token!"});
    }
    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) =>{
        if (err) {
            return res.status(401).send({message:"Invalid token!"});
        }

        const user = await userServices.findUserByIdService(decoded.id)
        if (!user || !user.id){
            return res.status(401).send({message:"Invalid token!"});
        }

        req.userId = user.id;

        return next();
});
}

export { authMeddleware };