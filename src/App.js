import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./Authentication/firabase-config";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Views/Home";
import Register from "./Views/Registration";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      userSubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{`Welcome ${user ? user?.email : ""} !`}</h1>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={!user ? "/login" : "/home"} />}
          />
          <Route exact path="/login" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
