import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import { useState } from 'react';
import Img from "../images/toyota.jpg"

const MUISkeleton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px" }}>
                {
                    loading ? <Skeleton variant="circular" width={200} height={200} animation="wave" /> : <img style={{ objectFit: "cover", borderRadius: "50%" }} src={Img} width={200} height={200}/>
                }
            </div>
            
        </div>
    )
}

export default MUISkeleton
