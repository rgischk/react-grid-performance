import React, {useState} from 'react';
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
    Table,
} from '@devexpress/dx-react-grid-material-ui';
import {
    SummaryState,
    IntegratedSummary,
    TreeDataState,
    CustomTreeData, DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {Chip, Button, Checkbox, Box} from "@mui/material";

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
    <Button variant="outlined" onClick={handleClick}>
        {value}
    </Button>
)

const CheckboxFormatter = ({value}: any) => (
    <Checkbox defaultChecked={value === "Yes"} onClick={handleClick}/>
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

export function DevExtremeReactiveGrid({withMuiComponents, withVirtualization}: TableProps) {

    const [expandedRowIds, setExpandedRowIds] = useState<(string | number)[]>([]);

    return <>
        <Button onClick={() => setExpandedRowIds(rows.map((row: any) => row.id))}>Expand all rows</Button>
        <Box sx={{height: TABLE_HEIGHT, overflowY: "auto"}}>
            {/* @ts-ignore */}
            <Grid
                rows={rows}
                columns={columns}
                getRowId={row => row.id}
                // Ensures that the grid component is re-rendered when we switch the table implementation, which is necessary due to the grids internal state:
                key={withVirtualization ? "devExtremeRactiveGridWithVirtualization" : "devExtremeRactiveGridWithoutVirtualization"}
            >
                {withMuiComponents ? <ChipTypeProvider for={badgeColumns}/> : null}
                {withMuiComponents ? <ButtonTypeProvider for={buttonColumns}/> : null}
                {withMuiComponents ? <CheckboxTypeProvider for={checkboxColumns}/> : null}
                <TreeDataState
                    expandedRowIds={expandedRowIds}
                    onExpandedRowIdsChange={setExpandedRowIds}
                />
                <CustomTreeData
                    getChildRows={getChildRows}
                />
                <SummaryState
                    totalItems={totalSummaryItems}
                />
                <IntegratedSummary/>

                <DragDropProvider/>
                {
                    withVirtualization ? <VirtualTable height={TABLE_HEIGHT}/> : <Table/>
                }
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
        </Box>
    </>
}
