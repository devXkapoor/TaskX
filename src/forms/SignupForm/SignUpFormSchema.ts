import { z } from "zod";

const SignUpFormSchema = z.object({
  SignUpName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),

  SignUpEmail: z.string().min(8, { message: "Enter a valid email address." }),

  SignUpPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export default SignUpFormSchema;
