import { z } from "zod";

const ProfessorFormSchema = z.object({
  ProfessorName: z
    .string()
    .min(2, {
      message: "Professor's name must be at least 2 characters long.",
    }),
  ProfessorRegistrationNumber: z
    .string()
    .min(8, { message: "Registration Number must have exactly 8 digits." }),
  ProfessorDepartment: z
    .string()
    .min(2, { message: "Department name must be at least 2 characters long." }),
  ProfessorInstituteEmailID: z
    .string()
    .min(8, { message: "Enter a valid Email ID." }),
  ProfessorPersonalEmailID: z
    .string()
    .min(8, { message: "Enter a valid Email ID." }),
});

export default ProfessorFormSchema;
