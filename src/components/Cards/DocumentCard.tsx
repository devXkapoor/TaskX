"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewDocument } from "@/actions/DocumentActions";
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


import DocumentFormSchema from "@/forms/DocumentForm/DocumentFormSchema";
import DocumentFormFields from "@/forms/DocumentForm/DocumentFormFields";
import { Button } from "../ui/button";


interface DocumentCardProps {
    title: string;
    description?: string;
}


// Zod Schema for Form Validation
const FormSchema = DocumentFormSchema;

// Form Fields
const fields = DocumentFormFields;

const DocumentCard: React.FC<DocumentCardProps> = ({ title, description
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
                        title="Add a new Document"
                        description="Fill out the Document details below"
                        triggerText="Add a new Document"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewDocument}  // This is the server-side function
                            submitLabel="Add Document"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push("/DocumentList")}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing Documents
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default DocumentCard

