import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const ProjectFormFields: FormFieldProps[] = [
  { name: "ProjectTitle", label: "Project Title", placeholder: "Enter title" },
  {
    name: "ProjectDepartment",
    label: "Project Department",
    placeholder: "Enter department",
  },
  {
    name: "ProjectDescription",
    label: "Project Description",
    placeholder: "Enter description",
  },
  {
    name: "ProjectRelevantFiles",
    label: "Relevant Files for the Project",
    placeholder: "Upload Files",
  },
  {
    name: "ProjectRelevantLinks",
    label: "Relevant Links for the Project",
    placeholder: "Enter links",
  },
  {
    name: "ProjectDeadline",
    label: "Project Submission Deadline",
    placeholder: "Enter a Date",
  },
];

export default ProjectFormFields;
