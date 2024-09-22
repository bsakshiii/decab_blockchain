import React, { useEffect, useState } from "react";
import './drivers.css';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//sakshi
import { Box, CardContent, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import logo_1 from "assets/img/profile.png";
import logo_2 from "assets/img/woman.png";
import logo_3 from "assets/img/man.png";
//sakshi
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useHistory } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  var index_dr = 0;
  useEffect(() => {
    getProducts();
  }, [])
  const history = useHistory();
  const getProducts = async () => {
    let result = await fetch("http://localhost:3000/alldrivers");
    result = await result.json();
    setProducts(result);
  }
  console.warn("products", products);
  var price = parseFloat(localStorage.getItem('distance'));
  //price=parseFloat(price);
  const new_driver_address=localStorage.getItem('dr_address_new')
  const miniprice=price*3;
  const sedanprice=price*5;
  const suvprice=price*7;
  const name = localStorage.getItem('dr_name')


  const handle1 = () => {
    console.log(name)
    if (name == 'Dipankar')
    {
      handleOpenDialog();
    }
    else{
      alert('Driver was not selected')
    }
  };

  const handle2 = () => {
    console.log(name)
    if (name == 'Sakshi')
    {
      handleOpenDialog();
    }
    else{
      alert('Driver was not selected')
    }
  };

  const handle3 = () => {
    console.log(name)
    if (name == 'Paras')
    {
      handleOpenDialog();
    }
    else{
      alert('Driver was not selected')
    }
  };
  const handle4 = () => {
      alert('Driver was not selected')
  };
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  let wallet_address = new Array('0xd1544eF65072Cd594ae6362943BC7D98D118a3F8','0x835474837dED7927afAE98bB0c43489AfeA365B0','0x83553f7322516aefffA8B54360A3E9834fe7ec3d');
  console.log(wallet_address[1])
  return (
    <Card>
      <CardHeader color="primary">
        <h4 >Driver List</h4>
      </CardHeader>
      <Box width='match-parent' >
        <Card>
          <CardContent sx={{ display: 'flex' }}>
            <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
            <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h6' component='div'>
                Dipankar
              </Typography>
              <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                <Typography variant='body2' color='textSecondary'>
                  thoratdipankar05@gmail.com
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Car: Mini
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Car No : MH04345
                </Typography>
                
                <Typography variant='body2' color='textSecondary'>
                  Wallet Address: 0xd1544eF65072Cd594ae6362943BC7D98D118a3F8
                </Typography>

                
              </div>
            </div>
            <Button
                  variant="contained"
                  color="primary"
                  //onClick={handleSubmit}
                  //href="/admin/wallet"
                  onClick={handle1}
                  style={{ width: '120px', height: '40px' , marginLeft: '140px', marginTop: '80px'}}
                  type="submit"
              >
                  View
                </Button>
          </CardContent>


          <hr style={{border: '1px solid black'}} />

          <CardContent sx={{ display: 'flex' }}>
            <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
            <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h6' component='div'>
                Sakshi
              </Typography>
              <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                <Typography variant='body2' color='textSecondary'>
                  sakshib26@gmail.com
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Car: SUV
                </Typography>
               <Typography variant='body2' color='textSecondary'>
                  Car No : MH00357
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Wallet Address: 0x835474837dED7927afAE98bB0c43489AfeA365B0
                </Typography>
               
              </div>
            </div>
            <Button
                  variant="contained"
                  color="primary"
                  //onClick={handleSubmit}
                  //href="/admin/wallet"
                  onClick={handle2}
                  style={{ width: '120px', height: '40px' , marginLeft: '140px', marginTop: '80px'}}
                  type="submit"
              >
                  View
                </Button>
          </CardContent>

          <hr />
          <CardContent sx={{ display: 'flex' }}>
            <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
            <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h6' component='div'>
                Paras
              </Typography>
              <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                <Typography variant='body2' color='textSecondary'>
                  thakurparas@gmail.com
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Car: Sedan
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Car No : MH0298
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Wallet Address: 0x83553f7322516aefffA8B54360A3E9834fe7ec3d
                </Typography>
              </div>
            </div>
            <Button
                  variant="contained"
                  color="primary"
                  //onClick={handleSubmit}
                  //href="/admin/wallet"
                  onClick={handle3}
                  style={{ width: '120px', height: '40px' , marginLeft: '140px', marginTop: '80px'}}
                  type="submit"
              >
                  View
                </Button>
          </CardContent>
          <hr />
{/* 
          if (wallet_address[0]=='0xDE6A54F5704739aCE4139482b3Dcd0acE7410268'){
            console.log("true")
          }else{
            console.log("False")
          } */}

{new_driver_address != wallet_address[0] && new_driver_address != wallet_address[1] && new_driver_address != wallet_address[2] &&(
  
        <CardContent sx={{ display: 'flex' }}>
        <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
        <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' component='div'>
            {localStorage.getItem('dr_name_new')}
          </Typography>
          <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
            <Typography variant='body2' color='textSecondary'>
            {localStorage.getItem('dr_email_new')}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Car: {localStorage.getItem('dr_cartype_new')}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
            Car No: {localStorage.getItem('dr_carNo_new')}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
            Wallet Address : {localStorage.getItem('dr_address_new')}
            </Typography>
          </div>
        </div>
        <Button
                  variant="contained"
                  color="primary"
                  //onClick={handleSubmit}
                  //href="/admin/wallet"
                  onClick={handle4}
                  style={{ width: '120px', height: '40px' , marginLeft: '140px', marginTop: '80px'}}
                  type="submit"
              >
                  View
                </Button>
      </CardContent>
      
      )
      }

{wallet_address[1] === '0xDE6A54F5704739aCE4139482b3Dcd0acE7410268' && (
       <CardContent sx={{ display: 'flex' }}>
       <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
       <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
         <Typography variant='h6' component='div'>
           {localStorage.getItem('dr_name_new')}
         </Typography>
         <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
           <Typography variant='body2' color='textSecondary'>
           {localStorage.getItem('dr_email_new')}
           </Typography>
           <Typography variant='body2' color='textSecondary'>
             Car: Sedan
           </Typography>
           
           <Typography variant='body2' color='textSecondary'>
           {localStorage.getItem('dr_address_new')}
           </Typography>
         </div>
       </div>
     </CardContent>
      )}
{wallet_address[2] === '0xDE6A54F5704739aCE4139482b3Dcd0acE7410268' && (
        <CardContent sx={{ display: 'flex' }}>
        <Avatar src={logo_3} alt='Driver image' sx={{ width: 70, height: 80, marginTop: '35px' }} />
        <div style={{ marginLeft: '40px', marginBottom: '3px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' component='div'>
            {localStorage.getItem('dr_name_new')}
          </Typography>
          <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
            <Typography variant='body2' color='textSecondary'>
            {localStorage.getItem('dr_email_new')}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Car: Sedan
            </Typography>
            
            <Typography variant='body2' color='textSecondary'>
            {localStorage.getItem('dr_address_new')}
            </Typography>
          </div>
        </div>
      </CardContent>
      )}
<Dialog
  open={isDialogOpen}
  onClose={handleCloseDialog}
  maxWidth="sm" // Set the maximum width as needed
  fullWidth
>
  <DialogTitle style={{ backgroundColor: 'red', color: '#fff' }}>Details</DialogTitle>
  <DialogContent style={{ padding: '16px' }}>
  <Typography>
                <div>
              <h4><b>Ride Details</b></h4>
              <b>Passenger Name: </b> : {localStorage.getItem('name')}<br/>
              <b>Passenger Contact: </b> : {localStorage.getItem('contact')}<br/>
              <b>Pickup: </b> : {localStorage.getItem('src_add')}<br/>
              <b>Drop: </b> : {localStorage.getItem('dst_add')}<br/>
              </div>
              </Typography>
  </DialogContent>
  <DialogActions style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
    <Button
      onClick={handleCloseDialog}
      style={{ backgroundColor: 'red', color: '#fff' ,alignSelf: 'center'}}
      variant="contained"
    >
      Close
    </Button>
  </DialogActions>
</Dialog>

        </Card>
      </Box>
    </Card>
  )

}