import React from 'react'
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Card, CardContent, Typography, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo_1 from "assets/img/profile.png";
import logo_2 from "assets/img/woman.png"
import logo_3 from "assets/img/man.png";
import { CardActions } from '@material-ui/core';
export const Card_dip = () => {

  var price = parseFloat(localStorage.getItem('distance'));
  //price=parseFloat(price);
  const miniprice = price * 0.0001;
  const sedanprice = price * 0.00012;
  const suvprice = price * 0.00014;

  const handlesClick1 = () => {
    alert("Selected");


    // localStorage.setItem('dr_name', 'Dipankar')
    // localStorage.setItem('dr_carNo', 'Mini')
    // localStorage.setItem('dr_email', 'thoratdipankar05@gmail.com')
    // localStorage.setItem('dr_address', ' 0xd63f6D0E3Ee03056FcECE22e96169693bF6C4ec8')
    // localStorage.setItem('price', miniprice)
    localStorage.setItem('dr_name', 'Dipankar')
    localStorage.setItem('dr_carNo', 'Mini')
    localStorage.setItem('dr_email', 'dip06@gmail.com')
    localStorage.setItem('dr_address', '0xd1544eF65072Cd594ae6362943BC7D98D118a3F8')
    localStorage.setItem('price', miniprice)
  }

  const handlesClick2 = () => {
    alert("Selected");


    localStorage.setItem('dr_name', 'Sakshi')
    localStorage.setItem('dr_carNo', 'SUV')
    localStorage.setItem('dr_email', 'sakshib26@gmail.com')
    localStorage.setItem('dr_address', '0x835474837dED7927afAE98bB0c43489AfeA365B0')
    localStorage.setItem('price', suvprice)

  }

  const handlesClick3 = () => {
    alert("Selected");


    localStorage.setItem('dr_name', 'Paras')
    localStorage.setItem('dr_carNo', 'Sedan')
    localStorage.setItem('dr_email', 'thakurparas@gmail.com')
    localStorage.setItem('dr_address', '0x83553f7322516aefffA8B54360A3E9834fe7ec3d')
    localStorage.setItem('price', sedanprice)

  }
  return (<>
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
                thoratdipankar05@gmail.com@gmail.com
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Car: Mini
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Price : {miniprice}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Wallet Address: 0xd1544eF65072Cd594ae6362943BC7D98D118a3F8
              </Typography>
            </div>
          </div>
          <CardActions>
            <Button sx={{ marginLeft: '80px', marginTop: '30px' }} variant='contained' onClick={handlesClick1}>Select</Button>
          </CardActions>
        </CardContent>


        <hr sx={{ flexGrow: 1, border: 'none', borderBottom: '1px solid #e0e0e0' }} />

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
                Price : {suvprice}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Wallet Address:0x835474837dED7927afAE98bB0c43489AfeA365B0
              </Typography>
            </div>
          </div>
          <CardActions>
            <Button sx={{ marginLeft: '80px', marginTop: '30px' }} variant='contained' onClick={handlesClick2}>Select</Button>
          </CardActions>
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
                Price : {sedanprice}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Wallet Address: 0x83553f7322516aefffA8B54360A3E9834fe7ec3d
              </Typography>
            </div>
          </div>
          <CardActions>
            <Button sx={{ marginLeft: '80px', marginTop: '30px' }} variant='contained' onClick={handlesClick3}>Select</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  </>);
}