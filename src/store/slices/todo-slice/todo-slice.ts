import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
   id: string
   title: string
   check: boolean
}

// getting todos from local storage
const todos: Todo[] = JSON.parse((localStorage?.getItem('todos') || '[]'))

const TodoSlice = createSlice({
   name: "Todos",
   initialState: { todos },
   reducers: {
      ADD_TODO: (state, action) => {
         state.todos.unshift(action.payload)
      },
      REMOVE_TODO: (state, action) => {
         state.todos = state.todos.filter(todo => todo.id !== action.payload)
      },

      CHECK_TODO: (state, action) => {
         state.todos = state.todos.map(todo => {
            if (todo.id == action.payload) {
               todo.check = !todo.check
               return todo
            }
            return todo
         })
      }
   }
})
export const { reducer: TodoReducer, actions: TodoActions } = TodoSlice