class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addNewTask(taskName, description, assignedTo, date, updateStatus) {
    const task = {
      id: this.currentId++,
      name: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: date,
      status: updateStatus,
    };
    this.tasks.push(task);
  }
  render() {
    const tasksHtmlList = [];
    
    const addDiv = document.querySelector("#addTaskDiv");
    for (let i = 0; i < this.tasks.length; i++) {
      const taskHtml = addTaskHtml(
        this.tasks[i].id,
        this.tasks[i].name,
        this.tasks[i].description,
        this.tasks[i].assignedTo,
        this.tasks[i].dueDate,
        this.tasks[i].status
      );
      const taskHtml = addTaskHtml(
        task.id,
        task.taskName,
        task.description,
        task.assignedTo,
        task.date,
        task.updateStatus
      );
      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join("\n");
    addDiv.innerHTML += taskHtml;
  }
}



// taskManager.taskPlanner();

// taskManager.addNewTask(
//   "Go to the mall",
//   "Buy milk,egg,bread.",
//   "20/12/2020",
//   "Josh",
//   "To Do"
// );
const addTaskHtml = (id, name, description, dueDate, assignedTo, status) => {
  return `<div class="card mx-2 my-2" style="width: 14rem">
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
                >${assignedTo}-${status}
                <button
                  class="btn btn-primary btn-sm"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  Edit
                </button>
                <button class="btn btn-danger btn-sm" type="button">
                  Delete
                </button>
              </small>
            </div>
          </div>`;
};
