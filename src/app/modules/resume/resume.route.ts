import express from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/experience", ResumeController.createExperience);

export const resumeRoutes = router;
