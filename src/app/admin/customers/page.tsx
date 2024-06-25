import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import customers from "@/data/users.json";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl p-4 text-blue-950">Customers :</h1>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Recent Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.data.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.phone}</TableCell>
              <TableCell>{invoice.notes}</TableCell>
              <TableCell>{invoice.recent_activity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
};

export default page;
