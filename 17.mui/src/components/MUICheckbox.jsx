import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useState } from 'react';


const MUICheckbox = () => {
    const [isConfirm, setIsConfirm] = useState(false);

    const submit = () => {
        if(!isConfirm) {
            alert('Please accept terms and conditions');
        }
        else {
            alert('Form submitted successfully');
        }
    }
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <FormControl component="fieldset">
                    <FormLabel>My Course</FormLabel>
                    <FormGroup aria-label="position">
                        <FormControlLabel control={<Checkbox />} label="Js" labelPlacement="end" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="React.Js" labelPlacement="end" />
                        <FormControlLabel control={<Checkbox />} label="Redux.Js" labelPlacement="end" />
                        <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Next.Js" labelPlacement="end" />
                    </FormGroup>
                </FormControl>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position">
                        <FormControlLabel control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)} />} label="I accept terms and conditions" labelPlacement="end" />
                    </FormGroup>
                    <Button variant='contained' color='success' onClick={submit}>Send Form</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default MUICheckbox
