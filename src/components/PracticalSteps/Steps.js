import { FormControlLabel, Checkbox } from '@mui/material'; 
import React from "react";

function Steps(props){

return (
    <>
    <div className="Step">
    <FormControlLabel control = {<Checkbox />} /> 
        <h4>{props.text}</h4>
    </div>
    </>
)
}
export default Steps