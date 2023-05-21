import { Flex, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Todo as ITodo } from '../../store/slices/todo-slice/todo-slice'
import useTodo from '../../store/slices/todo-slice/useTodo'
import Todo from './Todo'
import NotFound from '../NotFound/NotFound'

export default function TodoContainer(props: { filteredTodos: ITodo[]; filterValue: string }) {
   const { todos } = useTodo()

   return (
      <>
         <AnimatePresence>
            <motion.div>
               <Flex direction='column' gap={['4', '5']} my='10'>
                  {props.filteredTodos.map((todo) => (
                     <Todo key={todo.id} title={todo.title} id={todo.id} check={todo.check} />
                  ))}
               </Flex>

               {props.filteredTodos.length == 0 && todos.length !== 0 && props.filterValue && (
                  <NotFound>
                     <Text>no note found</Text>
                  </NotFound>
               )}
            </motion.div>
         </AnimatePresence>
      </>
   )
}
