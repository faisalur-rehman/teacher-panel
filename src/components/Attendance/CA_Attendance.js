import React, { useContext, useState } from "react";
import { TeacherContext } from "../../App";
import "./style.css";

const CA_Attendance = () => {
  const teacherData = useContext(TeacherContext);
  const [section, setSection] = useState(teacherData.courses[0].batchName[0]);

  const handleSectionChange = ({ target }) => {
    setSection(target.value);
  };

  return (
    <>
      <select value={section} onChange={handleSectionChange}>
        <option value={teacherData.courses[0].batchName[0]}>
          {teacherData.courses[0].batchName[0]}
        </option>
        <option value={teacherData.courses[0].batchName[1]}>
          {teacherData.courses[0].batchName[1]}
        </option>
      </select>
      <br />
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>

            {teacherData.courses[0].AttendanceMorning[0].attendance.map(
              (obj, index) => (
                <th
                  style={{ width: 80, display: "inline-block", marginRight: 2 }}
                >
                  Lecture No {index + 1}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {section === "BCSF17M"
            ? teacherData.courses[0].AttendanceMorning.map((sObj, index) => {
                return (
                  <tr key={index}>
                    <td>{sObj.rollNo}</td>
                    <td>{sObj.studentName}</td>
                    {sObj.attendance.map((obj) => (
                      <td
                        style={{
                          width: 80,
                          display: "inline-block",
                          marginRight: 2,
                        }}
                      >
                        {obj === "P" ? (
                          <div className="checkdiv grey400">
                            <input
                              type="checkbox"
                              className="le-checkbox"
                              checked
                            />
                          </div>
                        ) : (
                          <div className="checkdiv grey400">
                            <input type="checkbox" className="le-checkbox" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })
            : teacherData.courses[0].AttendanceAfternoon.map((sObj, index) => {
                return (
                  <tr key={index}>
                    <td>{sObj.rollNo}</td>
                    <td>{sObj.studentName}</td>
                    {sObj.attendance.map((obj) => (
                      <td
                        style={{
                          width: 80,
                          display: "inline-block",
                          marginRight: 2,
                        }}
                      >
                        {obj === "P" ? (
                          <div className="checkdiv grey400">
                            <input
                              type="checkbox"
                              className="le-checkbox"
                              checked
                            />
                          </div>
                        ) : (
                          <div className="checkdiv grey400">
                            <input type="checkbox" className="le-checkbox" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default CA_Attendance;
