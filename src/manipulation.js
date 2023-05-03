import Todo from './todo';

// Display list
const display = () => {
  const task = new Todo();
  const localTasks = JSON.parse(localStorage.getItem('localTasks'));
  const items = document.querySelector('.items');

  if (localTasks != null) {
    localTasks.forEach((localtask) => {
      const tt = {
        desc: localtask.desc,
        completed: localtask.completed,
        index: localtask.index,
      };
      task.tasks.push(tt);
      items.innerHTML += `<form class='item item${localtask.index}'>
      <div class='item-desc'><div class='check'><input type='checkbox' id='check${localtask.index}' class='checkbox'></div><input type='text' id='desc${localtask.index}' class='desc' value='${localtask.desc}'></div>
      <div class='humberger'><img class='humberger-image humberger-image${localtask.index}' src='assets/images/more.png' alt='humberger'> <img class='trash-image trash-image${localtask.index}' src='assets/images/trash.png' alt='trash'></div>
      </form>`;
    });
  }

  const submitButton = document.querySelector('.add-input');
  submitButton.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      task.addTask(submitButton.value, false, task.tasks.length);
    }
  });

  // Show onclick background
  task.showBG();

  // Delete
  const trashBtn = document.querySelectorAll('.trash-image');
  task.deleteItem(trashBtn);

  // Edit
  const descInput = document.querySelectorAll('.desc');
  task.updateList(descInput);

  // reload
  const reloadBtn = document.querySelector('.reload-image');
  task.reload(reloadBtn);
};

export default display;