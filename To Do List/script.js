function addItem() {
    alert('test')
}

// const saveButton=document.getElementById('save');
// saveButton.addEventListener('click', data)


// function data() {
//     const listItem=document.createElement(li);
//     const textBox=document.getElementById('textBox');
//   console.log(textBox.value)
//     }

const title=document.getElementById('title');
title.style.backgroundColor="yellow";
const Save=document.getElementById('add');
const ul=document.getElementById('myList');
const itemText=document.getElementById('text');
Save.addEventListener('click',addItem);

function addItem(){
const listItem=document.createElement('li');
listItem.innerHTML=itemText.value;
ul.appendChild(listItem);
itemText.value="";
}


    /////////////////////////////////////////////////
    const name=document.getElementById('name');
    const age=document.getElementById('age');
    const save=document.getElementById('saveData');
    const table=document.getElementById('table');
    save.addEventListener('click',addData);
    
    function addData(){
    let tr=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerHTML=name.value;
    tr.appendChild(td1);
    let td2=document.createElement('td');
    td2.innerHTML=age.value;
    tr.appendChild(td2)
    table.appendChild(tr)
    }
    

//delete first and last items

const firstDelete=document.getElementById('firstItem');
const lastDelete=document.getElementById('lastItem');
firstDelete.addEventListener('click', deleteFirstItem);
lastDelete.addEventListener('click', deleteLastItem);
function deleteFirstItem() {
     ul.firstChild.remove();

     // Get the elements by their ids
const firstDelete = document.getElementById('firstItem');
const lastDelete = document.getElementById('lastItem');

// Add event listeners to the buttons
firstDelete.addEventListener('click', deleteFirstItem);
lastDelete.addEventListener('click', deleteLastItem);

// Define a function to delete the first item
function deleteFirstItem() {
  // Get the first child of the ul element
  let firstItem = document.querySelector('#myList li:first-child');

  // Remove the first item from the ul element
  firstItem.remove();
}

// Define a function to delete the last item
function deleteLastItem() {
  // Get the last child of the ul element
  let lastItem = document.querySelector('#myList li:last-child');

  // Remove the last item from the ul element
  lastItem.remove();
}
}

const taskForm = document.getElementById('addTaskForm');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskText;
    taskList.appendChild(newTaskItem);

    newTaskInput.value = '';
  }
});