import { Box, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Button from "../UI/Button";
import axios from "axios";
import React from "react";

const StartAProjectForm = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [enteredName, setenteredName] = useState();
  const [enteredDes, setenteredDes] = useState();
  const [fNames, setfNames] = useState<any>([]);
  const [personName, setPersonName] = React.useState<string[]>([]);
  useEffect(() => {
    axios
      .get("api/getUsers")
      .then((response) => {
        const data = response.data;
        data.forEach((element: any) => {
          setfNames((arr: any) => [...arr, element]);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleDateChange = (date: any) => {
    console.log(date);
    setSelectedDate(date);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const goHome = () => {
    navigate("/home");
  };

  const projectNameHandler = (e: any) => {
    setenteredName(e.target.value);
  };
  const projectDesHandler = (e: any) => {
    setenteredDes(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newProjectDetails = {
      projectName: enteredName,
      projectDescription: enteredDes,
      projectDeadline: selectedDate,
      projectMembers: personName,
    };
    axios
      .post("/api/createProject", newProjectDetails)
      .then((response) => {
        console.log(response.data);
        goHome();
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
      });
  };
  return (
    <>
      <form className="mt-8 " onSubmit={submitHandler}>
        <TextField
          sx={{ input: { color: "white" } }}
          type="text"
          placeholder="Enter your Project Title"
          className="w-full mt-6"
          label="Project Title"
          name="projectTitle"
          onChange={projectNameHandler}
          required={true}
        />
        <div className="mt-6">
          <TextField
            sx={{ input: { color: "white" } }}
            type="text"
            placeholder="Enter project description"
            className="w-full mt-6"
            label="Project Description"
            name="projectDescription"
            onChange={projectDesHandler}
            required={true}
          />
        </div>
        <div className="mt-6">
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: 500 }}>
              <InputLabel id="demo-multiple-name-label">
                Add Collaborators
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Add Collaborators" />}
                MenuProps={MenuProps}
              >
                {fNames.map((name: any) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="mt-6">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Project Deadline"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="mt-12">
          <Button type="submit" text="Create Project" />
        </div>
      </form>
    </>
  );
};

export default StartAProjectForm;
