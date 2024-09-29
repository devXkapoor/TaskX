"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewStudent } from "@/actions/StudentActions";
import ScrollableDialog from "../ReusableComponents/ScrollableDialog";
import { useRouter } from "next/navigation";


// components/ui imports
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import StudentFormSchema from "@/forms/StudentForm/StudentFormSchema";
import StudentFormFields from "@/forms/StudentForm/StudentFormFields";
import { DataTableDemo } from "../TableComponent";
import { Button } from "../ui/button";


interface StudentCardProps {
    title: string;
    description?: string;
}


// Zod Schema for Form Validation
const FormSchema = StudentFormSchema;

// Form Fields
const fields = StudentFormFields;

const StudentCard: React.FC<StudentCardProps> = ({ title, description
}) => {

    const router = useRouter();

    return (
        <>
            <Card className="m-10 w-[450px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollableDialog
                        title="Add a new student"
                        description="Fill out the student details below"
                        triggerText="Add a new student"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewStudent}  // This is the server-side function
                            submitLabel="Add Student"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push(`/StudentList`)}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing students
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default StudentCard

