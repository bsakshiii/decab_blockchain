import React from 'react';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { Button } from "@mui/material";
import logo_1 from "assets/img/apple-icon.png";
import { Box, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const handleSubmit = async (e) => {
        history.push('/admin/maps');
    }

    return (
        <>
            <Card>
                <CardHeader color="primary">
                    <h2>Welcome to Decab!</h2>
                </CardHeader>
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo_1} alt="Your Image" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                    <div>
                        <Typography variant="body1" style={{ marginTop: '20' }}>
                            This project introduces a decentralized ride hailing system built on blockchain technology, notably Ethereum. It enhances user privacy, reduces costs, and promotes transparency by using smart contracts to automate ride bookings and payments using MetaMask.
                            <br />
                            This project was developed by <br /><br />Sakshi Bhirud [FCOW21710] <br />Paras Thakur [FCOG21758] <br />Dipankar Thorat [FCOG21759]
                        </Typography>
                    </div>
                    <br/>
                    
                </CardContent>
                <Button
  onClick={handleSubmit}
  variant='contained'
  style={{
    width: '20%',
    borderRadius: 2,
    margin: '0 517px 40px' // Center align horizontally and add a 20px bottom margin
  }}
>
  Book a Cab
</Button>



            </Card>

            

        </>
    );
}
