import { z } from "zod";

const DocumentFormSchema = z.object({
  DocumenttName: z
    .string()
    .min(2, { message: "Document's name must be at least 2 characters long." }),
});

export default DocumentFormSchema;
