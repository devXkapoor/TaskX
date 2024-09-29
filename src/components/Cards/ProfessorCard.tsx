"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewProfessor } from "@/actions/ProfessorActions";
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


import ProfessorFormSchema from "@/forms/ProfessorForm/ProfessorFormSchema";
import ProfessorFormFields from "@/forms/ProfessorForm/ProfessorFormFields";
import { Button } from "../ui/button";


interface ProfessorCardProps {
    title: string;
    description?: string;
}


// Zod Schema for Form Validation
const FormSchema = ProfessorFormSchema;

// Form Fields
const fields = ProfessorFormFields;

const ProfessorCard: React.FC<ProfessorCardProps> = ({ title, description
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
                        title="Add a new Professor"
                        description="Fill out the Professor details below"
                        triggerText="Add a new Professor"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewProfessor}  // This is the server-side function
                            submitLabel="Add Professor"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push("/ProfessorList")}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing Professors
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default ProfessorCard

