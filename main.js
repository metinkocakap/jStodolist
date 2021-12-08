//selectors
const input = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");

//event listeners
submitBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(e) {
  e.preventDefault();
  if (input.value !== "") {
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoList.appendChild(todoDiv);

    //create li
    const newInputItem = document.createElement("li");
    newInputItem.innerText = input.value;
    newInputItem.classList.add("newInputItemStyle");
    todoDiv.appendChild(newInputItem);

    //create check
    const itemCheck = document.createElement("button");
    itemCheck.innerHTML = '<i class="fas fa-check"></i>';
    itemCheck.classList.add("itemCheckStyle");
    todoDiv.appendChild(itemCheck);

    //create delete
    const itemDelete = document.createElement("button");
    itemDelete.innerHTML = '<i class="fas fa-trash"></i>';
    itemDelete.classList.add("itemDeleteStyle");
    todoDiv.appendChild(itemDelete);
  }
  input.value = "";
}

function deleteCheck(event) {
  console.log(event.target);

  const clickItem = event.target;
  const todo = clickItem.parentElement;
  if (clickItem.classList[0] === "itemDeleteStyle") {
    todo.classList.add("todoDelete");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (clickItem.classList[0] === "itemCheckStyle") {
    todo.classList.toggle("todoChecked");
  }
}
