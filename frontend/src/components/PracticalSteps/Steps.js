import { FormControlLabel, Checkbox } from '@mui/material';
import React from "react";

function Steps({ text, isSelected, onClick }) {
    return (
        <div className="Step" onClick={onClick}>
            <span className='checkbox'>
                <FormControlLabel
                    control={<Checkbox checked={isSelected} sx={{ color: isSelected ? 'green' : '' }} />}
                />
            </span>
            <h4>{text}</h4>
        </div>
    );
}

export default Steps;
