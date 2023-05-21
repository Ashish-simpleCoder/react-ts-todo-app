import { useToast } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoActions } from './todo-slice'
import { RootState } from '../../store'
import { flushSync } from 'react-dom'

const useTodo = () => {
   const todos = useSelector((state: RootState) => state.todos.todos)
   const dispatch = useDispatch()

   const toast = useToast()

   const addTodo = useCallback(
      (todo: string) => {
         flushSync(() => {
            dispatch(
               TodoActions.ADD_TODO({
                  id: Date.now().toString(),
                  title: todo,
                  check: false,
               })
            )
         })

         toast({
            duration: 3000,
            status: 'success',
            title: 'Todo created successfully.',
            isClosable: true,
         })
      },
      [todos]
   )

   const deleteTodo = useCallback((id: string) => {
      dispatch(TodoActions.REMOVE_TODO(id))
   }, [])

   const checkTodo = useCallback((id: string) => {
      dispatch(TodoActions.CHECK_TODO(id))
      setTimeout(() => deleteTodo(id), 1000)
   }, [])

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

   return { todos, deleteTodo, checkTodo, addTodo }
}
export default useTodo
