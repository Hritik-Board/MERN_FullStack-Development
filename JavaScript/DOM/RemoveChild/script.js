//Function to add new student

function addStudent(name, grade) {
  //create a new div to hold student info

  const stdEle = document.createElement("div");

  //addd css

  stdEle.className = "student";

  //create a text node containg the name and grade

  const studenttextNode = document.createTextNode(`${name}: ${grade}`);

  //append child
  stdEle.appendChild(studenttextNode);

  //select the contanier
  const containerEle = document.getElementById("studentList");

  //Decide where to append the text
  let beforeNode = null;

  //loo[ through and container to find the positoon

  for (const child of containerEle.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);

    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }

  //insert new student
  containerEle.insertBefore(stdEle, beforeNode);
  console.log(stdEle);
}

addStudent("Emma", "90");
addStudent("Emmanuel", "70");

addStudent("Hritik", "100");
