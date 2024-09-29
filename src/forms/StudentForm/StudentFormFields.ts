import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const StudentFormFields: FormFieldProps[] = [
  { name: "StudentName", label: "Student's Name", placeholder: "Enter name" },

  {
    name: "StudentEnrolmentNumber",
    label: "Enrolment Number",
    placeholder: "Enter enrolment number",
  },

  { name: "StudentStudyBranch", label: "Branch", placeholder: "Enter branch" },

  {
    name: "StudentStudyYear",
    label: "Year of Study",
    placeholder: "Enter year",
  },

  {
    name: "StudentContactNumber",
    label: "Contact Number",
    placeholder: "Enter contact number",
  },

  {
    name: "StudentInstituteEmailID",
    label: "Institute Email ID",
    placeholder: "Enter email",
  },
];

export default StudentFormFields;
