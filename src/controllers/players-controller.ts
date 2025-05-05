import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";

export const getPlayer = async (req: Request, res:Response) => {
    
    const HttpResponse = await getPlayerService();
    

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}