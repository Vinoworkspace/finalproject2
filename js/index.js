//Validate

const addNewTaskForm = document.querySelector("#addNewTaskForm");
// alert(addNewTaskForm);

// Add an 'onsubmit' event listener
addNewTaskForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  //Select
  const addTaskName = document.querySelector("#addTaskName");

 
  const addDescription = document.querySelector("#addDescription");

  const taskAssigned = document.querySelector("#taskAssigned");

const addDate = document.querySelector("#addDate");
    
  const errorMessageTaskName = document.querySelector("#alertMessageTaskName");
  const errorMessageDescription = document.querySelector(
    "#alertMessageDescription"
  );
  const errorMessageAssignedTo = document.querySelector(
    "#alertAssignedMessage"
  );
  const errorMessageDate= document.querySelector("#alertDateMessage");

  const taskName = addTaskName.value;
  //   alert(taskName);
  const description = addDescription.value;

    const assignedTo = taskAssigned.value;
    const date = addDate.value;
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
});

function validFormFieldInput(data) {
  return data !== null && data !== "";
}
