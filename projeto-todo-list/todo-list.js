const createItem = (task) => {
  const itemTask = document.createElement('label');
  itemTask.classList.add('todo_item');
  itemTask.innerHTML = `
          <input type="checkbox" />
          <div>${task}</div>
          <input type="button" value="x" />
  `
  document.getElementById('todoList').appendChild(itemTask);
}