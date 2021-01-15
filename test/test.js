const assert = require("assert");
const TaskManager = require("./../js/taskmanager.js");
console.log(TaskManager);

describe("Testing TaskManager Function",() =>{
    it("Add Task", () => {
        const taskManager = new TaskManager(0);
       
        taskManager.addNewTask("shopping", "At Aldi", "Josh", "24/01/2021");
         let len = taskManager.tasks.length;
        assert.strictEqual(len, 1);

    })
    it("Delete Task", ()=>{
        const taskManager = new TaskManager(0);
         taskManager.addNewTask("shopping", "At Aldi", "Vino", "24/01/2021");
         taskManager.addNewTask("Park", "Lane cove National Park", "John", "28/01/2021");
          
        taskManager.deleteTask(0);
        let len = taskManager.tasks.length;
        assert.strictEqual(len, 1);
       
    })
    it("Get Task By Id", ()=> {
        const taskManager = new TaskManager(0);
         newTask = taskManager.addNewTask("shopping", "At Aldi", "Lavina", "24/01/2021");
         expectedTask = taskManager.getTaskById(0);
         newTaskName = "shopping";
         console.log(expectedTask);
         console.log(newTask);
       
         
        taskManager.getTaskById(1);
        assert.strictEqual(expectedTask.name, newTaskName);

    })
});

