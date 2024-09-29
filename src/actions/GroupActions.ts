"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Form Submission of GroupForm
export async function AddANewGroup(formData: FormData) {
  try {
    await prisma.group.create({
      data: {
        GroupName: formData.get("GroupName") as string,
        GroupDescription: formData.get("GroupDescription") as string,
      },
    });

    revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Groups
export async function getGroups() {
  try {
    const groups = await prisma.group.findMany();
    return groups.map((group) => ({
      id: group.GroupID,
      GroupName: group.GroupName,
      GroupDescription: group.GroupDescription,
      GroupMembers: group.GroupMembers,
      GroupStudents: group.GroupStudents,
      GroupProfessors: group.GroupProfessors,
    }));
  } catch (error) {
    console.error("Error fetching Groups:", error);
    throw new Error("Error fetching Groups");
  }
}

// Fetch a specific Group by  GroupID
export async function getGroupById(id: string) {
  try {
    const groupDashboard = await prisma.group.findUnique({
      where: {
        GroupID: id, // Assumes the Group `id` field is a unique identifier in your database
      },
    });
    return groupDashboard;
  } catch (error) {
    console.error("Error fetching Group:", error);
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
