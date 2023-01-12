import React from 'react';
import './App.css';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

function Info(props) {
    const Temp = props.T
  return (
    <div className='main-card'>
      <main>
        <div classname="info">
      <Card sx={{width: '30%', marginLeft: '35%', marginTop: '5%'}}>
      <CardContent className="card">
        <Typography style={{textAlign: 'center'}}> <b>Today's Forecast </b><br></br> </Typography>
        <Typography style={{textAlign: 'center'}} className="image-wrapper">
        <img src={"http://openweathermap.org/img/wn/" + props.res.weather?.[0].icon + "@2x.png"} class="icon" />
        </Typography>
        <Typography gutterBottom component="div" style={{textAlign: 'center'}}>
          <b>{props.condition}</b>
        </Typography>
        <Typography variant="body1" color="text.primary" style={{textAlign: 'center'}}>
          <b>{props.res.weather?.[0].description} </b><br></br>
          <b>Temperature: </b>{Temp} <br></br>
          <b>Feels Like: </b>{props.feels_like} <br></br>
        </Typography>
        </CardContent>
    </Card>
    </div>
        </main>
    </div>
  );
}

export default Info;

