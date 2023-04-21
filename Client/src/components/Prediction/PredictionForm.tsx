import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./Prediction.css";
import axios from "axios";

const PredictionForm = () => {
  const [enteredloc, setLoc] = useState();
  const [enteredeCC, setCC] = useState();
  const [enteredEs, setES] = useState();
  const [enteredDC, setDC] = useState();
  const [enteredTOO, setTOO] = useState();
  const [enteredvol, setvol] = useState();
  const [enteredPl, setPl] = useState();
  const [enteredDiffme, setDiffme] = useState();
  const [enteredInt, setInt] = useState();
  const [enteredEFF, setEFF] = useState();
  const [enteredNODB, setNODB] = useState();
  const [enteredTs, setTs] = useState();
  const [enteredLC, setLC] = useState();
  const [enteredCOLOC, setCOLOC] = useState();
  const [enteredCOBL, setCOBL] = useState();
  const [enteredCnC, setCnc] = useState();
  const [predictedBool, setPreditedBool] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const predictionDetails = {
      enteredloc,
      enteredeCC,
      enteredEs,
      enteredDC,
      enteredTOO,
      enteredvol,
      enteredPl,
      enteredDiffme,
      enteredInt,
      enteredEFF,
      enteredNODB,
      enteredTs,
      enteredLC,
      enteredCOLOC,
      enteredCOBL,
      enteredCnC,
    };
    const predVal = Object.values(predictionDetails);
    axios
      .post("http://127.0.0.1:5000/predict", predVal)
      .then((response) => {
        if (response.data.prediction[0] === 1) {
          setPreditedBool("There is a possiblity of defects in your code");
        } else {
          setPreditedBool("Code is free of any defects");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(predictionDetails);
  };
  const handleloc = (e: any) => {
    setLoc(e.target.value);
  };
  const handleCC = (e: any) => {
    setCC(e.target.value);
  };
  const handleEs = (e: any) => {
    setES(e.target.value);
  };
  const handleDC = (e: any) => {
    setDC(e.target.value);
  };
  const handleTOO = (e: any) => {
    setTOO(e.target.value);
  };
  const handlevol = (e: any) => {
    setvol(e.target.value);
  };
  const handlePl = (e: any) => {
    setPl(e.target.value);
  };
  const handleDiff = (e: any) => {
    setDiffme(e.target.value);
  };
  const handleInt = (e: any) => {
    setInt(e.target.value);
  };
  const handleEFF = (e: any) => {
    setEFF(e.target.value);
  };
  const handleNODB = (e: any) => {
    setNODB(e.target.value);
  };
  const handleTs = (e: any) => {
    setTs(e.target.value);
  };
  const handleLC = (e: any) => {
    setLC(e.target.value);
  };
  const handleCOLOC = (e: any) => {
    setCOLOC(e.target.value);
  };
  const handleCOBL = (e: any) => {
    setCOBL(e.target.value);
  };
  const handleCnC = (e: any) => {
    setCnc(e.target.value);
  };

  return (
    <>
      <form className="pb-14" onSubmit={handleSubmit}>
        <div className="flex ml-24 mr-24 mt-8 justify-between">
          <div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Lines of Code,(loc)"
                className="mt-6 w-80"
                label="Lines of Code"
                name="loc"
                onChange={handleloc}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Cyclomatic Complexity,v(g)"
                className="w-full mt-6"
                label="Cyclomatic Complexity"
                name="CC"
                onChange={handleCC}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Essential Complexity,ev(g)"
                className="w-full mt-6"
                label="Essential Complexity"
                name="ES"
                onChange={handleEs}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Design Complexity,iv(g)"
                className="w-full mt-6"
                label="Design Complexity"
                name="DC"
                onChange={handleDC}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter total operators + operands,(n)"
                className="w-full mt-6"
                label="Total Operators + Operands"
                name="TOO"
                onChange={handleTOO}
                required={true}
              />
            </div>
            <h1 className="text-white text-xl ml-18 mt-16">{predictedBool}</h1>
          </div>
          <div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Volume,(v)"
                className="mt-6 w-80"
                label="Volume"
                name="Vol"
                onChange={handlevol}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Program Length,(l)"
                className="w-full mt-6"
                label="Program Length"
                name="PL"
                onChange={handlePl}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Difficulty,(d)"
                className="w-full mt-6"
                label="Difficulty"
                name="Diff"
                onChange={handleDiff}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Intelligence,(i)"
                className="w-full mt-6"
                label="Intelligence"
                name="Int"
                onChange={handleInt}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter effort,(e)"
                className="w-full mt-6"
                label="Effort"
                name="EFF"
                onChange={handleEFF}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Number of delivered bugs,(b)"
                className="w-full mt-6"
                label="Number of delivered bugs"
                name="NODB"
                onChange={handleNODB}
                required={true}
              />
            </div>
          </div>
          <div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter time estimate,(t)"
                className="mt-6 w-80"
                label="Time estimate"
                name="Ts"
                onChange={handleTs}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Line Count,(LoCode)"
                className="w-full mt-6"
                label="Line Count"
                name="LC"
                onChange={handleLC}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Count of lines of comments,(LoComments)"
                className="w-full mt-6"
                label="Count of lines of comments"
                name="COLOC"
                onChange={handleCOLOC}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Count of black lines,(LoBlack)"
                className="w-full mt-6"
                label="Count of black lines"
                name="cobl"
                onChange={handleCOBL}
                required={true}
              />
            </div>
            <div className="mt-6">
              <TextField
                sx={{ input: { color: "white" } }}
                type="text"
                placeholder="Enter Code & Comments,(LoCode)"
                className="w-full mt-6"
                label="Code & Comments"
                name="C&C"
                onChange={handleCnC}
                required={true}
              />
            </div>
            <div className="flex items-center mt-8 justify-between text-white font-ubuntu">
              <Button type="submit" text="Predict" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PredictionForm;
