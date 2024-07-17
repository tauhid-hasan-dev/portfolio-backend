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

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeServices.getAllBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog posts retrieved successfully",
    data: result,
  });
});

const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ResumeServices.getSingleExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Experience Retrieved successfully",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ResumeServices.getSingleProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Project Retrieved successfully",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ResumeServices.getSingleBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Blog Post Retrieved successfully",
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
  getAllProjects,
  getAllBlog,
  getSingleExperience,
  getSingleProject,
  getSingleBlog,
};
