import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  rightSidebar: {
    width: "250px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2)
  },
  card: {
    width: "100%",
    borderRadius: "25px" // Curved sides
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

const RightSidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.rightSidebar}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/564x/59/e3/31/59e331a507e0cb2ac95ebae638f14e77.jpg"
          title="Curved Side Image"
        />
      </Card>
    </div>
  );
};

export default RightSidebar;
