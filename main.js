// selectors

const taskForm = document.getElementById("task-form");
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function createTask(){
    let inputValue = taskInput.value;

    if(inputValue){
        const listDiv = document.createElement("div");
        listDiv.classList.add("task")

        const taskName = document.createElement("input");
        taskName.classList.add("w-[80%]", "p-2");
        taskName.value = inputValue;
        taskName.setAttribute("readonly", "readonly");

        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("w-[20%]", "flex", "gap-2");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerText = "Delete";

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerText = "edit";

        buttonGroup.appendChild(deleteBtn);
        buttonGroup.appendChild(editBtn);

        listDiv.appendChild(taskName);
        listDiv.appendChild(buttonGroup);

        taskList.appendChild(listDiv);
    }else{;
        alert("Please insert a task!");
    }

    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.target.parentNode.parentNode.remove();
        });
      });


const editBtn = document.querySelectorAll(".edit");

editBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let task = e.target.parentNode.parentNode.firstElementChild;
    console.log(task);
    if (e.target.innerText === "edit") {
      task.removeAttribute("readonly");
      task.focus();
      item.innerText = "Save";
    } else {
      item.innerText = "edit";
      task.setAttribute("readonly", "readonly");
    }
  });
});

taskInput.value = "";
}

submit.addEventListener("click", (event) => {
event.preventDefault();
createTask();
});