const assert = require ("assert");

const TaskManager = require ("./../js/taskmanager.js");
console.log(TaskManager);

describe("testing TaskManager function",  () => {
   it("Add Task", () => {
       const taskManager = new TaskManager(0);
    
     taskManager.addNewTask("shoppping", "At Aldi", "Lavina", "24/01/2021");
     let len = taskManager.tasks.length;
     assert.strictEqual(len, 1);
   }) 

   it("Delete Task", () =>{
     const taskManager = new TaskManager(0);

     taskManager.deleteTask(0);
     let len = taskManager.tasks.length;
     assert.strictEqual(len,0);

   })

   it("Get task by id", () =>{
       const taskManager = new TaskManager(0);

       taskManager.getTaskById(0);
       let len = taskManager.tasks.length;
       assert.strictEqual(len, 0);
   })

});

