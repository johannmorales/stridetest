"use client";

import { Pencil, PictureIcon } from "@/components/icons";
import { Deal, DealPage } from "@/lib/graphql/graphql";
import { DateFormatter } from "@internationalized/date";
import {
  Avatar,
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

const formatter = new DateFormatter("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const columnHelper = createColumnHelper<Deal>();

const columns: ColumnDef<Deal, any>[] = [
  columnHelper.display({
    id: "photo",
    header: () => <PictureIcon />,
    cell: (props) => (
      <Avatar
        aria-label="avatar"
        className="h-12 w-12"
        src="https://s3-alpha-sig.figma.com/img/5b15/112a/3ed4a9ea7c9d14fe939ada90d359e26b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqhrOnjhwiFM~uIz7y38h7h2O9NZsqmHpjVq4rnsRKjRtU1Ac9kJKuD97I3Z9vkWwuISV8Y6MGZZVRzUFV7qakAVaTQ0PWq3aKMlh475g~kp7WwWillBtR-pojoqRC33L9q56a4hTZ1mnOAiICaQIyF~6VBBs7bX8i22HDZ~vcP6qSnwvwPx-ik3Dg1UeZPfNftoI~IkNTX49JrLP6IGmqnP84YtvMKbLxb47XBkvl3YBP3yfIYKP1itDLNZfz1v-p1y7reuEHK8rGq3Jyq9O-6f5OfgTssqxUCiXFWIS0IEFldk4P6F-n6iRXpFbRf8Xyr7fhc28cedtPovCfUxFQ__"
      />
    ),
  }),
  columnHelper.accessor(
    (row) => `${row.address}, ${row.city}, ${row.state}, ${row.zipCode}`,
    {
      id: "name",
      header: "Name",
    },
  ),
  columnHelper.display({
    id: "area",
    header: "Area",
    cell: (props) => <>{props.row.original.area}M²</>,
  }),
  columnHelper.accessor((row) => formatter.format(new Date(row.date!)), {
    id: "date",
    header: "Appointment Date",
  }),
  columnHelper.accessor((row) => `$${row.price}`, {
    id: "price",
    header: "Price",
  }),
  columnHelper.display({
    id: "status",
    header: "Status",
    cell: (props) => (
      <div className="flex justify-start items-center">
        <div className="text-xs md:text-md rounded-full p-2 w-[140px] md:p-4 bg-[#ECECFE] text-primary px-6 text-center">
          {props.row.original.status?.toUpperCase()}
        </div>
      </div>
    ),
  }),
  columnHelper.display({
    id: "edit",
    header: "",
    cell: (props) => (
      <div className="flex justify-center items-center">
        <Button
          radius="full"
          className="min-w-0 h-12 w-12 text-xs md:text-md rounded-full p-2 md:p-4 bg-transparent text-primary px-6 text-center"
        >
          <Pencil />
        </Button>
      </div>
    ),
  }),
];

export function DealsTable({
  data,
  loadMore,
}: {
  data: Deal[];
  loadMore: () => void;
}) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table
      removeWrapper
      shadow="none"
      fullWidth
      isHeaderSticky
      bottomContent={
        <div className="flex w-full justify-center ">
          <Button
            variant="flat"
            className="border border-[#EAEEF4] bg-white rounded-full px-8 py-6"
            onPress={loadMore}
          >
            Load More
          </Button>
        </div>
      }
    >
      <TableHeader className="border-none shadow-none border-b-1 border-[#EAEEF4]">
        {table
          .getHeaderGroups()
          .map((headerGroup) => headerGroup.headers)
          .flat()
          .map((header) => (
            <TableColumn
              key={header.id}
              colSpan={header.colSpan}
              className="text-xs md:text-base text-muted font-medium text-left p-4 bg-[#F6FAFD] border-none shadow-none"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableColumn>
          ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className="border-b-1 border-[#EAEEF4]">
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell key={cell.id} className="text-sm md:text-base p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
