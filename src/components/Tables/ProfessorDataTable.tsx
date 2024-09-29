// ProfessorDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { getProfessors } from "@/actions/ProfessorActions";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

// Define the type for Professor data
export type ProfessorTableColumns = {
    id: string,
    // ProfessorID: string;
    ProfessorName: string;
    ProfessorRegistrationNumber: string;
    ProfessorDepartment: string;
    ProfessorInstituteEmailID: string;
    ProfessorPersonalEmailID: string;
    ProfessorAreaOfInterest: string | null;
};

export default function ProfessorDataTable() {
    const [Professors, setProfessors] = useState<ProfessorTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const ProfessorData = await getProfessors();
            setProfessors(ProfessorData);
        }
        fetchData();
    }, []);

    const ProfessorColumns: ColumnDef<ProfessorTableColumns>[] = [
        {
            accessorKey: "ProfessorName",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("ProfessorName")}</div>,
        },
        {
            accessorKey: "ProfessorRegistrationNumber",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Registration Number <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProfessorRegistrationNumber")}</div>,
        },
        {
            accessorKey: "ProfessorDepartment",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Department <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProfessorDepartment")}</div>,
        },
        {
            accessorKey: "ProfessorInstituteEmailID",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Institute Email ID <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProfessorInstituteEmailID")}</div>,
        },
        {
            accessorKey: "ProfessorPersonalEmailID",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Persoanl Email ID <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProfessorPersonalEmailID")}</div>,
        },
        {
            accessorKey: "ProfessorAreaOfInterest",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Area of Interest <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("ProfessorAreaOfInterest")}</div>,
        },
    ];

    return <DataTable data={Professors} columns={ProfessorColumns} CardName="Professor" />;
}
