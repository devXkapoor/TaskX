import { z } from "zod";

const LoginFormSchema = z.object({
  LoginEmail: z.string().min(8, { message: "Enter a valid email address." }),

  LoginPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export default LoginFormSchema;
