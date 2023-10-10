document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const editTaskModal = document.getElementById("editTaskModal");
  const editedTaskInput = document.getElementById("editedTask");
  const saveEditedTaskButton = document.getElementById("saveEditedTask");
  const closeModalButton = document.querySelector(".close");

  let editedTaskListItem = null;

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
              <span>${taskText}</span>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
              <button class="move-up-btn">↑</button>
              <button class="move-down-btn">↓</button>
          `;
      taskList.appendChild(listItem);
      taskInput.value = "";

      // event listeners to the edit, delete, move-up, and move-down buttons
      const editButton = listItem.querySelector(".edit-btn");
      editButton.addEventListener("click", () => {
        openEditModal(listItem);
      });

      const deleteButton = listItem.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });

      const moveUpButton = listItem.querySelector(".move-up-btn");
      moveUpButton.addEventListener("click", () => {
        moveTaskUp(listItem);
      });

      const moveDownButton = listItem.querySelector(".move-down-btn");
      moveDownButton.addEventListener("click", () => {
        moveTaskDown(listItem);
      });
    }
  }

  // Event listener for adding a new task
  addTaskButton.addEventListener("click", addTask);

  // Event listener for adding a new task with Enter
  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Open edit task
  function openEditModal(taskListItem) {
    editedTaskInput.value = taskListItem
      .querySelector("span")
      .textContent.trim();
    editedTaskListItem = taskListItem;
    editTaskModal.style.display = "block";
  }

  // Save the edited task
  saveEditedTaskButton.addEventListener("click", function () {
    const editedText = editedTaskInput.value.trim();
    if (editedText !== "") {
      editedTaskListItem.querySelector("span").textContent = editedText;
      closeModal();
    }
  });

  // Close the edit task
  closeModalButton.addEventListener("click", closeModal);

  // Function to close the modal
  function closeModal() {
    editedTaskInput.value = "";
    editedTaskListItem = null;
    editTaskModal.style.display = "none";
  }

  // Function to move a task up
  function moveTaskUp(taskListItem) {
    const prevTask = taskListItem.previousElementSibling;
    if (prevTask) {
      taskList.insertBefore(taskListItem, prevTask);
    }
  }

  // Function to move a task down
  function moveTaskDown(taskListItem) {
    const nextTask = taskListItem.nextElementSibling;
    if (nextTask) {
      taskList.insertBefore(nextTask, taskListItem);
    }
  }
});
