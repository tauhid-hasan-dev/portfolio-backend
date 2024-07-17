import express from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/experience", ResumeController.createExperience);
router.post("/skill", ResumeController.createSkill);
router.post("/project", ResumeController.createProject);
router.post("/blog", ResumeController.createBlog);

router.get("/experiences", ResumeController.getAllExperiences);
router.get("/skills", ResumeController.getAllSkills);
router.get("/projects", ResumeController.getAllProjects);
router.get("/blogs", ResumeController.getAllBlog);

export const resumeRoutes = router;
