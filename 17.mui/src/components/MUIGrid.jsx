import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const MUIGrid = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Item>xs=12 md=6 lg=4</Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MUIGrid
