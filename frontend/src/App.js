import "./App.css";
import Contact from "./pages/contact/Contact.js";
import Homepage from "./pages/home/Homepage.js";
import Activities from "./pages/activities/Activities.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guidelines from "./pages/guidelines/Guidelines.js";
import Volunteer from "./pages/volunteer/Volunteer.js";
import Login from "./pages/login/Login.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import UserProvider from "./contexts/userProvider.js";
import Middleware from "./utils/Middleware.js";
import Search from "./pages/search/Search.js";
import Task from "./pages/tasks/Task.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/activities" element={<Activities />} exact />
            <Route path="/guidelines" element={<Guidelines />} exact />
            <Route path="/volunteer-form" element={<Volunteer />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/search" element={<Search/>} />
            <Route
              path="/dashboard"
              element={
                <Middleware>
                  <Dashboard />
                </Middleware>
              }
              exact
            />
            <Route
              path="/dashboard/tasks"
              element={
                <Middleware>
                  <Task />
                </Middleware>
              }
              exact
            />
            <Route
              path="/dashboard/activities"
              element={
                <Middleware>
                  <Activities/>
                </Middleware>
              }
              exact
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
