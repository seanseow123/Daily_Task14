import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { atomData } from "./recoil/atomData";
import { Button } from "./stories/Button";
import TextField from '@mui/material/TextField';
import './UserInput.css';

let id = 1;
    function getID() {
        return id++;
    }

export const UserInput = () => { 

    const [inputThings, setInputThings] = useState('');
    const [val, setAtomData] = useRecoilState(atomData);
   
    const onChange = (e) => {
        setInputThings(e.target.value);
    }

    const addThings = () => {
        if (inputThings) {
            setAtomData((list) => [
                ...list, {
                    id: getID(),
                    text: inputThings
                }
            ])
        }
    }

    return (
        <>
            <TextField type="text" value={inputThings} onChange={onChange} label="Enter things here" id="outlined-basic" variant="outlined" />
            <br></br><br></br><br></br>
            <Button primary size="small" label="Submit into List" onClick = {addThings} />
        </>
    )
}