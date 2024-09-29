"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewTask } from "@/actions/TaskActions";
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

import TaskFormSchema from "@/forms/TaskForm/TaskFormSchema";
import TaskFormFields from "@/forms/TaskForm/TaskFormFields";
import { Button } from "../ui/button";

interface TaskCardProps {
    title: string;
    description?: string;
}

// Zod Schema for Form Validation
const FormSchema = TaskFormSchema;

// Form Fields
const fields = TaskFormFields;

const TaskCard: React.FC<TaskCardProps> = ({ title, description
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
                        title="Add a new Task"
                        description="Fill out the Task details below"
                        triggerText="Add a new Task"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewTask}  // This is the server-side function
                            submitLabel="Add Task"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push("/TaskList")}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing Tasks
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default TaskCard

