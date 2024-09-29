"use client";

import * as React from "react"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    FilterFnOption,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FilterFn, Row } from "@tanstack/react-table";
import { getStudents } from "@/actions/StudentActions"
import Link from "next/link"

// Define the StudentTableColumns type
export type StudentTableColumns = {
    id: string
    StudentName: string
    StudentEnrolmentNumber: string
    StudentStudyBranch: string
    StudentStudyYear: string
    StudentContactNumber: string
    StudentInstituteEmailID: string
}

// Fetching students data
const fetchStudents = async (): Promise<StudentTableColumns[]> => {
    const students = await getStudents();
    return students;
}

export function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [globalFilter, setGlobalFilter] = React.useState("")

    const [data, setData] = React.useState<StudentTableColumns[]>([])

    // Fetch and set data on component mount
    React.useEffect(() => {
        const loadStudents = async () => {
            const students = await fetchStudents();
            setData(students);
        }
        loadStudents();
    }, []);


    // Define a global filter function
    // const globalFilterFn: FilterFn<StudentTableColumns> = (row, columnIds, filterValue) => {
    //     const rowValues = columnIds.map(id => row.getValue(id)?.toString().toLowerCase() || "");
    //     return rowValues.some(value => value.includes(filterValue.toLowerCase()));
    // };


    // Define table columns
    const columns: ColumnDef<StudentTableColumns>[] = [
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
    ]

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        // globalFilterFn,
    })

    return (
        <div className="p-4">
            <div className="flex items-center justify-between pb-4">
                <Input
                    placeholder="Filter by..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Table Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={table.getIsAllColumnsVisible()}
                            onCheckedChange={(value) => table.toggleAllColumnsVisible(!!value)}
                        >
                            Toggle All Columns
                        </DropdownMenuCheckboxItem>
                        {table.getAllColumns().map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <TableHeader className="bg-gray-100 border-b border-gray-300">
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead
                                    key={header.id}
                                    className={`py-3 px-4 text-left text-sm font-semibold ${header.getContext().column.getCanSort() ? "cursor-pointer hover:bg-gray-200" : ""
                                        }`}
                                    onClick={header.getContext().column.getCanSort() ? header.getContext().column.getToggleSortingHandler() : undefined}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div className="flex items-center">
                                            {flexRender(
                                                header.getContext().column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />,
                                                desc: <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 rotate-180" />,
                                            }[header.getContext().column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id} className="py-2 px-4 text-sm text-gray-700">
                                    {/* Check if the column is 'name', make it clickable */}
                                    {cell.column.id === 'name' ? (
                                        <Link
                                            href={`/StudentList/${row.original.id}`} // Create dynamic route to student dashboard
                                            className="text-blue-600 hover:underline"
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Link>
                                    ) : (
                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between pt-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
