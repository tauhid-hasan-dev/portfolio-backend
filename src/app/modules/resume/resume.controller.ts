import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { ResumeServices } from "./resume.services";

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.createExperience(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Experience added Successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.createSkill(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Skill added Successfully",
    data: result,
  });
});

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.createProject(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project added Successfully",
    data: result,
  });
});

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.createBlog(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog post added Successfully",
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.getAllExperiences();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.getAllSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

export const ResumeController = {
  createExperience,
  createSkill,
  createProject,
  createBlog,
  getAllExperiences,
  getAllSkills,
};
