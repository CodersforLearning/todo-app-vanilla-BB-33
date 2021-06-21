const tasks_div=document.getElementById("tasks");

function make_task(text){
  let new_task=document.createElement("div");
  new_task.className ="task";
  
  let node=document.createTextNode(text);
  new_task.appendChild(node);
  
  let box=document.createElement("input");
  box.type="checkbox";
  new_task.appendChild(box);
  
  tasks_div.appendChild(new_task);
}

const text_input = document.getElementById("text-input");

text_input.addEventListener("keyup",function(event) {
  if (event.keyCode === 13) {
  event.preventDefault();
  make_task(text_input.value);
  text_input.value='';
  console.log("text-input works");
  }
}
);

const clear_button = document.getElementById("clear-button");

clear_button.addEventListener("click",clear);

function clear(){
  console.log("Clear is working")
  let tasks=document.getElementsByClassName("task");
  while(tasks.length){
    tasks[0].parentNode.removeChild(tasks[0]);
  }
}
