import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { TodoReducer } from './slices/todo-slice/todo-slice'

const ReduxStore = configureStore({
   reducer: {
      todos: TodoReducer,
   },
})

export function ReduxStoreProvider({ children }: { children: ReactNode }) {
   return <Provider store={ReduxStore}>{children}</Provider>
}

// persisting the typeof the state
export type RootState = ReturnType<typeof ReduxStore.getState>
