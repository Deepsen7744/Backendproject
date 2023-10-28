import "./App.css";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Institute from "./components/Institute";
import Gov from "./components/Gov";
import Verification from "./components/Verification";
import User from "./components/User";
import { useState } from "react";

const  App = () => {
  const [foruser,setForUser] = useState(false);
  const [registeru,setRegisteru]  = useState(false);
  const [registeri,setRegisteri]  = useState(false);
  const [approve,setApprove] = useState(false);


  return (
      <div className="App">
      <NavBar />
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/gov" element={<Gov/>} />
          <Route path="/institute" element={<Institute approve={approve} setApprove={setApprove} registeri={registeri} setRegisteri={setRegisteri} setForUser={setForUser}/>} />
          <Route path="/user" element={<User registeru={registeru} setRegisteru={setRegisteru} foruser={foruser}/>} />
          <Route path="/verification" element={<Verification/>} />
      </Routes>
      </div>
  );
}

export default App;


