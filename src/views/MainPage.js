import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonBox: {
    marginTop: "5rem",
    justifyContent: "center",
  },
  paper: {
    borderRadius: 0,
    height: "50vh",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="body1" color="textSecondary" component="p">
                TITLE
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                SUBTITLE
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                CONTENT_TEXT
              </Typography>
              <Box className={classes.buttonBox} display="flex">
                <Button className={classes.button} variant="contained" color="primary">
                  click
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="body1" color="textSecondary" component="p">
                TITLE
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="body1" color="textSecondary" component="p">
                TITLE
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="body1" color="textSecondary" component="p">
                TITLE
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                SUBTITLE
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                CONTENT_TEXT
              </Typography>
              <Box className={classes.buttonBox} display="flex">
                <Button className={classes.button} variant="contained" color="primary">
                  click
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
