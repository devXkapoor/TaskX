"use client";


// React imports
import React from 'react'

import { AddANewTask } from "@/actions/TaskActions";
import FormComponent from "@/components/ReusableComponents/FormComponent";
import ScrollableDialog from "@/components/ReusableComponents/ScrollableDialog";
import TaskDataTable from "@/components/Tables/TaskDataTable";
import { Button } from "@/components/ui/button";
import TaskFormFields from "@/forms/TaskForm/TaskFormFields";
import TaskFormSchema from "@/forms/TaskForm/TaskFormSchema";
import { useRouter } from "next/navigation";

// Zod Schema for Form Validation
const FormSchema = TaskFormSchema;

// Form Fields
const fields = TaskFormFields;

const Home = async () => {

  const router = useRouter();
  return (
    <>

      <div className=" justify-center items-center">
        <div className="p-6">
          <Button
            onClick={() => router.back()}
            className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </Button>

          <h1 className="text-2xl font-bold mb-4 text-white">List of Existing Tasks</h1>
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
        </div>
        <TaskDataTable />

      </div>
    </>
  )
}

export default Home