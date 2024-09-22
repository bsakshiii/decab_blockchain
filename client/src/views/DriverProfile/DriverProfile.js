import React, { useState } from "react";
// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from '@material-ui/core/Snackbar';
import Portis from '@portis/web3';
import MuiAlert from '@material-ui/lab/Alert';
import Web3 from 'web3';
import avatar from "assets/img/faces/driver.png";
import { FormControl, TableBody, TableContainer, Table, TableCell, TableRow } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

// const myPrivateEthereumNode = {
//   nodeUrl: 'HTTP://127.0.0.1:8545',
//   chainId: 1337,
// };

// const portis = new Portis('1f0f049d-c90d-4c72-85ac-1067a6d94ef6', myPrivateEthereumNode);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const styles = {

  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function DriverProfile(props) {
  const classes = useStyles();
  const [ show, setHide ] = useState(false)
  const [ open, setOpen ] = React.useState(false);
  const [ web3, setWeb3 ] = useState(props.web3);
  const [ loading, isLoading ] = useState(false);
  


  const [ formData, setFormData ] = useState({
    dr_name: "",
    dr_contact: "",
    dr_email: "",
    dr_carNo: "",
    dr_noOfSeats: 0,
    dr_rating: 5
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleSuccess = () => {
    setOpen(true);
  };

  function handleChange(event) {
    const { id, value } = event.target
    setFormData({ ...formData, [ id ]: value })
  }

  async function handleSubmit(event) {
   // setHide(true)
    web3.eth.getAccounts((error, accounts) => {
      console.log(accounts);
        console.log(formData);
      localStorage.setItem('dr_account', accounts[ 0 ])
      localStorage.setItem('dr_name_new', formData.dr_name_new)
      localStorage.setItem('dr_contact_new', formData.dr_contact_new)
      localStorage.setItem('dr_email_new', formData.dr_email_new)
      localStorage.setItem('dr_carNo_new', formData.dr_carNo_new)
      localStorage.setItem('dr_cartype_new', formData.dr_cartype_new)
      localStorage.setItem('dr_address_new', formData.dr_address_new)
      //localStorage.setItem('dr_rating', formData.dr_rating)
      localStorage.setItem('dr_type', "1")

      var n = web3.utils.padRight(web3.utils.fromAscii(formData.name), 64);
      var c = web3.utils.padRight(web3.utils.fromAscii(formData.contact), 64);
      var e = web3.utils.padRight(web3.utils.fromAscii(formData.email), 64);
      var cn = web3.utils.padRight(web3.utils.fromAscii("MH1234"), 64);

      props.rideManager.methods.registerDriver(n, c, e, cn, Number(formData.noOfSeats), 1, accounts[ 0 ]).send({ from: accounts[ 0 ] })
        .once('receipt', (receipt) => {
          console.log(receipt);
          isLoading(false);
        })
    });
    handleSuccess()
    event.preventDefault();
  }

  const collectData = async () => {
    console.warn("Here is the data :-> ")
    console.warn(formData.name, formData.email, formData.contact, formData.carNo, formData.noOfSeats, formData.rating, formData.type, formData.address);
    let result = await fetch('http://localhost:3000/registerDriver', {
      method: 'post',
      body: JSON.stringify({ formData }),
      headers: {
        'Content-Type': 'application/json'
      },
    })



    result = await result.json();
    console.warn(result)
    localStorage.setItem("user", JSON.stringify(result));
    // if (result) {
    //   navigae('/');
    // }
  }

  return (
    <div>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Success Wallet Address {localStorage.getItem('account')}!
        </Alert>
      </Snackbar>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Continue as Driver</h4>
                <p className={classes.cardCategoryWhite}>Fill in the Details</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "text"
                      }}
                      labelText="Name"
                      id="dr_name_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "tel"
                      }}
                      labelText="Mobile Number"
                      id="dr_contact_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>

                </GridContainer>
                <GridContainer>

                  {/* <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "number"
                      }}
                      labelText="Number of Seats"
                      id="dr_noOfSeats"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem> */}
                  
                  
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "text"
                      }}
                      labelText="Car Type"
                      id="dr_cartype_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "text"
                      }}
                      labelText="Car No"
                      id="dr_carNo_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "text"
                      }}
                      labelText="Email"
                      id="dr_email_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      inputProps={{
                        onChange: (e) => handleChange(e),
                        type: "text"
                      }}
                      labelText="MetaMask Wallet Account Address"
                      id="dr_address_new"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={collectData} type="submit">Submit Profile</Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
       
      </GridContainer>
    </div >
  );
}
