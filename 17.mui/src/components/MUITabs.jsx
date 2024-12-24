import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import { useState } from 'react';
import CustomTabPanel from "./CustomTabPanel";


const MUITabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Name" />
                        <Tab label="Surname" />
                        <Tab label="Email" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Muhammad
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Gardashov
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    mehemmed.qardasov2003@gmail.com
                </CustomTabPanel> 
            </Box>
        </div>
    )
}

export default MUITabs
