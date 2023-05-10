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
  
  test('delet a task', () => {
    todo.addTask('Task 1', false, 0);
    todo.addTask('Task 2', false, 1);
    todo.addTask('Task 3', false, 2);
    todo.addTask('Task 4', false, 3);
    todo.deleteItem(1);
    todo.deleteItem(2);
    todo.deleteItem(0);
    expect(todo.tasks.length).toBe(1);
  });
});
