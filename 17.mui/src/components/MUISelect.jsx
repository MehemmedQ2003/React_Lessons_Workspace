import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { TextField } from '@mui/material';

const MUISelect = () => {
    const [values, setValues] = useState('');
    // console.log(values)

    const [currency, setCurrency] = useState('')
    // console.log(currency)

    const [currencies, setCurrencies] = useState([]);
    // console.log(currencies)

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}> 
                    <InputLabel>Age</InputLabel>
                    <Select  value={values} onChange={(e) => setValues(e.target.value)} color='success' label="Age">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <h1>{values}</h1>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="Name" select sx={{ m: 1, minWidth: 120 }} value={currency} onChange={(e) => setCurrency(e.target.value)} color="warning">
                    <MenuItem value="TRY">Turkey</MenuItem>
                    <MenuItem value="USD">USA</MenuItem>
                    <MenuItem value="EUR">Europe</MenuItem>
                </TextField>
                <h1>{currency}</h1>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField SelectProps={{multiple: true}} label="Name" select sx={{ m: 1, minWidth: 220 }} value={currencies} onChange={(e) => setCurrencies(e.target.value)} color="warning">
                    <MenuItem value="TRY">Turkey</MenuItem>
                    <MenuItem value="USD">USA</MenuItem>
                    <MenuItem value="EUR">Europe</MenuItem>
                </TextField>
                <h1>{currencies}</h1>
            </div>
        </div>
    )
}

export default MUISelect
