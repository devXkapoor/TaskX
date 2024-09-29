import { z } from "zod";

const TaskFormSchema = z.object({
  TaskTitle: z
    .string()
    .min(2, { message: "Task's name must be at least 2 characters long." }),
  TaskDescription: z.string().min(2, {
    message: "Task's description must be at least 2 characters long.",
  }),
  TaskRelevantFiles: z.string().min(2, {
    message: "Task's relevant files must be at least 2 characters long.",
  }),
  TaskRelevantLinks: z.string().min(2, {
    message: "Task's relevant links must be at least 2 characters long.",
  }),
  TaskSubmissionDeadline: z.string(),
});

export default TaskFormSchema;
