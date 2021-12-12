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

function TotalCategories() {
  const [DataBaseInfo, setDataBaseInfo] = useState({countByCategory: [ ] })
  useEffect(() => {
    fetch('http://localhost:3030/api/products')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDataBaseInfo(data)
      })

  }, [])
  let array = DataBaseInfo.countByCategory.values()
  console.log(DataBaseInfo)
  return (
    <div className="conteiner_general">
      <div className="form_content">
        <ul className="form_ul">
          <li className="titulo_form">Cantidad de categorias: {DataBaseInfo.countByCategory}</li>
          <li>
            <li className="titulo_form">FullGamer</li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TotalCategories;