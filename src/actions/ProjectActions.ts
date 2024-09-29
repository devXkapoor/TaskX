"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Fortm Submission of ProjectForm
export async function AddANewProject(formData: FormData) {
  try {
    await prisma.project.create({
      data: {
        ProjectTitle: formData.get("ProjectTitle") as string,
        ProjectDepartment: formData.get("ProjectDepartment") as string,
        ProjectDescription: formData.get("ProjectDescription") as string,
        ProjectRelevantFiles: formData.get("ProjectRelevantFiles") as string,
        ProjectRelevantLinks: formData.get("ProjectRelevantLinks") as string,
        ProjectDeadline: formData.get("ProjectDeadline") as string,
      },
    });

    revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Students
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();
    return projects.map((project) => ({
      id: project.ProjectID,
      ProjectTitle: project.ProjectTitle,
      ProjectDepartment: project.ProjectDepartment,
      ProjectDescription: project.ProjectDescription,
      ProjectRelevantFiles: project.ProjectRelevantFiles,
      ProjectRelevantLinks: project.ProjectRelevantLinks,
      ProjectExistingStudents: project.ProjectExistingStudents,
      ProjectDeadline: project.ProjectDeadline,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Error fetching projects");
  }
}

// Fetch a specific project by ProjectID
export async function getProjectById(id: string) {
  try {
    const projectDashboard = await prisma.project.findUnique({
      where: {
        ProjectID: id,
        // Assumes the project `id` field is a unique identifier in your database
      },
    });
    return projectDashboard;
  } catch (error) {
    console.error("Error fetching project:", error);
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
