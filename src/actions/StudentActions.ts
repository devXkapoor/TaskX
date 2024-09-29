"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Form Submission of StudentForm
export async function AddANewStudent(formData: FormData) {
  try {
    await prisma.student.create({
      data: {
        StudentName: formData.get("StudentName") as string,
        StudentEnrolmentNumber: formData.get(
          "StudentEnrolmentNumber"
        ) as string,
        StudentStudyBranch: formData.get("StudentStudyBranch") as string,
        StudentStudyYear: formData.get("StudentStudyYear") as string,
        StudentContactNumber: formData.get("StudentContactNumber") as string,
        StudentInstituteEmailID: formData.get(
          "StudentInstituteEmailID"
        ) as string,
      },
    });

    revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Students
export async function getStudents() {
  try {
    const students = await prisma.student.findMany();
    return students.map((student) => ({
      id: student.StudentID,
      StudentName: student.StudentName,
      StudentEnrolmentNumber: student.StudentEnrolmentNumber,
      StudentStudyBranch: student.StudentStudyBranch,
      StudentStudyYear: student.StudentStudyYear,
      StudentContactNumber: student.StudentContactNumber,
      StudentInstituteEmailID: student.StudentInstituteEmailID,
    }));
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Error fetching students");
  }
}

// Fetch a specific student by  StudentID
export async function getStudentById(id: string) {
  try {
    const studentDashboard = await prisma.student.findUnique({
      where: {
        StudentID: id, // Assumes the student `id` field is a unique identifier in your database
      },
    });
    return studentDashboard;
  } catch (error) {
    console.error("Error fetching student:", error);
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
