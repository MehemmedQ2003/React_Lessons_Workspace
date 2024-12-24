import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";

const MuiButton = () => {
    const [showAlert, setShowAlert] = useState(false);

    const clicked = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                <Button variant="text">Save</Button>
                <Button variant="contained">Save</Button>
                <Button variant="outlined">Save</Button>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                <Button variant="contained" color="success">Save</Button>
                <Button variant="text" color="primary">Save</Button>
                <Button variant="contained" color="info">Save</Button>
                <Button variant="text" color="secondary">Save</Button>
                <Button variant="contained" color="warning">Save</Button>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                <Button size="small" variant="contained" color="error">Go Back</Button>
                <Button size="medium" variant="contained" color="error">Go Back</Button>
                <Button size="large" variant="contained" color="error">Go Back</Button>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                <Button size="small" variant="contained" color="success" startIcon={<AddCircleOutlineIcon />}>Go Back</Button>
                <Button size="small" variant="contained" color="success" endIcon={<AddCircleOutlineIcon />}>Go Back</Button>
            </div>


            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                <Button size="large" variant="contained" color="success" startIcon={<AdsClickIcon />} onClick={clicked}>Clicked</Button>
                {
                    showAlert &&
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Here is a gentle confirmation that your action was successful.
                    </Alert>
                }
            </div>
        </div>
    )
};

export default MuiButton;