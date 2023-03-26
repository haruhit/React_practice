import React, { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import UserAuth from "./components/userAuth/UserAuth";
import AuthDisplay from "./components/userAuth/AuthDisplay";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>#4 useContext</h2>
        <UserAuth />
        <AuthDisplay />
      </div>
    </AuthProvider>
  );
}

export default App;
