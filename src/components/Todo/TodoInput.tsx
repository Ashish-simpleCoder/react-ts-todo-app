import { AddIcon } from '@chakra-ui/icons'
import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { FormEvent, useCallback, useState } from 'react'
import useTodo from '../../store/slices/todo-slice/useTodo'
import AppButton from '../Button/AppButton'
import AppInput from '../Input/AppInput'

export default function TodoInput() {
   const [todo, setTodo] = useState('')
   const { addTodo } = useTodo()
   const inputBg = useColorModeValue('#f4f4f4', '#404040')

   const handleAddTodo = useCallback((e: FormEvent, todo: string) => {
      e.preventDefault()
      if (!todo) return
      addTodo(todo)
      setTodo('')
   }, [])

   return (
      <form onSubmit={(e) => handleAddTodo(e, todo)}>
         <Box mt='7' display={'flex'} justifyContent={'center'}>
            <HStack maxW='container.sm'>
               <AppInput
                  type='text'
                  value={todo}
                  bg={inputBg}
                  onChange={(e) => {
                     e.target.value.length < 45 && setTodo(e.target.value)
                  }}
                  placeholder='todo...'
               />
               <AppButton colorScheme={'green'} type='submit'>
                  <AddIcon />
               </AppButton>
            </HStack>
         </Box>
      </form>
   )
}
