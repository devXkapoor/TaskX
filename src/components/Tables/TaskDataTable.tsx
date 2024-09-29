// TaskDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { getTasks } from "@/actions/TaskActions";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

// Define the type for Task data
export type TaskTableColumns = {
    id: string,
    // TaskID: string;
    TaskTitle: string;
    TaskDescription: string;
    TaskStatus: string | null;
    TaskRelevantFiles: string;
    TaskRelevantLinks: string;
    TaskSubmissionDeadline: string;
};

export default function TaskDataTable() {
    const [Tasks, setTasks] = useState<TaskTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const TaskData = await getTasks();
            setTasks(TaskData);
        }
        fetchData();
    }, []);

    const TaskColumns: ColumnDef<TaskTableColumns>[] = [
        {
            accessorKey: "TaskTitle",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Task Title <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("TaskTitle")}</div>,
        },
        {
            accessorKey: "TaskDescription",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Task Description <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskDescription")}</div>,
        },
        {
            accessorKey: "TaskStatus",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskStatus")}</div>,
        },
        {
            accessorKey: "TaskRelevantFiles",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Relevant Files for the Task <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskRelevantFiles")}</div>,
        },
        {
            accessorKey: "TaskRelevantLinks",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Relevant Links for the Task <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskRelevantLinks")}</div>,
        },
        {
            accessorKey: "TaskSubmissionDeadline",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Submission Deadline <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskSubmissionDeadline")}</div>,
        },
    ];

    return <DataTable data={Tasks} columns={TaskColumns} CardName="Task" />;
}
