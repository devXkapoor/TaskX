import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const TaskFormFields: FormFieldProps[] = [
  { name: "TaskTitle", label: "Title", placeholder: "Enter Task Title" },
  {
    name: "TaskDescription",
    label: "Description",
    placeholder: "Enter Task Description",
  },
  {
    name: "TaskRelevantFiles",
    label: "Relevant Files",
    placeholder: "Upload Files",
  },
  {
    name: "TaskRelevantLinks",
    label: "Relevant Links",
    placeholder: "Enter Links",
  },
  {
    name: "TaskSubmissionDeadline",
    label: "Submission Deadline",
    placeholder: "Enter a Date",
  },
];

export default TaskFormFields;
