import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Card.css";


export default function ActionAreaCard(props) {
  return (
    <Card className="cardContainer" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={props.image}
          alt="green iguana"
        />
        <CardContent className="content">
          <Typography className="typography" gutterBottom variant="h5" component="div">
              {props.eventName}
          </Typography>
          <Typography className="dataBody"variant="body2" color="text.secondary">
            {props.eventInfo}
            
          </Typography>
          <Typography className="dataBody"variant="body2" color="text.secondary">
            {props.date}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}