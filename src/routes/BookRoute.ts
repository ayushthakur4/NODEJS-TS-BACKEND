import{Router,Request,Response} from "express"

const bookrouter = Router();

bookrouter.get("/get-books",( req : Request,res:Response) =>{
    return res.json({ success : false , message : "No Books   founf in record" });
})

export default bookrouter; 