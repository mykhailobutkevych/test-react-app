import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Actions from "../redux/house/house.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
    },
  },
  buttonBox: {
    marginTop: "5rem",
    padding: theme.spacing(4),
  },
}));

const AddHouse = () => {
  const [houseObj, setHouse] = useState({
    address: null,
    owner: null,
    price: null,
    area: null,
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  function handleChange(param, e) {
    return setHouse({
      ...houseObj,
      [param]: param === "area" ? Number(e.target.value) : e.target.value,
    });
  }

  function handleAddNewHouse() {
    const values = Object.values(houseObj);

    if (values.every((i) => i)) {
      dispatch(Actions.addHouse(houseObj));
    }
  }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className="mt-8 mb-16"
          required
          label="Address"
          id="address"
          name="address"
          onBlur={(e) => handleChange("address", e)}
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          className="mt-8 mb-16"
          required
          label="Owner"
          id="owner"
          name="owner"
          onBlur={(e) => handleChange("owner", e)}
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          className="mt-8 mb-16"
          required
          label="Price"
          id="price"
          name="price"
          onBlur={(e) => handleChange("price", e)}
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          className="mt-8 mb-16"
          required
          label="Area"
          id="area"
          name="area"
          onBlur={(e) => handleChange("area", e)}
          variant="outlined"
          autoComplete="off"
        />
      </form>
      <Box className={classes.buttonBox} display="flex">
        <Button onClick={() => handleAddNewHouse()} className={classes.button} variant="contained" color="primary">
          Add new house
        </Button>
      </Box>
    </div>
  );
};

export default AddHouse;
