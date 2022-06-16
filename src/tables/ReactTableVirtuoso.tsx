import React from "react";
import {useTable} from 'react-table'
import {TableVirtuoso} from 'react-virtuoso'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Checkbox, Chip} from "@mui/material";

import {columns, rows as data} from "../data";
import {TABLE_HEIGHT} from "../App"
import {TableProps} from "./TableProps";


const handleClick = () => {
    console.info('You clicked the Chip.');
}

const leftColumns = columns.map(column => column.name).slice(0, 2)

export function ReactTableVirtuoso({withMuiComponents}: TableProps) {
    const reactColumns = React.useMemo(() => columns.map((column, index) => {
        const reactColumn: any = {
            Header: column.title,
            accessor: column.name
        }

        if (withMuiComponents) {
            if (index >= 1 && index <= 6) {
                reactColumn.Cell = ({value}: any) => (
                    <Chip
                        label={value}
                        onClick={handleClick}
                    />
                )
            }
            if (index >= 7 && index <= 12) {
                reactColumn.Cell = ({value}: any) => (
                    <Button variant="outlined" onClick={handleClick}>
                        {value}
                    </Button>
                )
            }
            if (column.name === "confirmed") {
                reactColumn.Cell = ({value}: any) => (
                    <Checkbox defaultChecked={value === "Yes"} onClick={handleClick}/>
                )
            }
        }

        return reactColumn
    }), [columns, withMuiComponents])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns: reactColumns, data})

    return (
        <TableVirtuoso
            style={{height: TABLE_HEIGHT.toString() + "px"}}
            data={data}
            components={{
                Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref}/>),
                Table: (props) => <Table {...props} {...getTableProps()} style={{borderCollapse: 'separate'}}/>,
                TableHead: (props) => <TableHead {...props} component={"thead"}/>,
                TableBody: React.forwardRef((props, ref) => <TableBody {...props} {...getTableBodyProps()} ref={ref}/>),
                TableRow: (props) => {
                    const index = props['data-index']
                    const row = rows[index]
                    return <TableRow {...props} {...row.getRowProps()} />
                },
            }}
            fixedHeaderContent={() => {
                return headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()} style={{background: 'white'}}>
                        {headerGroup.headers.map((column) => {
                            const leftColumn = leftColumns.includes(column.id)
                            const columnIndex = columns.findIndex(c => c.name === column.id)
                            return <TableCell sx={{
                                maxWidth: 148,
                                minWidth: 148,
                                position: leftColumn ? "sticky" : undefined,
                                left: leftColumn ? columnIndex * 180 : undefined,
                                background: leftColumn ? "white" : undefined,
                                zIndex: 10,
                            }} {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                        })}
                    </TableRow>
                ))
            }}
            itemContent={(index, originalRowObject) => {
                const row = rows[index]
                prepareRow(row)
                return row.cells.map((cell) => {
                    const leftColumn = leftColumns.includes(cell.column.id)
                    const columnIndex = columns.findIndex(column => column.name === cell.column.id)
                    return <TableCell sx={{
                        maxWidth: 148,
                        minWidth: 148,
                        whiteSpace: "nowrap",
                        position: leftColumn ? "sticky" : undefined,
                        left: leftColumn ? columnIndex * 180 : undefined,
                        background: leftColumn ? "white" : undefined,
                        zIndex: 1,
                    }} {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                })
            }}
        />
    )
}