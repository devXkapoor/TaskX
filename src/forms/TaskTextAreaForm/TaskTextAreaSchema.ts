import { z } from "zod";

const TaskTextAreaFormSchema = z.object({
  TaskDetails: z.string().min(2, {
    message: "Task's Details must be at least 2 characters long.",
  }),
});

export default TaskTextAreaFormSchema;
