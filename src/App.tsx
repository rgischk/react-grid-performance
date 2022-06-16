import React, {useState} from 'react';
import './App.css';
import {Button, ButtonGroup, FormControlLabel, FormGroup, Switch} from "@mui/material";

import {MuiXDataGrid} from "./tables/MuiXDataGrid";
import {DevExtremeReactiveGrid} from "./tables/DevExtremeReactiveGrid";
import {DevExtremeXDataGrid} from "./tables/DevExtremeXDataGrid";
import {ReactTableVirtuoso} from "./tables/ReactTableVirtuoso";
import {AgGrid} from "./tables/AgGrid";

export const TABLE_HEIGHT = 800

enum Options {
    MUI_X_DATA_GRID = "MUI X Data Grid",
    DEV_EXTREME_REACTIVE_GRID = "DevExtreme Reactive Grid",
    DEV_EXTREME_X_DATA_GRID = "DevExtreme X Data Grid",
    REACT_TABLE_VIRTUOSO = "React Table with Virtuoso",
    AG_GRID = "AG Grid",
}

function App() {

    const [mui, setMui] = useState(true)
    const [framework, setFramework] = useState<Options>(Options.MUI_X_DATA_GRID)

    return <>
        <Controls framework={framework} setFramework={setFramework} mui={mui} setMui={setMui}/>
        <br />
        <Tables option={framework} mui={mui}/>
    </>
}

export default App;

function Controls({framework, setFramework, mui, setMui}: { framework: Options, setFramework: (option: Options) => void, mui: boolean, setMui: (mui: boolean) => void }) {
    return <>
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked={mui} onClick={() => setMui(!mui)}/>} label="Use MUI components"/>
            <ButtonGroup>
                {Object.values(Options).map(option => {
                    return <Button variant={framework === option ? "contained" : "outlined"} onClick={() => setFramework(option)}>{option}</Button>
                })}
            </ButtonGroup>
        </FormGroup>
    </>
}

function Tables({option, mui}: { option: Options, mui: boolean }) {
    switch (option) {
        case Options.MUI_X_DATA_GRID:
            return <MuiXDataGrid withMuiComponents={mui}/>
        case Options.DEV_EXTREME_REACTIVE_GRID:
            return <DevExtremeReactiveGrid withMuiComponents={mui}/>
        case Options.DEV_EXTREME_X_DATA_GRID:
            return <DevExtremeXDataGrid withMuiComponents={mui} />
        case Options.REACT_TABLE_VIRTUOSO:
            return <ReactTableVirtuoso withMuiComponents={mui}/>
        case Options.AG_GRID:
            return <AgGrid withMuiComponents={mui}/>
    }
    return null
}