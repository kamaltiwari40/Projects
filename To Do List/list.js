function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const taskText = taskInput.value;
  
      const li = document.createElement('li');
      li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(li);
  
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  }
  
  function deleteTask(task) {
    const listItem = task.parentElement;
    listItem.remove();
  }