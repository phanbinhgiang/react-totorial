export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const searchFilterChanged = (text) => {
  return {
    type: 'filter/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: 'filter/statusFilterChange',
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: 'filter/statusPriorityChange',
    payload: priority,
  };
};

export const statusTodoChange = (id, checked) => {
  return {
    type: 'todoList/statusTodoChange',
    payload: { id, checked },
  };
};
