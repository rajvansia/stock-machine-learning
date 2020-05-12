import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function createData(stock, calories, fat, carbs, protein) {
  return { stock, calories, fat, carbs, protein };
}

const rows = [
  createData('JPM', 159, 6.0, 24, 4.0),
  createData('UHS', 237, 9.0, 37, 4.3),
  createData('BYND', 262, 16.0, 24, 6.0),
  createData('T', 305, 3.7, 67, 4.3),
  createData('JHJ', 356, 16.0, 49, 3.9),
];

function Screener(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Stock Symbol</TableCell>
             <TableCell align="right">Price</TableCell>
             <TableCell align="right">Buy Raiting</TableCell>
             <TableCell align="right">In Depth Analysis</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map((row) => (
             <TableRow key={row.stock}>
               <TableCell component="th" scope="row">
                 {row.stock}
               </TableCell>
               <TableCell align="right">{row.calories}</TableCell>
               <TableCell align="right">{row.fat}</TableCell>
               <TableCell align="right">{row.carbs}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
  );
}

export default Screener;