//function to create a new task

function createTask(newtask) {
  //create a new div element to hold the task

  const taskEle = document.createElement("div");
  console.log(taskEle);

  //add new css set attribute
  taskEle.setAttribute("class", "task");
  //   taskEle.className = 'task'

  //create a text node cotnaing the text

  const taskNodeEl = document.createTextNode("Programming");

  //append child text node to the created div
  taskEle.appendChild(taskNodeEl);
  console.log(taskNodeEl);

  //append the craeted ele into the container

  document.getElementById("container").appendChild(taskEle);
}

createTask();

createTask();
createTask();
createTask();
