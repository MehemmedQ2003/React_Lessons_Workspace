import Badge from '@mui/material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Button from '@mui/material/Button';

const MUIBadge = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "230px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <Badge badgeContent={count} color="primary">
                    <AlternateEmailIcon color="action" />
                </Badge>

                <Button variant='contained' onClick={increase}>Increase</Button>
            </div>

            <div style={{ display: "flex", gap: "230px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <Badge badgeContent={count} color="primary" anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                    <EmailIcon color="action" />
                </Badge>

                <Button variant='contained' onClick={decrease}>Increase</Button>
            </div>
        </div>
    )
}

export default MUIBadge
