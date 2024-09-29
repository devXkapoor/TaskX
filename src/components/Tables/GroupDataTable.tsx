// GroupDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { getGroups } from "@/actions/GroupActions";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

// Define the type for Group data
export type GroupTableColumns = {
    id: string,
    // GroupID: string;
    GroupName: string;
    GroupDescription: string;
    GroupMembers: string | null;
    GroupStudents: string | null;
    GroupProfessors: string | null;
};

export default function GroupDataTable() {
    const [Groups, setGroups] = useState<GroupTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const GroupData = await getGroups();
            setGroups(GroupData);
        }
        fetchData();
    }, []);

    const GroupColumns: ColumnDef<GroupTableColumns>[] = [
        {
            accessorKey: "GroupName",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("GroupName")}</div>,
        },
        {
            accessorKey: "GroupDescription",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Description <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("GroupDescription")}</div>,
        },
        {
            accessorKey: "GroupMembers",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Members <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("GroupMembers")}</div>,
        },
        {
            accessorKey: "GroupStudents",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Students <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("GroupStudents")}</div>,
        },
        {
            accessorKey: "GroupProfessors",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Professors <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("GroupProfessors")}</div>,
        },
    ];

    return <DataTable data={Groups} columns={GroupColumns} CardName="Group" />;
}
