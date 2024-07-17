import express from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/experience", ResumeController.createExperience);
router.post("/skill", ResumeController.createSkill);
router.post("/project", ResumeController.createProject);

export const resumeRoutes = router;
