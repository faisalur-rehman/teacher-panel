import React, { useContext } from "react";
import { TeacherContext } from "../../App";
import { v4 as uid } from "uuid";
import { Link } from "react-router-dom";
import "./TeacherDetail.css";
const StudentDetail = () => {
  const TeacherDetails = useContext(TeacherContext);
  return (
    <div className="container">
      <div className="account">
        <h3 className="welcome-text">Welcome {TeacherDetails.name}</h3>
        <button className="logout">Logout</button>
        <p className="account-management">Account Management</p>
        <div className="links">
          <a href="pass">Change Password</a>
          <Link to="profile">Update Profile</Link>
        </div>
      </div>
      <div className="subjects">
        <p>Teaching Courses</p>
        {TeacherDetails.courses.map((course) => (
          <div key={uid()} className="courses">
            <h3>{course.courseName}</h3>
            <ul>
              <Link to={`/${course.courseId}attendance`}>
                <li>Attendance</li>
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetail;
