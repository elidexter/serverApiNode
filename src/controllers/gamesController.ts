import {Request,Response} from 'express';
import pool from '../database';
import { request } from 'http';

class GamesController{
    public async list (req:Request,res:Response)
    {        
        const games=await pool.query("select * from game");
        res.json(games);
    }
    public async getById (req:Request,res:Response):Promise<any>
    {
        const {id}=req.params
        const game=await pool.query("select * from game where id=?",[id]);
        console.log(game)
        if(game.length>0)
        {
            return res.json(game[0]);
        }
        res.status(404).json(game);
    }
    public async create(req:Request,res:Response):Promise<void>
    {
        console.log(req.body);
        await pool.query("insert into game set ?",[req.body]);
        res.json({message:"Saved game"});
    }
    public async delete(req:Request,res:Response)
    {
        const {id}=req.params;
        await pool.query("delete from game where id=?",[id]);
        res.json({message:"deleted a game "+req.params.id});
    }
    public async update(req:Request,res:Response)
    {
        const {id}=req.params;
        await pool.query("update game set ? where id=?",[req.body,id]);
        res.json({message:"updated games "+req.params.id});
    }

}
const gamesController=new GamesController();
export default gamesController;