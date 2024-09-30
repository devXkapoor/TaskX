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
    TaskBasicDeadline: string;
    TaskAdvancedDeadline: string;
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
            accessorKey: "TaskBasicDeadline",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Basic Deadline <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskBasicDeadline")}</div>,
        },
        {
            accessorKey: "TaskAdvancedDeadline",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Advanced Deadline <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("TaskAdvancedDeadline")}</div>,
        },
    ];

    return <DataTable data={Tasks} columns={TaskColumns} CardName="Task" />;
}
