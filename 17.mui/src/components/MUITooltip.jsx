import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const MUITooltip = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "40px 110px" }}>
                <Tooltip title="Click to Delete" placement='right'>
                    <IconButton>
                        <DeleteIcon sx={{fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "40px 110px" }}>
                <Tooltip title="Click to Delete" placement='left'>
                    <IconButton>
                        <DeleteIcon sx={{fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "40px 110px" }}>
                <Tooltip title="Click to Delete" placement='top'>
                    <IconButton>
                        <DeleteIcon sx={{fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "40px 110px" }}>
                <Tooltip title="Click to Delete" placement='bottom'>
                    <IconButton>
                        <DeleteIcon sx={{fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "40px 110px" }}>
                <Tooltip title="Click to Delete" placement='bottom-start'>
                    <IconButton>
                        <DeleteIcon sx={{fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default MUITooltip
