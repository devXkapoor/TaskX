"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Form Submission of ProfessorForm
export async function AddANewProfessor(formData: FormData) {
  try {
    await prisma.professor.create({
      data: {
        ProfessorName: formData.get("ProfessorName") as string,
        ProfessorRegistrationNumber: formData.get(
          "ProfessorRegistrationNumber"
        ) as string,
        ProfessorDepartment: formData.get("ProfessorDepartment") as string,
        ProfessorInstituteEmailID: formData.get(
          "ProfessorInstituteEmailID"
        ) as string,
        ProfessorPersonalEmailID: formData.get(
          "ProfessorInstituteEmailID"
        ) as string,
      },
    });

    revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Professors
export async function getProfessors() {
  try {
    const Professors = await prisma.professor.findMany();
    return Professors.map((Professor) => ({
      id: Professor.ProfessorID,
      ProfessorName: Professor.ProfessorName,
      ProfessorRegistrationNumber: Professor.ProfessorRegistrationNumber,
      ProfessorDepartment: Professor.ProfessorDepartment,
      ProfessorInstituteEmailID: Professor.ProfessorInstituteEmailID,
      ProfessorPersonalEmailID: Professor.ProfessorPersonalEmailID,
      ProfessorAreaOfInterest: Professor.ProfessorAreaOfInterest,
    }));
  } catch (error) {
    console.error("Error fetching Professors:", error);
    throw new Error("Error fetching Professors");
  }
}

// Fetch a specific Professor by  ProfessorID
export async function getProfessorById(id: string) {
  try {
    const ProfessorDashboard = await prisma.professor.findUnique({
      where: {
        ProfessorID: id, // Assumes the Professor `id` field is a unique identifier in your database
      },
    });
    return ProfessorDashboard;
  } catch (error) {
    console.error("Error fetching Professor:", error);
    return null;
  }
}

function handlePrismaError(error: any) {
  // Prisma - Prisma Client Known Request Error
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log(
      `Error Source: Prisma \n`,
      `Error Type: Prisma Client Known Request Error \n`,
      `Error Code: ${error.code} \n`,
      `Error Message: ${error.message} \n`
    );
  }

  // Prisma - Prisma Client Unknown Request Error
  if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    console.log(
      `Error Source: Prisma \n`,
      `Error Type: Prisma Client Unknown Request Error \n`,
      `Error Message: ${error.message} \n`
    );
  }

  // Prisma - Prisma Client Rust Panic Error
  if (error instanceof Prisma.PrismaClientRustPanicError) {
    console.log(
      `Error Source: Prisma \n`,
      `Error Type: Prisma Client Rust Panic Error \n`,
      `Error Message: ${error.message} \n`
    );
  }

  // Prisma - Prisma Client Initialization Error
  if (error instanceof Prisma.PrismaClientInitializationError) {
    console.log(
      `Error Source: Prisma \n`,
      `Error Type: Prisma Client Initialization Error \n`,
      `Error Code: ${error.errorCode} \n`,
      `Error Message: ${error.message} \n`
    );
  }

  // Prisma - Prisma Client Validation Error
  if (error instanceof Prisma.PrismaClientValidationError) {
    console.log(
      `Error Source: Prisma \n`,
      `Error Type: Prisma Client Validation Error \n`,
      `Error Message: ${error.message} \n`
    );
  }
}
