import React from 'react';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
    TableColumnReordering,
    DragDropProvider,
    TableColumnResizing,
    TableFixedColumns,
    TableSummaryRow,
    TableTreeColumn,
} from '@devexpress/dx-react-grid-material-ui';
import {
    SummaryState,
    IntegratedSummary,
    TreeDataState,
    CustomTreeData, DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {Chip, Button, Checkbox} from "@mui/material";

import {columns, rows} from "../data"
import {TABLE_HEIGHT} from "../App";
import {TableProps} from "./TableProps";


const defaultColumnOrder = columns.map(column => column.name)
const defaultColumnWidths = columns.map(column => {
    return {
        columnName: column.name,
        width: 180
    }
})
const leftColumns = columns.map(column => column.name).slice(0, 2)
const totalSummaryItems = [
    {columnName: 'weight', type: 'sum'},
]
const getChildRows = (row: any, rootRows: any) => (row ? row.children : rootRows);
const badgeColumns = columns.map(column => column.name).slice(1, 7)
const buttonColumns = columns.map(column => column.name).slice(7, 13)
const checkboxColumns = ['confirmed']

const handleClick = () => {
    console.info('You clicked the Chip.');
}

const ChipFormatter = ({value}: any) => (
    <Chip
        label={value}
        onClick={handleClick}
    />
)

const ButtonFormatter = ({value}: any) => (
    <Button variant="outlined" onClick={handleClick} >
        {value}
    </Button>
)

const CheckboxFormatter = ({value}: any) => (
    <Checkbox defaultChecked={value === "Yes"} onClick={handleClick} />
)

const ChipTypeProvider = (props: any) => (
    <DataTypeProvider
        formatterComponent={ChipFormatter}
        {...props}
    />
)

const ButtonTypeProvider = (props: any) => (
    <DataTypeProvider
        formatterComponent={ButtonFormatter}
        {...props}
    />
)

const CheckboxTypeProvider = (props: any) => (
    <DataTypeProvider
        formatterComponent={CheckboxFormatter}
        {...props}
    />
)

export function DevExtremeReactiveGrid({withMuiComponents}: TableProps) {

    // @ts-ignore
    return <Grid
        rows={rows}
        columns={columns}
        getRowId={row => row.id}
    >
        { withMuiComponents ? <ChipTypeProvider for={badgeColumns} /> : null }
        { withMuiComponents ? <ButtonTypeProvider for={buttonColumns} /> : null }
        { withMuiComponents ? <CheckboxTypeProvider for={checkboxColumns} /> : null }
        <TreeDataState/>
        <CustomTreeData
            getChildRows={getChildRows}
        />
        <SummaryState
            totalItems={totalSummaryItems}
        />
        <IntegratedSummary/>

        <DragDropProvider/>
        <VirtualTable
            height={TABLE_HEIGHT}
        />
        <TableColumnReordering
            defaultOrder={defaultColumnOrder}
        />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths}/>
        <TableHeaderRow/>
        <TableTreeColumn
            for="id"
        />
        <TableSummaryRow/>
        <TableFixedColumns
            leftColumns={leftColumns}
        />
    </Grid>
}
