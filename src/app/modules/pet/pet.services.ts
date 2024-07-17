import { NextFunction, Request, Response } from "express";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IPetFilterRequest } from "./pet.interface";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { Prisma } from "@prisma/client";
import { petSearchableFields } from "./pet.constant";

const getAllFromDB = async (
  params: IPetFilterRequest,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andCondions: Prisma.PetWhereInput[] = [];

  //console.log(filterData);
  if (params.searchTerm) {
    andCondions.push({
      OR: petSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditons: Prisma.PetWhereInput = { AND: andCondions };

  const result = await prisma.pet.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });

  const total = await prisma.pet.count({
    where: whereConditons,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createPet = async (req: Request) => {
  const result = await prisma.pet.create({
    data: req.body,
  });
  return result;
};

const updatePet = async (petId: string, req: Request) => {
  const updatedData = await prisma.pet.update({
    where: {
      id: petId,
    },
    data: req.body,
  });

  return updatedData;
};

const getSinglePet = async (petId: string) => {
  const updatedData = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
  });

  return updatedData;
};

const deleteFromDb = async (id: string) => {
  console.log({ id });

  try {
    return await prisma.$transaction(async (transactionClient) => {
      // Check if the pet exists
      const petExists = await transactionClient.pet.findUnique({
        where: {
          id,
        },
      });

      if (!petExists) {
        throw new Error(`Pet with id ${id} does not exist.`);
      }

      // Delete adoption requests associated with the pet first
      await transactionClient.adoptionRequest.deleteMany({
        where: {
          petId: id,
        },
      });

      // Delete the pet record
      const deletedPet = await transactionClient.pet.delete({
        where: {
          id,
        },
      });

      console.log(deletedPet);

      return deletedPet;
    });
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};

export const PetServices = {
  createPet,
  getAllFromDB,
  updatePet,
  getSinglePet,
  deleteFromDb,
};
