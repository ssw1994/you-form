import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { records } from "../../../store/selectors/records.selector";

export default function PersonList() {
  const files = useSelector(records);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((user) => {
          return (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
