"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Form Submission of DocumentForm
export async function AddANewDocument(formData: FormData) {
  try {
    await prisma.document.create({
      data: {
        DocumentName: formData.get("DocumentName") as string,
      },
    });

    revalidatePath("/professor");
  } catch (error) {
    handlePrismaError(error); // Centralized error handling
  }
}

// For Displaying the Details of all the Documents
export async function getDocuments() {
  try {
    const Documents = await prisma.document.findMany();
    return Documents.map((Document) => ({
      id: Document.DocumentID,
      DocumentName: Document.DocumentName,
      DocumentCreatedOn: Document.DocumentCreatedOn,
      DocumentIsPublic: Document.DocumentIsPublic,
    }));
  } catch (error) {
    console.error("Error fetching Documents:", error);
    throw new Error("Error fetching Documents");
  }
}

// Fetch a specific Document by  DocumentID
export async function getDocumentById(id: string) {
  try {
    const DocumentDashboard = await prisma.document.findUnique({
      where: {
        DocumentID: id, // Assumes the Document `id` field is a unique identifier in your database
      },
    });
    return DocumentDashboard;
  } catch (error) {
    console.error("Error fetching Document:", error);
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
