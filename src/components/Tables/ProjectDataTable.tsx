// ProjectDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { getProjects } from "@/actions/ProjectActions";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";


// Define the type for Project data
export type ProjectTableColumns = {
    id: string,
    // ProjectID: string;
    ProjectTitle: string;
    ProjectDepartment: string;
    ProjectDescription: string;
    ProjectRelevantFiles: string;
    ProjectRelevantLinks: string;
    ProjectExistingStudents: string | null;
    ProjectDeadline: string;
};

export default function ProjectDataTable() {
    const [Projects, setProjects] = useState<ProjectTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const ProjectData = await getProjects();
            setProjects(ProjectData);
        }
        fetchData();
    }, []);

    const ProjectColumns: ColumnDef<ProjectTableColumns>[] = [
        {
            accessorKey: "ProjectTitle",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("ProjectTitle")}</div>,
        },
        {
            accessorKey: "ProjectDepartment",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Department <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectDepartment")}</div>,
        },
        {
            accessorKey: "ProjectDescription",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Description <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectDescription")}</div>,
        },
        {
            accessorKey: "ProjectRelevantFiles",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Relevant Files for the Project <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectRelevantFiles")}</div>,
        },
        {
            accessorKey: "ProjectRelevantLinks",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Relevant Links for the Project <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectRelevantLinks")}</div>,
        },
        {
            accessorKey: "ProjectExistingStudents",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Students <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectExistingStudents")}</div>,
        },
        {
            accessorKey: "ProjectDeadline",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Project Submision Deadline <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProjectDeadline")}</div>,
        },
    ];

    return <DataTable data={Projects} columns={ProjectColumns} CardName="Project" />;
}
