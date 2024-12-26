import * as React from 'react';
import { ColumnDef, useReactTable } from '@tanstack/react-table';
import { ChevronDown, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppBar } from '../AppBar';
import { Modal } from '../Modal';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { DateFormater } from '@/lib/DateFormater';

const TodayList: React.FC = () => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState<any[]>([]);

  const projectId = useSelector((state: AppState) => state.selectedProjectId);

  const fetchData = async () => {
    // Fetch tasks based on the projectId
  };

  React.useEffect(() => {
    fetchData();
  }, [projectId]);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div className="capitalize">{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => <div className="capitalize">{DateFormater({ dateString: row.getValue('dueDate') })}</div>,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      cell: ({ row }) => <div className="capitalize">{row.getValue('assignee')}</div>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
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
          title="Today's Tasks"
          description="Manage today's tasks efficiently"
          buttons={[
            {
              title: 'Create Task',
              onClick: () => setOpenModal(true),
              icon: <PlusIcon size={15} />,
            },
          ]}
        />
        <div className="flex items-center py-4">
          <Input placeholder="Filter tasks..." value={table.getColumn('title')?.getFilterValue() as string} onChange={(e) => table.getColumn('title')?.setFilterValue(e.target.value)} className="max-w-sm" />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>{header.isPlaceholder ? null : header.column.columnDef.header}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{cell.renderCell()}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No tasks available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Create Task">
        {/* Task form */}
      </Modal>
    </>
  );
};

export default TodayList;
