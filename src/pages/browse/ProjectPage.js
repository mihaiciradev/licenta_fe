import React from "react";
import "./ProjectPage.scss";
// import SprintSvg from "../../assets/SprintSvg";

export default function ProjectPage(props) {
  const { title, status, project, team, description } = props.project;

  return (
    <div className="ProjectPage">
      {/* <SprintSvg /> */}
      <h2>{title}</h2>

      <div id="project-info">
        <div id="project-main-info">
          <p>
            Status:
            <span> {status}</span>
          </p>
          <p>
            Team:
            <span> {team}</span>
          </p>
        </div>

        <div id="project-desc">
          <span>Description</span>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
