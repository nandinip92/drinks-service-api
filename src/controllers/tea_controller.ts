import { Request, Response } from "express";
import * as teaService from "../services/tea_services";

export const getTeaLover = async (req: Request, res: Response) => {
  const teaLover = teaService.getTeaLover();
  res.send(teaLover).status(200);
};
