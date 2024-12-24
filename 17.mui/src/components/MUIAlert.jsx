import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const MUIAlert = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 10px"}}>
                <Alert severity="info" sx={{width: '500px'}}>This is an info alert — check it out!</Alert>
                <Alert severity="error" sx={{width: '500px'}}>This is an error alert — check it out!</Alert>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 10px"}}>
                <Alert variant='standard' severity="info" sx={{width: '500px'}}>This is an info alert — check it out!</Alert>
                <Alert variant='standard' severity="error" sx={{width: '500px'}}>This is an error alert — check it out!</Alert>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 10px"}}>
                <Alert variant='filled' severity="info" sx={{width: '500px'}}>This is an info alert — check it out!</Alert>
                <Alert variant='filled' severity="error" sx={{width: '500px'}}>This is an error alert — check it out!</Alert>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 10px"}}>
                <Alert variant='outlined' severity="info" sx={{width: '500px'}}>This is an info alert — check it out!</Alert>
                <Alert variant='outlined' severity="error" sx={{width: '500px'}}>This is an error alert — check it out!</Alert>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 10px"}}>
                <Alert severity="success" variant='filled' sx={{width: '500px'}}>
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity="error" variant='filled' sx={{width: '500px'}}>
                    <AlertTitle>Error</AlertTitle>
                    This is a error Alert with an encouraging title.
                </Alert>
            </div>
        </div>
    )
}

export default MUIAlert
