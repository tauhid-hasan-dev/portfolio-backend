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

const createSkill = async (req: Request) => {
  const skillData = {
    icon: req.body.icon,
    name: req.body.name,
  };

  const result = await prisma.skill.create({
    data: skillData,
  });

  return result;
};

const createProject = async (req: Request) => {
  const projectData = {
    num: req.body.num,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    stack: {
      create: req.body.stack.map((tech: { name: string }) => ({
        name: tech.name,
      })),
    },
    image: req.body.image,
    live: req.body.live,
    githubServer: req.body.githubServer,
    githubClient: req.body.githubClient,
  };

  const result = await prisma.project.create({
    data: projectData,
  });

  return result;
};

const createBlog = async (req: Request) => {
  console.log(req.body);
  const blogData = {
    headline: req.body.headline,
    content: req.body.content,
  };

  const result = await prisma.blog.create({
    data: blogData as any,
  });

  return result;
};

const getAllExperiences = async () => {
  const result = await prisma.experience.findMany();
  return result;
};

const getAllSkills = async () => {
  const result = await prisma.skill.findMany();
  return result;
};

const getAllProjects = async () => {
  return await prisma.project.findMany({
    include: {
      stack: true,
    },
  });
};

const getAllBlog = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const getSingleExperience = async (id: string) => {
  const updatedData = await prisma.experience.findUnique({
    where: {
      id: id,
    },
  });

  return updatedData;
};
const getSingleProject = async (id: string) => {
  const updatedData = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });

  return updatedData;
};

const getSingleBlog = async (id: string) => {
  const updatedData = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  return updatedData;
};

export const ResumeServices = {
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
