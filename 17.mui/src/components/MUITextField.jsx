import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MUITextField = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="Name" variant="outlined" color='error' />
                <TextField label="Name" variant="outlined" color='warning' />
                <TextField label="Name" variant="outlined" color='success' />
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="Name" variant="outlined" color='success' helperText="Please enter your name" />
                <TextField label="Password" variant="outlined" color='primary' helperText="Don't share your password" />
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="Name" disabled variant="outlined" color='success' />
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField InputProps={{ readOnly: "true" }} value="Read Only" disabled variant="outlined" color='success' />
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <TextField label="With normal TextField" sx={{ m: 1, width: '25ch' }} slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    },
                }} />

                <TextField sx={{ m: 1, width: '100' }} label="With InputAdornment" slotProps={{
                    input: {
                        endAdornment:
                            <InputAdornment position="end">
                                <AccountCircleIcon></AccountCircleIcon>
                            </InputAdornment>,
                    }
                }} />


                <TextField sx={{ m: 1, width: '100' }} label="With InputAdornment" slotProps={{
                    input: {
                        startAdornment:
                            <InputAdornment position="start">
                                <AccountCircleIcon></AccountCircleIcon>
                            </InputAdornment>
                    }
                }} />
            </div>
        </div>
    )
}

export default MUITextField
