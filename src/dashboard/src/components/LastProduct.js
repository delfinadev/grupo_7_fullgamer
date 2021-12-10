import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function LastProduct() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products', {
            mode: 'no-cors'
        })
            .then(response => {
                return response.json()
            })
                .then(data => {
                    let lastProductInDb = data.products.splice(-1).pop();

                    setLastProduct(lastProductInDb);
                })
                .catch(error => console.log(error));
    }, []);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={lastProduct.name}
                subheader={lastProduct.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={lastProduct.url}
                alt={lastProduct.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {lastProduct.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Categoría:</Typography>
                    <Typography paragraph>
                        {lastProduct.category}
                    </Typography>
                    <Typography paragraph>Precio:</Typography>
                    <Typography paragraph>
                        {lastProduct.price}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
