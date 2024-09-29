"use client";

import { DataTableDemo } from "@/components/TableComponent"; // Adjust the import path as needed
import ProfessorDataTable from "@/components/Tables/ProfessorDataTable";
import StudentDataTable from "@/components/Tables/StudentDataTable";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const StudentsPage = () => {
    const router = useRouter();

    return (
        <div className="p-6">
            <Button
                onClick={() => router.back()}
                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
            >
                Back
            </Button>

            <h1 className="text-2xl font-bold mb-4 text-white">List of Existing Students</h1>
            <ProfessorDataTable />
        </div>
    );
};

export default StudentsPage;
