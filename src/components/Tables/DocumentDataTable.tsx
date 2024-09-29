// DocumentDataTable.tsx
import React, { useEffect, useState } from "react";
import { DataTable } from "../ReusableComponents/DataTable"; // Import the reusable component
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { getDocuments } from "@/actions/DocumentActions";

// Define the type for student data
export type DocumentTableColumns = {
    id: string,
    // DocumentID: string;
    DocumentName: string;
    DocumentCreatedOn: Date | null;
    DocumentIsPublic: boolean | null;
};

export default function DocumentDataTable() {
    const [Documents, setDocuments] = useState<DocumentTableColumns[]>([]);

    useEffect(() => {
        async function fetchData() {
            const DocumentData = await getDocuments();
            setDocuments(DocumentData);
        }
        fetchData();
    }, []);


    const DocumentColumns: ColumnDef<DocumentTableColumns>[] = [
        {
            accessorKey: "DocumentName",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="capitalize">{row.getValue("DocumentName")}</div>,
        },
        {
            accessorKey: "DocumentCreatedOn",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Created on <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("DocumentCreatedOn")}</div>,
        },
        {
            accessorKey: "DocumentIsPublic",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Public? <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("DocumentIsPublic")}</div>,
        },

    ];

    return <DataTable data={Documents} columns={DocumentColumns} CardName="Document" />;
}
