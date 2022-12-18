import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { UserSelecter } from "../features/registrationSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectCmp = () => {
  //   const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { UserSelection } = useSelector((state) => state.Registration);

  const handleChange = (event) => {
    // setAge(event.target.value);
    dispatch(UserSelecter(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={UserSelection}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="admin">Transpoter</MenuItem>
          <MenuItem value="User">ServiceBuyer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCmp;
