import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const ProfessorFormFields: FormFieldProps[] = [
  {
    name: "ProfessorName",
    label: "Professor's Name",
    placeholder: "Enter name",
  },

  {
    name: "ProfessorRegistrationNumber",
    label: "Registration Number",
    placeholder: "Enter Registration Number",
  },

  {
    name: "ProfessorDepartment",
    label: "Department",
    placeholder: "Enter department",
  },

  {
    name: "ProfessorInstituteEmailID",
    label: "Institute Email ID",
    placeholder: "Enter Institute Email ID",
  },

  {
    name: "ProfessorPersonalEmailID",
    label: "Personal Email ID",
    placeholder: "Enter Personal Email ID",
  },
];

export default ProfessorFormFields;
