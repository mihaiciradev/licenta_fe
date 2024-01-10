export const tasks = [
  {
    title: "task 1",
    description: "description",
    sprint: "sprint 1",
    status: "in progress",
    project: "project 1",
    assignedTo: "Andrei",
    storyPoints: "5",
  },
  {
    title: "task 2",
    description: "another description",
    sprint: "sprint 1",
    status: "done",
    project: "project 1",
    assignedTo: "Matei",
    storyPoints: "5",
  },
];

export const projects = [
  {
    title: "project 1",
    status: "in progress",
    team: "team Blue",
    description: "sum description xD",
  },

  {
    title: "project 2",
    status: "done",
    team: "team Red",
    description: "sum description lol",
  },
];

export const sprints = [
  {
    title: "sprint 1",
    status: "in progress",
    project: "project 1",
    team: "team Blue",
    tasks: [tasks[0].title, tasks[1].title],
  },
  {
    title: "sprint 2",
    status: "done",
    project: "project 1",
    team: "team Red",
    tasks: [tasks[1].title],
  },
];

export const employees = [
  {
    name: "Ionel ionescu", //mandatory
    role: "Solution architect", //mandatory
    department: "Human resources", //mandatory
    tasks: ["CS-23", "CS-153", "CS-53134"], //mandatory, can be empty
    projects: ["caca"], //mandatory, can be empty
    availability: "on-site", //mandatory
    email: "mihai@ma-ta.com", //optional
    linkedin: "mihai@ma-ta.com", //optional
    phone: "+40 7noidoi", //optional
    teams: "mihai@ma-ta.com", //optional
  },
  {
    name: "Matei Alex", //mandatory
    role: "Solution architect", //mandatory
    department: "Human resources", //mandatory
    tasks: ["CS-23"], //mandatory, can be empty
    projects: ["caca"], //mandatory, can be empty
    availability: "on-site", //mandatory
    email: "blabla",
    linkedin: "mama",
    phone: "123",
    teams: "123456",
  },
];
