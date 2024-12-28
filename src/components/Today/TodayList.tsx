import * as React from 'react';
import { ColumnDef, SortingState, ColumnFiltersState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ChevronDown, Download, MoreHorizontal, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Task } from './types';
import { AppBar } from '../AppBar';
import { DateFormater } from '@/lib/DateFormater';
import { jsPDF } from 'jspdf';

// Dummy data for tasks
const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', status: 'In Progress', dueDate: '2024-12-28', assignee: 'John Doe', priority: 'High' },
  { id: '2', title: 'Task 2', status: 'Completed', dueDate: '2024-12-25', assignee: 'Jane Doe', priority: 'Low' },
  { id: '3', title: 'Task 3', status: 'Pending', dueDate: '2024-12-30', assignee: 'Alice Smith', priority: 'Medium' },
];

const TodaysList: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);

  // Handle delete task
  const handleDelete = (taskId: string) => {
    setData((prevData) => prevData.filter((task) => task.id !== taskId));
  };

  // Handle edit task (you could extend this functionality with a modal or form)
  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    const newTask = {
      id: String(data.length + 1),
      title: 'New Task',
      status: 'Pending',
      dueDate: '2024-12-31',
      assignee: 'New Assignee',
      priority: 'Medium',
    };
    setData((prevData) => [...prevData, newTask]);
  };

  // Handle downloading tasks as CSV
  const handleDownloadCSV = () => {
    const csvData = data.map((task) => ({
      'Title': task.title,
      'Status': task.status,
      'Due Date': task.dueDate,
      'Assignee': task.assignee,
      'Priority': task.priority,
    }));
    return csvData;
  };

  // Handle downloading tasks as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Task List', 10, 10);
    data.forEach((task, index) => {
      doc.text(`Task ${index + 1}: ${task.title} - ${task.status}`, 10, 20 + index * 10);
    });
    doc.save('tasks.pdf');
  };

  const columns: ColumnDef<Task>[] = [
    {
      id: 'select',
      header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div className="capitalize text-indigo-900">{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <div className="capitalize text-gray-700">{row.getValue('status')}</div>,
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => <div className="capitalize text-gray-600">{DateFormater({ dateString: row.getValue('dueDate') })}</div>,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      cell: ({ row }) => <div className="capitalize text-gray-600">{row.getValue('assignee')}</div>,
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      cell: ({ row }) => <div className="capitalize text-yellow-500">{row.getValue('priority')}</div>,
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const task = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500" aria-label="More actions">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg">
              <DropdownMenuLabel className="text-indigo-800">Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleEditTask(task)}>Edit Task</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(task.id)}>Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="min-h-screen w-full bg-gray-50 px-5 py-4">
      {' '}
      {/* Changed background color */}
      <AppBar
        title="Today's Tasks"
        description="View all tasks for today."
        buttons={[
          {
            title: 'Create Task',
            onClick: handleAddTask,
            icon: <PlusIcon size={15} />,
          },
          {
            title: 'Download PDF',
            onClick: handleDownloadPDF,
            icon: <Download size={15} />,
          },
        ]}
      />
      <div className="flex items-center space-x-4 py-4">
        <Input placeholder="Filter tasks..." value={(table.getColumn('title')?.getFilterValue() as string) ?? ''} onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)} className="max-w-xs border-indigo-400 focus:ring-indigo-500" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-indigo-700 hover:bg-indigo-100">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem key={column.id} className="capitalize text-indigo-800" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-indigo-200 shadow-lg">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="cursor-pointer transition-all hover:bg-indigo-50">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm text-indigo-600">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodaysList;
