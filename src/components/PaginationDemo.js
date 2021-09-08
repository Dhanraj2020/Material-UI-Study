import React from "react";
import { Box, Container, CssBaseline } from "@material-ui/core";
import { Pagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const PaginationDemo = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container componet={Box} p={3}>
        <div className={classes.root}>
          <Pagination />
        </div>
      </Container>
    </>
  );
};

export default PaginationDemo;
