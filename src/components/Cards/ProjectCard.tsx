"use client";

import FormComponent from "../ReusableComponents/FormComponent";
import { AddANewProject } from "@/actions/ProjectActions";
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

import ProjectFormSchema from "@/forms/ProjectForm/ProjectFormSchema";
import ProjectFormFields from "@/forms/ProjectForm/ProjectFormFields";
import { Button } from "../ui/button";

interface ProjectCardProps {
    title: string;
    description?: string;
}

// Zod Schema for Form Validation
const FormSchema = ProjectFormSchema;

// Form Fields
const fields = ProjectFormFields;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description
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
                        title="Add a new project"
                        description="Fill out the project details below"
                        triggerText="Add a new project"
                    >
                        <FormComponent
                            formSchema={FormSchema}
                            fields={fields}
                            action={AddANewProject}  // This is the server-side function
                            submitLabel="Add Project"  // Custom submit button label
                        />
                    </ScrollableDialog>

                    <br /><br />

                    <div>
                        <Button
                            onClick={() => router.push("/ProjectList")}
                            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                            See existing projects
                        </Button>
                    </div>

                </CardContent >
                <CardFooter>
                </CardFooter>
            </Card >
        </>
    )
}

export default ProjectCard

