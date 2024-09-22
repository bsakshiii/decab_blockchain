// @material-ui/icons


//import Login from "views/Login/login";
import App from "Wallet/Wallet"

// core components/views for Admin layout

import UserProfile from "views/UserProfile/UserProfile.js";
import DriverProfile from "views/DriverProfile/DriverProfile.js";
import ProductList from "views/allDrivers/drivers.js"
import Maps from "views/Maps/Maps.js";
import History from "views/History/History";
import Home from "views/Home/Home";
import RideShareSteps from "views/RideShareSteps/RideShareSteps";
import { DriveEta } from "@material-ui/icons";
import MoneyOutlined from "@material-ui/icons/MoneyOutlined";
//import { Paid } from "@material-ui/icons";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import HistoryOutlined from "@material-ui/icons/HistoryOutlined";
import LocationOn from "@material-ui/icons/LocationOn";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import Details from "views/Details/Details";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeRoundedIcon,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/steps",
    name: "Get a Cab",
    icon: DriveEta,
    component: RideShareSteps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Add User",
    icon: Person,
    component: UserProfile,
    layout: "/admin" 
  },
  {
    path: "/driver",
    name: "Add Driver",
    icon: SportsMotorsportsIcon,
    component: DriverProfile,
    layout: "/admin"
  },
  
  {
    path: "/maps",
    name: "Choose Rides",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  
  {
    path: "/alldrivers",
    name: "All Drivers List",
    icon: People,
    component: ProductList,
    layout: "/admin"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: LoginIcon,
  //   component: Login,
  //   layout: "/admin"
  // },
  {
    path: "/wallet",
    name: "Payments",
    icon: PaidTwoToneIcon,
    component: App,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "Ride History",
    icon: HistoryOutlined,
    component: History,
    layout: "/admin"
  },
  // {
  //   path: "/details",
  //   name: "Driver Details",
  //   icon: HistoryOutlined,
  //   component: Details,
  //   layout: "/admin"
  // },

];

export default dashboardRoutes;
