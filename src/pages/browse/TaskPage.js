import React from "react";
import "./TaskPage.scss";
import TaskSvg from "../../assets/task";

export default function TaskPage(props) {
  const {
    title,
    description,
    sprint,
    status,
    project,
    assignedTo,
    storyPoints,
  } = props.task;

  return (
    <div className="TaskPage">
      <TaskSvg />
      <h2>{title}</h2>

      <div id="task-info">
        <div id="task-main-info">
          <p>
            Status:
            <span> {status}</span>
          </p>
          <p>
            Assigned to:
            <span> {assignedTo}</span>
          </p>
        </div>

        <div id="task-desc">
          <span>Description</span>
          <p>
            desc descdescdescdescdescdesc desc desc desc {description} desc
            descdescdescdescdescdesc desc desc desc {description} desc
            descdescdescdescdescdesc desc desc desc {description}desc
            descdescdescdescdescdesc desc desc desc {description}
          </p>
        </div>

        <div id="task-side-info">
          <p>
            Sprint:
            <span> {sprint}</span>
          </p>

          <p>
            Project:
            <span> {project}</span>
          </p>

          <p>
            Story points:
            <span> {storyPoints}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
