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
import { IconButton, Typography, TableSortLabel, TablePagination } from '@material-ui/core';
import ShowChart from '@material-ui/icons/ShowChart';
import {Link} from "react-router-dom";

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

const ros = [
  createData('JPM', 159, 6.0, 24, 4.0),
  createData('UHS', 237, 9.0, 37, 4.3),
  createData('BYND', 262, 16.0, 24, 6.0),
  createData('T', 305, 3.7, 67, 4.3),
  createData('JHJ', 356, 16.0, 49, 3.9),
];

function Screener(props) {
  const classes = useStyles();
  console.log(props.predicthistory.data);
  let rows = props.predicthistory.data
  return (
    <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Stock Symbol</TableCell>
             <TableCell align="right">Machine Trader Return</TableCell>
             <TableCell align="right">Number of Trades</TableCell>
             <TableCell align="right">Buy and Hold Return</TableCell>
             <TableCell align="right">In Depth Analysis</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map((row) => (
             <TableRow key={row.symbol}>
               <TableCell component="th" scope="row">
                 {row.symbol}
               </TableCell>
               <TableCell align="right">{row.machine_cr}</TableCell>
               <TableCell align="right">{row.num_trades}</TableCell>
                <TableCell align="right">{row.hold_cr}</TableCell>
               <TableCell align="right"><IconButton href={"analyze?name="+row.symbol} color='primary'>
                      <ShowChart/>
                    </IconButton></TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
  );
}

export default Screener;