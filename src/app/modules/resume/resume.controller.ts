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

export const ResumeController = {
  createExperience,
};
