import * as React from 'react';
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
} from '@tanstack/react-table';
import { ChevronDown, Download, MoreHorizontal, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Task } from './types';
import { AppBar } from '../AppBar';
import { getTasks } from './api/getTasks';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { DateFormater } from '@/lib/DateFormater';
import { deleteTask } from './api/deleteTask';

const TaskList: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);
  console.log("Selected Task: ", selectedTask);
  console.log("openModal: ", openModal);
  const projectId = useSelector((state: AppState) => state.selectedProjectId);

  const fetchData = async () => {
    if (!projectId) return;

    try {
      const tasks = await getTasks(projectId);
      if (tasks.status === 200) {
        setData(tasks.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [projectId]);

  const handleDelete = async (task: Task) => {
    if (!confirm(`Are you sure you want to delete the task "${task.title}"?`)) return;

    try {
      await deleteTask(projectId, parseInt(task.id!.toString()));
      fetchData();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  const columns: ColumnDef<Task>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={!!table.getIsAllPageRowsSelected() || !!table.getIsSomePageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={!!row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div className="capitalize">{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => <div>{DateFormater({ dateString: row.getValue('dueDate') })}</div>,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      cell: ({ row }) => <div className="capitalize">{row.getValue('assignee')}</div>,
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      cell: ({ row }) => <div className="capitalize">{row.getValue('priority')}</div>,
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const task = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleEditTask(task)}>
                Edit Task
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(task)}>
                Delete Task
              </DropdownMenuItem>
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
    <>
      <div className="min-h-screen w-full px-5">
        <AppBar
          title="Tasks"
          description="Manage your tasks efficiently"
          buttons={[
            {
              title: 'Create Task',
              onClick: () => {
                setSelectedTask(null);
                setOpenModal(true);
              },
              icon: <PlusIcon size={15} />,
            },
            { title: 'Download', onClick: () => {}, icon: <Download size={15} /> },
          ]}
        />
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter tasks..."
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border border-2">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    No tasks available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
