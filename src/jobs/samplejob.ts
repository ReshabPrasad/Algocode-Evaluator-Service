import { Job } from "bullmq";

import { IJob } from "../types/BullmqJobDefinition";



export default class SampleJob implements IJob{
    name: string;
    payload: Record<string, unknown> ;

    constructor(payload:Record<string,unknown>){
        this.payload=payload;
        this.name=this.constructor.name
    }

    handle= ()=>{
        console.log("Handler of job called");
    }

    failed = (job?:Job) : void =>{
        console.log("Job failed");
        if(job){
            console.log(job.id);
        }
    }
}