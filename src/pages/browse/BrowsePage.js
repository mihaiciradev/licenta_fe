import "./BrowsePage.scss";
import EmployeePage from "./EmployeePage";
import ObjectList from "./ObjectList";
import { useEffect, useState } from "react";
import TaskPage from "./TaskPage";
import { employees, projects, sprints, tasks } from "../../database";
import SprintPage from "./SprintPage";
import ProjectPage from "./ProjectPage";

function BrowsePage() {
  const [page, setPage] = useState("");
  const [subPage, setSubPage] = useState({
    pageType: undefined,
    data: undefined,
  });

  const [employeeList, setEmployeeList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [sprintList, setSprintList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    //fetch data from api
    setEmployeeList(employees);
    setTaskList(tasks);
    setSprintList(sprints);
    setProjectList(projects);
  }, []);

  const changePage = (newPage) => {
    //fetch data from api

    setPage(newPage);
  };

  const RenderObjectPageChildren = () => {
    switch (page) {
      case "Employees":
        // return employees_example;
        return employeeList.map((e) => (
          <button
            onClick={() => {
              setSubPage({
                pageType: "Employee",
                data: e,
              });
            }}
          >
            {e.name}
          </button>
        ));
      case "Tasks":
        return taskList.map((t) => (
          <button
            onClick={() => {
              setSubPage({
                pageType: "Task",
                data: t,
              });
            }}
          >
            {t.title}
          </button>
        ));
      case "Sprints":
        return sprintList.map((s) => (
          <button
            onClick={() => {
              setSubPage({
                pageType: "Sprint",
                data: s,
              });
            }}
          >
            {s.title}
          </button>
        ));
      case "Projects":
        return projectList.map((p) => (
          <button
            onClick={() => {
              setSubPage({
                pageType: "Project",
                data: p,
              });
            }}
          >
            {p.title}
          </button>
        ));
      default:
        return null;
    }
  };

  const RenderSubPage = () => {
    if (!subPage.pageType) return null;

    switch (subPage.pageType) {
      case "Employee":
        return <EmployeePage employee={subPage.data} />;
      case "Task":
        return <TaskPage task={subPage.data} />;
      case "Sprint":
        return <SprintPage sprint={subPage.data} />;
      case "Project":
        return <ProjectPage project={subPage.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="browsePageContainer">
      <header>
        <button>text</button>
        <button>text</button>
        <button>text</button>
      </header>

      <div className="objects">
        <div id="objectTypesList">
          <h3>Pages</h3>
          <button
            onClick={() => {
              changePage("Tasks");
              setSubPage({ pageType: undefined });
            }}
          >
            Tasks
          </button>
          <button
            onClick={() => {
              changePage("Employees");
              setSubPage({ pageType: undefined });
            }}
          >
            Employees
          </button>

          <button
            onClick={() => {
              changePage("Sprints");
              setSubPage({ pageType: undefined });
            }}
          >
            Sprints
          </button>

          <button
            onClick={() => {
              changePage("Projects");
              setSubPage({ pageType: undefined });
            }}
          >
            Projects
          </button>
        </div>

        <ObjectList title={page}>{RenderObjectPageChildren()}</ObjectList>

        <div id="objectPage">
          {/* <EmployeePage employee={employee} /> */}
          {/* <TaskPage name="task 1" /> */}
          <RenderSubPage />
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;
