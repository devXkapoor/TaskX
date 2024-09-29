// StudentDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { getStudents } from "@/actions/StudentActions";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

// Define the type for student data
export type StudentTableColumns = {
    id: string,
    // StudentID: string;
    StudentName: string;
    StudentEnrolmentNumber: string;
    StudentStudyBranch: string;
    StudentStudyYear: string;
    StudentContactNumber: string;
    StudentInstituteEmailID: string;
};

export default function StudentDataTable() {
    const [students, setStudents] = useState<StudentTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const studentData = await getStudents();
            setStudents(studentData);
        }
        fetchData();
    }, []);

    const studentColumns: ColumnDef<StudentTableColumns>[] = [
        {
            accessorKey: "StudentName",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("StudentName")}</div>,
        },
        {
            accessorKey: "StudentEnrolmentNumber",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Enrollment No. <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("StudentEnrolmentNumber")}</div>,
        },
        {
            accessorKey: "StudentStudyBranch",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Branch <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("StudentStudyBranch")}</div>,
        },
        {
            accessorKey: "StudentStudyYear",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Year <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("StudentStudyYear")}</div>,
        },
        {
            accessorKey: "StudentContactNumber",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Contact Number <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("StudentContactNumber")}</div>,
        },
        {
            accessorKey: "StudentInstituteEmailID",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Institute Email ID <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("StudentInstituteEmailID")}</div>,
        },
    ];

    return <DataTable data={students} columns={studentColumns} CardName="Student" />;
}
