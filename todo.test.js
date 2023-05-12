import Todo from './src/todo';

describe('ToDo', () => {
  let todo;
  beforeEach(() => {
    todo = new Todo();
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('adds a task', () => {
    todo.addTask('Task 1', false, 0);
    expect(todo.tasks.length).toBe(1);
  });

  test('Delete a task', () => {
    todo.addTask('Task 2', false, 0);
    todo.addTask('Task 2', false, 1);
    todo.deleteItem(0);
    expect(todo.tasks.length).toBe(1);
  });

  test('edit a task', () => {
    todo.addTask('Hello', false, 0);
    todo.tasks[0].desc = 'Hi';
    expect(todo.tasks[0].desc).toBe('Hi');
  });

  test('Update a task', () => {
    todo.addTask('Hello', false, 0);
    todo.updateList('Hi', 0);
    expect(todo.tasks[0].desc).toBe('Hi');
  });

  test('Clear All tasks', () => {
    todo.addTask('Do the Home work', true, 0);
    todo.addTask('Wash', true, 0);
    todo.addTask('Go School', false, 0);
    const checkedIndex = todo.completedTasks();
    todo.clearAll(checkedIndex);
    expect(todo.tasks.length).toBe(1);
  });
});