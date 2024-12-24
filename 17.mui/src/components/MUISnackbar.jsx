import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const MUISnackbar = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClick = () => {
        setOpenSnackbar(true);
    };

    const handClose = () => {
        setOpenSnackbar(false);
    };


    const action = (
        <React.Fragment>
            <Button color="warning" onClick={handClose}>
                UNDO
            </Button>
            <IconButton sx={{ color: "white" }} onClick={handClose}>
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px 10px" }}>
                <Button onClick={handleClick} variant='contained'>Open Snackbar</Button>
                <Snackbar open={openSnackbar} message="Error" action={action} autoHideDuration={2000} onClose={handClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}/>
            </div>
        </div>
    )
}

export default MUISnackbar
