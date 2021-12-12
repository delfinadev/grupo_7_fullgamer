import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles' 
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


function PanelTotales(props){
    return(
        <TableContainer>
            <Table className='Tabla'>
            <TableHead>
            <TableRow>
            <TableCell>Imagen</TableCell> 
               <TableCell>Titulo</TableCell> 
               <TableCell>Fecha de Publicación</TableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(producto=>(
                    <TableRow key={producto.id}>
                        <TableCell align='center'> <a href={'http://localhost:3000/products/' + producto.id}><img  src={producto.imagen} alt='imagen del producto'/></a></TableCell>
                        <TableCell align="center">{producto.fecha}</TableCell>
                        <TableCell align="center">{producto.visualizaciones}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PanelTotales