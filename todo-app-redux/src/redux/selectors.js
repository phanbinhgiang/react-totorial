import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritySelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (priority.length < 1) {
        if (status === 'All') {
          return todo.name.toUpperCase().includes(searchText.toUpperCase());
        } else if (status === 'Completed') {
          return (
            todo.name.toUpperCase().includes(searchText.toUpperCase()) &&
            todo.completed
          );
        } else {
          return (
            todo.name.toUpperCase().includes(searchText.toUpperCase()) &&
            !todo.completed
          );
        }
      } else {
        if (status === 'All') {
          return (
            todo.name.toUpperCase().includes(searchText.toUpperCase()) &&
            priority.includes(todo.priority)
          );
        } else if (status === 'Completed') {
          return (
            todo.name.toUpperCase().includes(searchText.toUpperCase()) &&
            todo.completed &&
            priority.includes(todo.priority)
          );
        } else {
          return (
            todo.name.toUpperCase().includes(searchText.toUpperCase()) &&
            !todo.completed &&
            priority.includes(todo.priority)
          );
        }
      }
    });
  },
);
