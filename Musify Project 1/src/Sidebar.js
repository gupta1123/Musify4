import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Avatar
} from "@material-ui/core";
import {
  MusicNote,
  School,
  Check,
  StarBorder,
  Group,
  Settings,
  ExitToApp
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "60px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centering items horizontally
    backgroundColor: "#000000",
    color: "#FFFFFF",
    transition: "width 0.3s",
    "&:hover": {
      width: "250px"
    }
  },
  icon: {
    color: "#FFFFFF"
  },
  profile: {
    margin: "20px auto",
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  listItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px 0"
  },
  blackIcon: {
    color: "#FFFFFF"
  },
  starIcon: {
    position: "relative"
  },
  tickIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  settingsList: {
    marginTop: "auto",
    width: "100%" // Ensuring the list occupies full width
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <Avatar
        alt="Profile Image"
        className={classes.profile}
        src="https://via.placeholder.com/150"
      />
      <List style={{ width: "100%" }}>
        {" "}
        {/* Ensuring the List occupies full width */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.icon}>
            <MusicNote />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.blackIcon}>
            <School />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.starIcon}>
            <StarBorder className={classes.icon} />
            <Check className={classes.tickIcon} />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.icon}>
            <Group />
          </ListItemIcon>
        </ListItem>
      </List>

      <Divider light />

      <List className={classes.settingsList}>
        {[
          ["Settings", <Settings />],
          ["Logout", <ExitToApp />]
        ].map(([text, icon]) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
