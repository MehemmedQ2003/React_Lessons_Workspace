import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const MUIDialog = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const openDialogBtn = () => {
        setOpenDialog(true);
    }

    const closeDialog = () => {
        setOpenDialog(false);
    }

    const type = {
        YES: "Yes",
        NO: "No"
    }

    const result = (type) => {
        console.log("You clicked " + type);
        setOpenDialog(false);
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px 10px" }}>
                <Button onClick={openDialogBtn} variant='contained'>Dialog</Button>
                <Dialog open={openDialog} onClose={closeDialog}>
                    <DialogTitle>Questions</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Are you sure you want to delete this?</DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ margin: "0 15px" }}>
                        <Button onClick={() => result(type.YES)}>Cancel</Button>
                        <Button onClick={() => result(type.NO)}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default MUIDialog