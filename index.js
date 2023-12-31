"use strict"; 
import UI from "./ui.js";
import Task from "./task.js";
import LS from "./localStorage.js";  

const ui = new UI();
ui.showAllTasks();

document.querySelector(".AddTaskBtn").addEventListener("click",function(event){

    const taskTitle = document.getElementById("newtaskID").value;
    
    const task = new Task(taskTitle);
    ui.addToUI(task); 
    ui.resetForm();
    
    
    

});

document.querySelector(".task-list").addEventListener("click",function(e){

  if(e.target.className.includes("task__op_edit")){
    ui.editTask(e);
  }
    
 if(e.target.className.includes("task__op_delete")){
   ui.deleteTask(e);
 
 };

 if(e.target.className.includes("task-check")){
    ui.completeTask(e);
 }
 
});

document.querySelector(".EditTaskBtn").addEventListener("click",function(e){
ui.updateTask(e);
});

document.querySelector(".CancelTaskBtn").addEventListener("click",function(e){
  ui.cancelTask();
});
