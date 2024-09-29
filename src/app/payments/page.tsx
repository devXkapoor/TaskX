"use client";
import React, {useEffect, useState} from "react"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// interface StudentData {
//     StudentName: string;
//     StudentEnrolmentNumber: string;
//     StudentStudyBranch: string;
//     StudentStudyYear: string;
//     StudentContactNumber: string;
//     StudentEmail: string;
// }

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.const [studentData, setStudentData] = useState<StudentData[]>([])
//   const [studentData, setStudentData] = useState<StudentData[]>([])

    // useEffect(() => {
    //     fetch('/api/professor')
    //         .then((res) => res.json())
    //         .then((data) => setStudentData(data.StudentData))
    // }, [])
  return [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
      },
      {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
      },
      {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
      },
      {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
      },
      {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10 text-white">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
