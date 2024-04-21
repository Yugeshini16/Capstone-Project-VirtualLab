import { FormControlLabel, Checkbox } from '@mui/material'; 
import React from "react";

function Steps(props){

return (
    <>
    <div className="Step">

        <span className='checkbox'><FormControlLabel control = {<Checkbox />} /></span>
        <h4>{props.text}</h4>
    </div>
    </>
)
}
export default Steps