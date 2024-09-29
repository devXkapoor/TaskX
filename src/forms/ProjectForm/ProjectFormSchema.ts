import { z } from "zod";

const ProjectFormSchema = z.object({
  ProjectTitle: z
    .string()
    .min(2, { message: "Project's title must be at least 2 characters long." }),
  ProjectDepartment: z
    .string()
    .min(2, { message: "Department name must be at least 2 characters long." }),
  ProjectDescription: z
    .string()
    .min(2, {
      message: "Project's description must be at least 2 characters long.",
    }),
  ProjectRelevantFiles: z.string().min(2, { message: "Upload a file." }),
  ProjectLinks: z.string().min(2, { message: "Enter valid links." }),
  ProjectDeadline: z.date(),
});

export default ProjectFormSchema;
