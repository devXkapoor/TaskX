"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewGroup } from "@/actions/GroupActions";
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


import GroupFormSchema from "@/forms/GroupForm/GroupFormSchema";
import GroupFormFields from "@/forms/GroupForm/GroupFormFields";
import { Button } from "../ui/button";


interface GroupCardProps {
    title: string;
    description?: string;
}


// Zod Schema for Form Validation
const FormSchema = GroupFormSchema;

// Form Fields
const fields = GroupFormFields;

const GroupCard: React.FC<GroupCardProps> = ({ title, description
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
                        title="Add a new Group"
                        description="Fill out the Group details below"
                        triggerText="Add a new Group"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewGroup}  // This is the server-side function
                            submitLabel="Add Group"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push("/GroupList")}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing Groups
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default GroupCard

