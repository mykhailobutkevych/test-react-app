import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "20rem",
    width: "25rem",
  },
  title: {
    marginTop: "3rem",
    marginBottom: "1rem",
  },
});

function HouseCard({ id, address, area, owner, price, handleOpen, handleDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Id</b>: {id}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Adress</b>: {address}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Area</b>: {area}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Owner</b>: {owner}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Price</b>: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => handleOpen(id)}>
          Open
        </Button>
        <Button color="secondary" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default HouseCard;
