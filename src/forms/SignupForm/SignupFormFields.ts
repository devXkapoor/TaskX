import { FormFieldProps } from "@/components/ReusableComponents/FormComponent";

const SignUpFormFields: FormFieldProps[] = [
  { name: "SignUpName", label: "Name", placeholder: "Enter your name" },

  {
    name: "SignUpEmail",
    label: "Email",
    placeholder: "Enter you Email address",
  },

  {
    name: "SignUpPassword",
    label: "Password",
    placeholder: "Enter your password",
  },
];

export default SignUpFormFields;
