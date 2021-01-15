
$.getJSON("http://api.openweathermap.org/data/2.5/find?q=Sydney&units=metric&appid=3d89b002aa44bca911b43860f8111858",
  function (data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"; 
    // console.log(icon);
    var temp = Math.floor(data.list[0].main.temp);
    var weather = data.list[0].main;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
  }
);

//Validate
const taskManager = new TaskManager(0);

// Load the tasks from localStorage
taskManager.load();

// Render the tasks to the page
taskManager.render();

const addNewTaskForm = document.querySelector("#addNewTaskForm");
// alert(addNewTaskForm);

// Add an 'onsubmit' event listener
addNewTaskForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();
  // event.stopPropagation();

  //Select
  const addTaskName = document.querySelector("#addTaskName");

  const addDescription = document.querySelector("#addDescription");

  const taskAssigned = document.querySelector("#taskAssigned");

  const addDate = document.querySelector("#addDate");

  const addStatus = document.querySelector("#status");

  //Validation code

  const errorMessageTaskName = document.querySelector("#alertMessageTaskName");
  const errorMessageDescription = document.querySelector(
    "#alertMessageDescription"
  );
  const errorMessageAssignedTo = document.querySelector(
    "#alertAssignedMessage"
  );
  const errorMessageDate = document.querySelector("#alertDateMessage");

  const taskName = addTaskName.value;
  //   alert(taskName);
  const description = addDescription.value;
  const assignedTo = taskAssigned.value;
  const date = addDate.value;
  const status = addStatus.value;
  let isValid = false;

  if (!validFormFieldInput(taskName)) {
    errorMessageTaskName.innerHTML = "Invalid name input";
    errorMessageTaskName.style.display = "block";
  } else {
    errorMessageTaskName.style.display = "none";
  }
  if (!validFormFieldInput(description)) {
    errorMessageDescription.innerHTML = "Invalid description";
    errorMessageDescription.style.display = "block";
  } else {
    errorMessageDescription.style.display = "none";
  }
  if (!validFormFieldInput(assignedTo)) {
    errorMessageAssignedTo.innerHTML = "Invalid Assignee";
    errorMessageAssignedTo.style.display = "block";
  } else {
    errorMessageAssignedTo.style.display = "none";
  }
  if (!validFormFieldInput(date)) {
    errorMessageDate.innerHTML = "Invalid Date";
    errorMessageDate.style.display = "block";
  } else {
    errorMessageDate.style.display = "none";
  }

  if (
    validFormFieldInput(taskName) &&
    validFormFieldInput(description) &&
    validFormFieldInput(assignedTo) &&
    validFormFieldInput(date)
  ) {
    taskManager.addNewTask(taskName, description, assignedTo, date, status);

    // Save the tasks to localStorage
    taskManager.save();

    //render task
    taskManager.render();

    addTaskName.value = "";
    addDescription.value = "";
    taskAssigned.value = "";
    addDate.value = "";
    addStatus.value = "";
    // // console.log(tasks);
  }
});
const tasksList = document.querySelector("#taskList");

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  console.log(event.target)
  if (event.target.classList.contains("done-button")) {
    // Get the parent Task
    // const parentTask = event.target.parentElement.parentElement;
    const markDoneButton = event.target;

    // Get the taskId of the parent Task.
    // const taskId = Number(parentTask.dataset.taskId);
    const taskId = Number(markDoneButton.value);
    console.log(typeof taskId);
    // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);

    // Update the task status to 'DONE'
    task.status = "DONE";

    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
  }

  // Check if a "Delete" button was clicked
  if (event.target.classList.contains("delete-button")) {
    console.log("delete-button");
    // Get the parent Task
    // const parentTask = event.target.parentElement.parentElement;
     const deleteButton = event.target;
    // Get the taskId of the parent Task.
    // const taskId = parentTask.dataset.taskId;
    const taskId = Number(deleteButton.value);

    console.log(`taskId: ${taskId}`);
    // Delete the task
    taskManager.deleteTask(taskId);
    
    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
  }

  
});

function validFormFieldInput(data) {
  return data !== null && data !== "";
}
