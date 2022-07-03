import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./Components/Firabase/firabase-config";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Components/Home";
import Register from "./Components/Firabase/Register";
import ProtectedRoute from "./Components/protectedRoute";
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

  //   console.log(user);

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
