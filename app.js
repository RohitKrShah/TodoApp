const input = document.querySelector(".add input");
const add = document.querySelector(".add button");
const todo = document.querySelector(".todo");
const delete1 = document.querySelector(".footer button");

input.onkeyup = () => {
  let userEnteredValue = input.value;
  if (userEnteredValue.trim() != 0) {
    add.classList.add("active");
  } else {
    add.classList.remove("active");
  }
};
showTasks();
add.onclick = () => {
  let userEnteredValue = input.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  add.classList.remove("active");
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  if (listArray.length > 0) {
    delete1.classList.add("active");
  } else {
    delete1.classList.remove("active");
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todo.innerHTML = newLiTag;
  input.value = "";
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

delete1.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};
