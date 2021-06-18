import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {coutryName} from "../../lib/countryName"

import Paper from '@material-ui/core/Paper';
import numeral from "numeral";

import './Table.scss'
import {FormattedMessage} from "react-intl";

const headCells = [
    {id: 'country', numeric: false, disablePadding: true, label: <FormattedMessage id="Country"/>},
    {id: 'cases', numeric: true, disablePadding: false, label: <FormattedMessage id="Cases"/>},
    {id: 'recovered', numeric: true, disablePadding: false, label: <FormattedMessage id="Recovered"/>},
    {id: 'deaths', numeric: true, disablePadding: false, label: <FormattedMessage id="Deaths"/>},
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const textLen = (str) => {
    // const len = 12;
    return str
    // if (str.length >= 12) {
    //     return str.substring(0, len) + '...';
    // } else {
    //     return str
    // }
}


function TableJS({countries, sortData, order, onRequestSort, orderBy}) {

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableContainer component={Paper} style={{height: '400px'}}>
            <Table stickyHeader size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'center'}
                                padding={headCell.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === headCell.id ? order : false}
                                style={{width: headCell.id==='country'?'150px':'100px'}}
                            >
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    // onClick={()=> sortData(headCell.id)}
                                    onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stableSort(countries, getComparator(order, orderBy)).map(({
                                                                                   country,
                                                                                   cases,
                                                                                   recovered,
                                                                                   deaths,
                                                                                   countryInfo
                                                                               }, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                            <TableRow
                                hover
                                key={country}
                            >
                                <TableCell align="center">
                                    {textLen(country)}
                                    <img src={countryInfo.flag} style={{width: 20, marginLeft: 5}}/>
                                </TableCell>
                                <TableCell align="right">{numeral(cases).format("0,0")}</TableCell>
                                <TableCell align="right">{numeral(recovered).format("0,0")}</TableCell>
                                <TableCell align="right">{numeral(deaths).format("0,0")}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {countries.length === 0 && 'Country not found'}
        </TableContainer>
    )
}

export default TableJS
