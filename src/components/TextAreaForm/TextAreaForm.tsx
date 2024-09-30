"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { AddNewTaskDetails } from "@/actions/TaskActions"
import { Textarea } from "../ui/textarea"

export const FormSchema = z.object({
    TaskDetails: z.string()
    // .min(2, {
    //     message: "Task's Details must be at least 2 characters long.",
    // }),
});

export default function TextAreaForm({ taskId }: { taskId: string }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            TaskDetails: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        await AddNewTaskDetails(data, taskId)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="TaskDetails"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl ">Task Details</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Complete Web Dev Assignment.." {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" onClick={() => { }}>Add Task Details</Button>
            </form>
        </Form>
    )
}
