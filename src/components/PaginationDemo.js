import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const PaginationDemo = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    const res = await axios.get(`http://localhost:3001/posts?_page=${page}`);
    setPosts(res.data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);
  return (
    <>
      <CssBaseline />
      <Container componet={Box} p={3}>
        <Typography variant="h4" align="center" component={Box} py={5}>
          Blog Posts
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item sm={3} key={post.id}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Typography>
                    {post.id} . {post.title}
                  </Typography>
                  <Typography>{post.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className={classes.root}>
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            size="large"
            showFirstButton={true}
            showLastButton={true}
            hideNextButton={true}
            hidePrevButton={true}
            defaultPage={1}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </Container>
    </>
  );
};

export default PaginationDemo;
