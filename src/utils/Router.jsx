import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MockAPI } from "../mockman";
export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/mockman" element={<MockAPI/>}></Route>
        </Routes>
    );
}