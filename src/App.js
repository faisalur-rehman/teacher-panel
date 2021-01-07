import "./App.css";
import React, { createContext } from "react";
import Header from "./components/Header/Header";
import TeacherDetail from "./components/TeacherDetail/TeachersDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CA_Attendance from "./components/Attendance/CA_Attendance";
import LA_Attendance from "./components/Attendance/LinearAlgebra";
import CV_Attendance from "./components/Attendance/CV_Attendance";
import MC_Attendance from "./components/Attendance/MC_Attendance";
import Profile from "./components/Profile/Profile";
import { CAattendanceMorning } from "./CAattedanceMorning";
import { CAattendanceAfternoon } from "./CAattendanceAfternoon";

export const TeacherContext = createContext();

const TeacherData = {
  name: "Yasin Nasir",
  courses: [
    {
      courseName: "Computer Architecture",
      AttendanceMorning: CAattendanceMorning,
      AttendanceAfternoon: CAattendanceAfternoon,
      courseId: "ca",
      batchName: ["BCSF17M", "BCSF17A"], //teaching CA to these 2 batches.
    },
    {
      courseName: "Linear Algebra",
      AttendanceMorning: CAattendanceMorning,
      AttendanceAfternoon: CAattendanceAfternoon,
      courseId: "la",
      batchName: ["BCSF18M", "BCSF18A"],
    },
    {
      courseName: "Computer Vision",
      AttendanceMorning: CAattendanceMorning,
      AttendanceAfternoon: CAattendanceAfternoon,

      courseId: "cv",
      batchName: ["BCSF19M", "BCSF19A"],
    },
    {
      courseName: "Mobile Computing",
      AttendanceMorning: CAattendanceMorning,
      AttendanceAfternoon: CAattendanceAfternoon,

      courseId: "mc",
      batchName: ["BCSF20M", "BCSF20A"],
    },
  ],
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TeacherContext.Provider value={TeacherData}>
          <Switch>
            <Route exact path="/" component={TeacherDetail} />
            <Route exact path="/caattendance" component={CA_Attendance} />
            <Route exact path="/laattendance" component={LA_Attendance} />
            <Route exact path="/cvattendance" component={CV_Attendance} />
            <Route exact path="/mcattendance" component={MC_Attendance} />

            <Route exact path="/profile" component={Profile} />
          </Switch>
        </TeacherContext.Provider>
      </div>
    </Router>
  );
}

export default App;
