import React from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Avatar
} from "@material-ui/core";
import { Star, AccessTime } from "@material-ui/icons";

const CourseDetail = () => {
  return (
    <Paper style={{ padding: "20px", margin: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <img
            src="https://i.pinimg.com/564x/59/e3/31/59e331a507e0cb2ac95ebae638f14e77.jpg"
            alt="Mastering Music Theory"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "15px",
              marginBottom: "20px"
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Mastering Music Theory
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: "5px 10px",
              marginBottom: "10px",
              boxShadow: "0 3px 5px rgba(0,0,0,0.2)"
            }}
          >
            <Avatar />
            <Typography variant="subtitle1" style={{ marginLeft: "5px" }}>
              John Smith
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginBottom="10px">
            <AccessTime style={{ color: "black" }} />
            <Typography variant="body2" style={{ marginLeft: "5px" }}>
              1h 30m
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginBottom="10px">
            <Star style={{ color: "black" }} />
            <Typography variant="body2" style={{ marginLeft: "5px" }}>
              4.7/5.0
            </Typography>
          </Box>
          <Typography variant="h6" gutterBottom>
            Course Description
          </Typography>
          <Typography variant="body2" paragraph>
            This online course is designed to help learn how to read sheet music
            and understand musical notations. It covers everything from basic
            music symbols to complex rhythms and.
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "20px",
                marginRight: "10px"
              }}
            >
              Write a Review
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "20px"
              }}
            >
              Continue Learning
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseDetail;
