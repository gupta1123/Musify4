import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  CardMedia,
  Divider
} from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";

const courses = [
  {
    title: "Latest News about Musicians",
    author: "John Smith",
    image:
      "https://i.pinimg.com/564x/a7/6a/86/a76a86a0bd544f11a2880c60d90970ef.jpg",
    progress: 85
  },
  {
    title: "Mastering Music Notes",
    author: "Sarah Johnson",
    image:
      "https://i.pinimg.com/564x/1e/ae/38/1eae389789168cf41ecd95f205338e05.jpg",
    progress: 42
  },
  {
    title: "Musical Instruments 101",
    author: "David Thompson",
    image:
      "https://i.pinimg.com/564x/81/69/ad/8169addd0b084121e4868cd83e5f32bf.jpg",
    progress: 23
  },
  {
    title: "Learn to Read Sheet Music",
    author: "Emily Davis",
    image:
      "https://i.pinimg.com/564x/bd/e6/80/bde680900e19838fb2faf19ebeb30cbc.jpg",
    progress: 42
  }
];

const CourseList = () => {
  return (
    <div style={{ width: "900px", padding: "10px" }}>
      {courses.map((course) => (
        <Card
          key={course.title}
          style={{
            display: "flex",
            marginBottom: "15px",
            borderRadius: "15px",
            overflow: "hidden",
            height: "150px"
          }}
        >
          <Card
            style={{
              flex: "1",
              overflow: "hidden",
              borderRadius: "15px 0 0 15px"
            }}
          >
            <CardMedia
              style={{ height: "100%" }}
              image={course.image}
              title={course.title}
            />
          </Card>
          <CardContent style={{ flex: "2" }}>
            <Typography variant="h6">{course.title}</Typography>
            <Typography variant="body2">{course.author}</Typography>
            <Divider style={{ margin: "10px 0", backgroundColor: "gray" }} />
            <Typography variant="body2">{course.progress}% complete</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
