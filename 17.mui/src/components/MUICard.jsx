import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid2';
import Toyota from "../images/toyota.jpg";
import Toyota1 from "../images/toyota1.jpg";
import Toyota2 from "../images/toyota2.jpg";

const MUICard = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", margin: "30px" }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Card sx={{width: "100%"}}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={Toyota}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button size="large" variant='contained' color='primary'>Share</Button>
                                <Button size="large" variant='outlined' color='primary'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Card sx={{width: "100%"}}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={Toyota1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button size="large" variant='contained' color='primary'>Share</Button>
                                <Button size="large" variant='outlined' color='primary'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Card sx={{width: "100%"}}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={Toyota2}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button size="large" variant='contained' color='primary'>Share</Button>
                                <Button size="large" variant='outlined' color='primary'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MUICard
