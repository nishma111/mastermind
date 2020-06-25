import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function OutputTable({ rows }) {
  console.log(rows);
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Input</TableCell>
          <TableCell>Position Correct</TableCell>
          <TableCell>Position Incorrect</TableCell>
          <TableCell>Incorrect</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.Input}
            </TableCell>
            <TableCell>{row.Positioncorrect}</TableCell>
            <TableCell>{row.Positionincorrect}</TableCell>
            <TableCell>{row.Incorrect}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
