import express from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/experience", ResumeController.createExperience);
router.post("/skill", ResumeController.createSkill);

export const resumeRoutes = router;
