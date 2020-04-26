import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // zIndex: -100,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    margin: "20px 0",
    textTransform: "uppercase",
  },
  listIcon: {
    minWidth: "30px",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <Link className={classes.link} to="/global-stat">
                <ListItemIcon className={classes.listIcon}>
                  <FontAwesomeIcon className={classes.icon} icon={faGlobe} />
                </ListItemIcon>
                Global Statistics
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/local-stat" className={classes.link}>
                <ListItemIcon className={classes.listIcon}>
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faChartArea}
                  />
                </ListItemIcon>
                Depo statistics
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
