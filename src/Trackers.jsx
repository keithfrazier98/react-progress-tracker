import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Trackers.css";

function Trackers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        title: "Apply to jobs",
        goal: 5,
        current: 0,
        occurence: "daily",
        type: "inc",
      },
      {
        title: "Cold-Outreach",
        goal: 2,
        current: 0,
        occurence: "daily",
        type: "time",
      },
      {
        title: "Apply to jobs",
        goal: 5,
        current: 0,
        occurence: "daily",
        type: "inc",
      },
      {
        title: "Cold-Outreach",
        goal: 1,
        current: 0,
        occurence: "daily",
        type: "time",
      },
    ]);
  }, []);

  const trackers = [];
  data.forEach((element, index) => {
    const { title, goal, occurence, type, current } = element;
    trackers.push(
      <li>
        <div className="tracker">
          <div className="flex-container info">
            <div className="flex-container">
              <h4>{title}:</h4>
              <p>{goal}</p>
            </div>
            <p>{occurence}</p>
          </div>
          <ProgressBar
            current={current}
            goal={goal}
            type={type}
            index={index}
            setData={setData}
            data={data}
          />
        </div>
      </li>
    );
  });

  return <>{trackers}</>;
}

export default Trackers;