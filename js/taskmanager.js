class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  
  addNewTask(taskName, description, assignedTo, date) {
    const task = {
      id: this.currentId++,
      name: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: date,
      status: "TODO",
    };
    this.tasks.push(task);
  }


   // Create the deleteTask method
    deleteTask(taskId) {
        // Create an empty array and store it in a new variable, newTasks
        const newTasks = [];

        console.log(`taskId: ${taskId}`);

        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if the task id is not the task id passed in as a parameter
            if (task.id !== taskId) {
                // Push the task to the newTasks array
                newTasks.push(task);
            }
        }

        // Set this.tasks to newTasks
        this.tasks = newTasks;
        console.log(this.tasks);
    }


  // // Create the deleteTask method
  // deleteTask(taskId) {
  //   // Create an empty array and store it in a new variable, newTasks
  //   const newTasks = [];

  //   // Loop over the tasks
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     // Get the current task in the loop
  //     const task = this.tasks[i];

  //     // Check if the task id is not the task id passed in as a parameter
  //     if (task.id !== taskId) {
  //       // Push the task to the newTasks array
  //       newTasks.push(task);
  //     }
  //   }

  //   // Set this.tasks to newTasks
  //   this.tasks = newTasks;
  // }


  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;

    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];
      console.log("task.id: " + typeof task.id);

      // Check if its the right task by comparing the task's id to the id passed as a parameter
      if (task.id === taskId) {
        // Store the task in the foundTask variable
        foundTask = task;
      }
    }

    // Return the found task
    return foundTask;
  }

  render() {
    // Create an array to store the tasks' HTML
    const tasksHtmlList = [];
    // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];
      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // Create the task html
      const taskHtml = addTaskHtml(
        task.id,
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );

      // Pass the task id as a parameter
      //  taskHtml = addTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

      // Push it to the tasksHtmlList array
      tasksHtmlList.push(taskHtml);
    }
    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join("\n");
    //alert(tasksHtml);
    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector("#taskList");
    tasksList.innerHTML = tasksHtml;
  }
  // Create the save method
  save() {
    // Create a JSON string of the tasks
    const tasksJson = JSON.stringify(this.tasks);
    // Store the JSON string in localStorage
    localStorage.setItem("tasks", tasksJson);
    // Convert the currentId to a string;
    const currentId = String(this.currentId);
    // Store the currentId in localStorage
    localStorage.setItem("currentId", currentId);
  }
  // Create the load method
  load() {
    // Check if any tasks are saved in localStorage
    if (localStorage.getItem("tasks")) {
      // Get the JSON string of tasks in localStorage
      const tasksJson = localStorage.getItem("tasks");
      // Convert it to an array and store it in our TaskManager
      this.tasks = JSON.parse(tasksJson);
    }
    // Check if the currentId is saved in localStorage
    if (localStorage.getItem("currentId")) {
      // Get the currentId string in localStorage
      const currentId = localStorage.getItem("currentId");
      // Convert the currentId to a number and store it in our TaskManager
      this.currentId = Number(currentId);
    }
  }
}

const addTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
  // console.log("name: "+ name ) ;
  // console.log("description: " + description);
  // console.log("assignedTo: " + assignedTo ) ;
  // console.log("dueDate: " + dueDate ) ;
  // console.log("status: " + status) ;
  // console.log("id: "+ id ) ;

  
  return `<li class="list-group-item" data-task-id="${id}">
          <div class="card border" style="width: 14rem">
             <div class="card-body">
              <h5 class="card-title"><strong>${name}</strong></h5>
               
              <p class="card-text">
                ${description}
                </p>
             <p  class="card-text"> 
             DueDate: <br>${dueDate}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"
                 >${assignedTo}
                     -<span class="badge ${
                       status === "TODO" ? "badge-danger" : "badge-success"
                     }">${status}</span>
                   
                <button
                  class="btn btn-primary btn-sm"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  Edit
                </button>
                <button class="btn btn-danger delete-button" type="button" " value = "${id}">Delete</button>
              </small>
              <br>
              <br>
              <div class="d-flex w-90 justify-content-end">
                <button class="btn btn-outline-success done-button ${
                  status === "TODO" ? "visible" : "invisible"
                }" value = "${id}">Mark As Done</button> 
                
                
              </div>
            </div>
          </div>
      </li>
 `;
};

module.exports = TaskManager;
