import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import * as Actions from "../redux/house/house.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const House = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const house = useSelector((store) => store.house.house);

  useEffect(() => {
    dispatch(Actions.getHouse(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  if (house) {
    return (
      <div className={classes.root}>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Id</b>: {house._id}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Adress</b>: {house.address}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Area</b>: {house.area}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Owner</b>: {house.owner}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>Price</b>: {house.price}
        </Typography>
      </div>
    );
  } else return <div>loading...</div>;
};

export default House;
