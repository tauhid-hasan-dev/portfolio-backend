import { Request } from "express";
import prisma from "../../../shared/prisma";

const createExperience = async (req: Request) => {
  console.log(req.body);
  const experienceData = {
    company: req.body.company,
    position: req.body.position,
    duration: req.body.duration,
  };

  const result = await prisma.experience.create({
    data: experienceData,
  });

  return result;
};

export const ResumeServices = {
  createExperience,
};
