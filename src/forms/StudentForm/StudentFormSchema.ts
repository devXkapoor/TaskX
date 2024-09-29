import { z } from "zod";

const StudentFormSchema = z.object({
  StudentName: z
    .string()
    .min(2, { message: "Student's name must be at least 2 characters long." }),
  StudentEnrolmentNumber: z
    .string()
    .min(8, { message: "Enrolment number must have exactly 8 digits." }),
  StudentStudyBranch: z
    .string()
    .min(2, { message: "Branch name must be at least 2 characters long." }),
  StudentStudyYear: z
    .string()
    .min(1, { message: "Study year must not be empty." }),
  StudentContactNumber: z
    .string()
    .min(10, { message: "Contact Number must have exactly 10 digits." }),
  StudentInstituteEmailID: z
    .string()
    .email({ message: "Please enter a valid email address." }),
});

export default StudentFormSchema;
