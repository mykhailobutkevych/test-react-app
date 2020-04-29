import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Button } from "@material-ui/core";
import history from "../history";
import * as Actions from "../redux/house/house.actions";

import HouseCard from "../components/HouseCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  buttonBox: {
    marginTop: "5rem",
  },
  button: {
    width: "15rem",
    height: "5rem",
  },
}));

const Houses = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const houses = useSelector((store) => store.house.houses);
  const triggerGetHouses = useSelector((store) => store.house.triggerGetHouses);

  function openHousePage(id) {
    return history.push("/houses/" + id);
  }

  function deleteSelectedHouse(id) {
    dispatch(Actions.deleteHouse(id));
  }

  function openAddHousePage() {
    return history.push("/houses/add");
  }

  useEffect(() => {
    dispatch(Actions.getHouses());
  }, [dispatch, triggerGetHouses]);

  const resolveHouseCard = () => {
    if (houses) {
      return houses.map((i) => {
        return (
          <Grid key={i._id} item>
            <HouseCard
              id={i._id}
              address={i.address}
              area={i.area}
              owner={i.owner}
              price={i.price}
              handleOpen={openHousePage}
              handleDelete={deleteSelectedHouse}
            />
          </Grid>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {resolveHouseCard()}
      </Grid>
      <Box className={classes.buttonBox} display="flex">
        <Button onClick={() => openAddHousePage()} className={classes.button} variant="contained" color="primary">
          Add new house
        </Button>
      </Box>
    </div>
  );
};

export default Houses;
