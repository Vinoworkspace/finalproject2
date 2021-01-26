const assert = require ("assert");

const TaskManager = require ("./../js/taskmanager.js");
console.log(TaskManager);

describe("testing TaskManager function",  () => {
   it("Add Task", () => {
       const taskManager = new TaskManager(0);
    
     taskManager.addNewTask("shopping", "At Aldi", "Vino", "24/01/2021");
     let len = taskManager.tasks.length;
     assert.strictEqual(len, 1);
   }) 

   it("Delete Task", () =>{
     const taskManager = new TaskManager(0);
     taskManager.addNewTask("shopping", "At Aldi", "Vino", "24/01/2021");
     taskManager.addNewTask("shopping", "At Kmart", "Josh", "28/01/2021");
     taskManager.deleteTask(0);
     let len = taskManager.tasks.length;
     assert.strictEqual(len,1);

   })

   it("Get task by id", () =>{
       const taskManager = new TaskManager(0);
       newTask= taskManager.addNewTask("shopping", "At Aldi", "Vino", "24/01/2021");
       expectedTask = taskManager.getTaskById(0);
       newTaskName = "shopping";
      
       taskManager.getTaskById(1);
       assert.strictEqual(expectedTask.name , newTaskName);
   })

});

