import express from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/experience", ResumeController.createExperience);
router.post("/skill", ResumeController.createSkill);
router.post("/project", ResumeController.createProject);
router.post("/blog", ResumeController.createBlog);

export const resumeRoutes = router;
