const initState = [
  {
    id: 1,
    name: 'Learn Yoga',
    completed: false,
    priority: 'Medium',
  },
  {
    id: 2,
    name: 'Learn Redux',
    completed: false,
    priority: 'High',
  },
  {
    id: 3,
    name: 'Learn javaScript',
    completed: false,
    priority: 'Low',
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/statusTodoChange':
      const tempTodoList = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.checked };
        } else return todo;
      });
      return tempTodoList;

    default:
      return state;
  }
};

export default todoListReducer;
