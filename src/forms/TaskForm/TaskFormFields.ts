import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const TaskFormFields: FormFieldProps[] = [
  { name: "TaskTitle", label: "Title", placeholder: "Enter Task Title" },
  {
    name: "TaskDescription",
    label: "Description",
    placeholder: "Enter Task Description",
  },
  {
    name: "TaskBasicDeadline",
    label: "Basic Deadline",
    placeholder: "Enter a Date",
  },
  {
    name: "TaskAdvancedDeadline",
    label: "Advanced Deadline",
    placeholder: "Enter a Date",
  },
];

export default TaskFormFields;
