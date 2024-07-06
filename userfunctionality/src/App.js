import React from "react";
import Parent from "./Parent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/add-user" element = {<AddUser/>}/>
          <Route path="/edit-user/:id" element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
