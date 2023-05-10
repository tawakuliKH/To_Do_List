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
});