import React from "react";
import { Routes, Route } from "react-router-dom";
import { MockAPI } from "../mockman";
import { Home } from "../pages/Home";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import {Signup} from "../pages/Signup"
export const PathRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing/>} ></Route>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/mockman" element={<MockAPI/>}></Route>
        </Routes>
    );
}