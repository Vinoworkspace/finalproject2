//Validate
// const taskManager = new TaskManager(0);

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
  // taskManager.addNewTask(taskName, description, assignedTo, date, status );
  // taskManager.render();

  // addTaskName.value = "";
  // addDescription.value = "";
  // taskAssigned.value = "";
  // addDate.value = "";
  // console.log(tasks);
});

function validFormFieldInput(data) {
  return data !== null && data !== "";
}
