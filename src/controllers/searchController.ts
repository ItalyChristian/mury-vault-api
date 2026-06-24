import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Discovery } from "../models/discoveries";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  let list = Discovery.getByName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  })
};
