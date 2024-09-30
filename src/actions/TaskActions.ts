"use server";

import { FormSchema } from "@/components/TextAreaForm/TextAreaForm";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Form Submission of TaskForm
export async function AddANewTask(formData: FormData) {
  try {
    await prisma.task.create({
      data: {
        TaskTitle: formData.get("TaskTitle") as string,
        TaskDescription: formData.get("TaskDescription") as string,
        TaskBasicDeadline: formData.get("TaskBasicDeadline") as string,
        TaskAdvancedDeadline: formData.get("TaskBasicDeadline") as string,
      },
    });

    // revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Tasks
export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany();
    return tasks.map((task) => ({
      id: task.TaskID,
      TaskTitle: task.TaskTitle,
      TaskDescription: task.TaskDescription,
      TaskBasicDeadline: task.TaskBasicDeadline,
      TaskAdvancedDeadline: task.TaskAdvancedDeadline,
    }));
  } catch (error) {
    console.error("Error fetching Tasks:", error);
    throw new Error("Error fetching Tasks");
  }
}

// Fetch a specific Task by  TaskID
export async function getTaskById(id: string) {
  try {
    const TaskDashboard = await prisma.task.findUnique({
      where: {
        TaskID: id, // Assumes the Task `id` field is a unique identifier in your database
      },
    });
    return TaskDashboard;
  } catch (error) {
    console.error("Error fetching Task:", error);
    return null;
  }
}

export async function AddNewTaskDetails(
  data: Zod.infer<typeof FormSchema>,
  taskId: string
) {
  try {
    await prisma.taskDetail.create({
      data: {
        TaskTaskID: taskId,
        TaskDetail: data.TaskDetails,
      },
    });
  } catch (error) {
    console.error("Error fetching Task:", error);
  }
}

export async function getTaskDetailsById(id: string) {
  try {
    const TaskDetailsAll = await prisma.taskDetail.findMany({
      where: {
        TaskTaskID: id, // Assumes the Task `id` field is a unique identifier in your database
      },
    });
    return TaskDetailsAll;
  } catch (error) {
    console.error("Error fetching Task:", error);
    return null;
  }
}

export async function onSubmit(data: Zod.infer<typeof FormSchema>) {
  try {
    await prisma.taskDetail.create({
      data: {
        TaskDetail: data.TaskDetails,
      },
    });
  } catch (error) {
    console.error("Error fetching Task:", error);
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
