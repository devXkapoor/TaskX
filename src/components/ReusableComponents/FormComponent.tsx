import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components/ui imports
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// Props for form fields
export type FormFieldProps = {
    name: string,
    label: string,
    placeholder: string,
    description?: string
};

interface FormComponentProps {
    fields: FormFieldProps[];
    formSchema: z.ZodObject<any>;
    action: (formData: FormData) => void;  // Server-side action function
    submitLabel: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ fields, formSchema, action, submitLabel }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        // defaultValues: fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
    });

    return (
        <>
            <Form {...form}>
                {/* Pass the action as a server function */}
                <form action={action}>
                    {fields.map((field: FormFieldProps) => (
                        <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({ field: formField }) => (
                                <FormItem className="bg-blue-950 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-gray-300 focus:bg-gray-100">
                                    <FormLabel className="my-6 block text-lg font-medium text-white mb-2">
                                        {field.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={field.placeholder}
                                            {...formField}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:border-gray-300 focus:bg-gray-100"
                                        />
                                    </FormControl>
                                    {field.description && (
                                        <FormDescription>
                                            {field.description}
                                        </FormDescription>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className="mt-6 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
                        {submitLabel} {/* Submit button label passed as prop */}
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default FormComponent;
