import React from 'react'
import Card from "components/Card/Card.js";
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, Typography ,Box} from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

export default function Details() {
  return (
    <>
        <Card >
        <CardHeader color="primary" style={{width: 800, height:80}}>
                                <h4>Driver Details</h4>
        </CardHeader>
        <CardBody >
              <Typography>
                <div>
              <h4><b>Driver Details</b></h4>
              <b>Source</b> : {localStorage.getItem('src_add')}<br/>
              <b>Destination</b> : {localStorage.getItem('dst_add')}<br/>
              <b>Distance</b> : {localStorage.getItem('distance')}<br/>
              <b>Time</b> : {localStorage.getItem('time')}<br/>
              <b>Price</b> : {localStorage.getItem('price')}<br/>
              </div>
              </Typography>

              <Typography>
                <div>
                <h4><b>Driver Details</b></h4>
                <b>Name</b> : {localStorage.getItem('dr_name')}<br/>
                <b>Email</b> : {localStorage.getItem('dr_email')}<br/>
                <b>Car</b>  : {localStorage.getItem('dr_carNo')}<br/>
                <b>Wallet Address</b>  : {localStorage.getItem('dr_address')}<br/><br/>
              </div>
              </Typography>

          </CardBody>
       </Card>
    

   
 
    </>
  );
}
