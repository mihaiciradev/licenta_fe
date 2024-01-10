import React from "react";
import "./SprintPage.scss";
import SprintSvg from "../../assets/SprintSvg";

export default function SprintPage(props) {
  const { title, status, project, team, tasks } = props.sprint;

  return (
    <div className="SprintPage">
      <SprintSvg />
      <h2>{title}</h2>

      <div id="sprint-info">
        <div id="sprint-main-info">
          <p>
            Status:
            <span> {status}</span>
          </p>
          <p>
            Project:
            <span> {project}</span>
          </p>
          <p>
            Team:
            <span> {team}</span>
          </p>
        </div>

        <div id="sprint-desc">
          <span>Tasks</span>
          <div>
            {tasks.map((t) => (
              <p>&bull; {t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
