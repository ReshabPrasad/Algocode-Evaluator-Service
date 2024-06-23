import { Request,Response } from "express";

const pingcheck = (req:Request , res:Response)=>{
    console.log(req.url);
    return res.status(200).json({
        msg: "Ping check is on"
    })
}

export default pingcheck;