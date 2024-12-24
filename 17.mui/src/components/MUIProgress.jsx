import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

const MUIProgress = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const plusValue = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + plusValue, 100);
            })
        }, 500);

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px 10px" }}>
                <CircularProgress />
                <CircularProgress color='success' />
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column", flexWrap: "wrap", margin: "30px 10px" }}>
                <LinearProgress />
                <LinearProgress color='success' />
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column", flexWrap: "wrap", margin: "30px 10px" }}>
                <LinearProgress variant='determinate' value={progress} />
            </div>
        </div>
    )
}

export default MUIProgress
