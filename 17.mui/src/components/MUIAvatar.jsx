import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';

const MUIAvatar = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <Stack sx={{ display: 'flex', gap: 2 }} direction="row">
                    <Avatar src='https://randomuser.me/api/portraits/men/1.jpg' sx={{ width: 100, height: 100 }}></Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/2.jpg' sx={{ width: 100, height: 100 }}></Avatar>
                    
                    <Avatar sx={{ width: 100, height: 100, fontSize: "20px", bgcolor: "success.main" }}>
                        <p style={{ color: "white", fontSize: "40px" }}>M</p>
                    </Avatar>
                    <Avatar sx={{ width: 100, height: 100, fontSize: "20px", bgcolor: "secondary.main" }}>
                        <p style={{ color: "white", fontSize: "40px" }}>A</p>
                    </Avatar>
                    
                    <Avatar sx={{ width: 100, height: 100, bgcolor: "primary.main" }}>
                        <AssignmentIcon sx={{ fontSize: "40px" }}/>
                    </Avatar>
                    <Avatar sx={{ width: 100, height: 100, bgcolor: "warning.main" }}>
                        <PageviewIcon sx={{ fontSize: "40px" }}/>
                    </Avatar>
                </Stack>
            </div>
        </div>
    )
}

export default MUIAvatar
