import React ,{ useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import {Button} from '@mui/material'
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import routes from "routes.js";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

let ps;

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin" && prop.path !== '/steps') {
          return (
            <Route
              path={prop.layout + prop.path}
              render={() => (
                <prop.component rideManager={rest.rideManager} web3={rest.web3} account={ rest.account }/>
              )}
              key={key}
            />
          );
        } else if (prop.path === '/steps') {
          return (
            <Route
              path={prop.layout + prop.path}
              render={() => (
                <prop.component rideManager={rest.rideManager} web3={rest.web3} account={rest.account} notifyNotificationListener={NotifyMe} />
              )}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/maps" />
    </Switch>
  );

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  // states and functions
  const [ open, setOpen ] = React.useState(false);
  const [ image, setImage ] = React.useState(bgImage);
  const [ color, setColor ] = React.useState("blue");
  const [ fixedClasses, setFixedClasses ] = React.useState("dropdown show");
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);
  // const handleImageClick = image => {
  //   setImage(image);
  // };
  const handleColorClick = color => {
    setColor(color);
  };

  const handledash=()=>{
    setComponentLoaded(true);
  }
  const handleClose1 = () => {
    setComponentLoaded(false);
  }
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };

  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleSuccess = () => {
    setOpen(true);
  };
  function NotifyMe(something) {
    handleSuccess()
  }
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [ mainPanel ]);

  function LoadedComponent() {
    return (
      <Sidebar
          routes={routes}
          logoText={"Decab"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
    );
  }
  
  return (
    <div className={classes.wrapper} >
      <Button onClick={handledash}>
      <DehazeRoundedIcon  style={{ color: 'grey', padding: "0" }}/>
      </Button>
      {/* <Sidebar
        routes={routes}
        logoText={"Decab"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      /> */}
      <div className={classes.mainPanel} ref={mainPanel}>
        {/* <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        /> */}
      
      {componentLoaded && (
        <div>
          <LoadedComponent />
          <Button onClick={handleClose1}><CloseRoundedIcon style={{ color: 'grey', padding: "0" }} /></Button>
        </div>
      )}
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Success
        </Alert>
              </Snackbar>
              {switchRoutes}
            </div>
          </div>
        ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        {getRoute() ? <Footer /> : null}
        
      </div>
    </div>
  );
}

