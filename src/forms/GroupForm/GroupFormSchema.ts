import { z } from "zod";

const GroupFormSchema = z.object({
  GroupName: z
    .string()
    .min(2, { message: "Group's name must be at least 2 characters long." }),
  GroupDescription: z
    .string()
    .min(2, {
      message: "Group's description must be at least 2 characters long.",
    }),
});

export default GroupFormSchema;
