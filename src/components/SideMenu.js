import React from "react";
import { withStyles } from "@material-ui/core";

// withStyles & makeStyles
const primaryOptions = [
  "Dashboard",
  "Employees",
  "Workflow",
  "Calender",
  "Permissions",
];

const secondaryOptions = ["Settings", "Personnel", "Logout"];

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0px",
    width: "320px",
    height: "100% ",
    backgroundColor: "#253053",
  },
  menuContainer: {
    fontSize: "1.1rem",
    color: "white",
    margin: "1rem 0",
  },
  bottom: {
    marginTop: "6.5rem",
  },
  menuItem: {
    padding: "1.2rem 0",
    margin: 0,

    paddingLeft: "3rem",
    cursor: "pointer",
    width: "100%",
    "&:hover": {
      background: "rgba(255,255,255,0.3)",
    },
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sideMenu}>
      <div className={classes.menuContainer}>
        {primaryOptions.map((opt) => (
          <p className={classes.menuItem} key={opt}>{opt}</p>
        ))}
      </div>
      <div className={`${classes.menuContainer} ${classes.bottom}`}>
        {secondaryOptions.map((opt) => (
          <p className={classes.menuItem} key={opt}>{opt}</p>
        ))}
      </div>
    </div>
  );
};

export default withStyles(style)(SideMenu);
