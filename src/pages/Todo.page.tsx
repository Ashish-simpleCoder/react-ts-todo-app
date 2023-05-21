import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, useColorMode } from '@chakra-ui/react'
import { ChangeEvent, SVGProps, useCallback, useEffect, useState } from 'react'

import AppButton from '../components/Button/AppButton'
import SearchBar from '../components/SearchBar/SearchBar'
import TodoContainer from '../components/Todo/TodoContainer'
import TodoInput from '../components/Todo/TodoInput'
import useCtrlKEventListener from '../hooks/use-ctrl-k-event-listener'
import useTodo from '../store/slices/todo-slice/useTodo'

export default function TodoPage() {
   const { todos } = useTodo()
   const [filteredTodos, setFilteredTodos] = useState(todos)
   const [filterValue, setFilterValue] = useState('')
   const { toggleColorMode, colorMode } = useColorMode()

   const handleSearchInput = useCallback(
      debouce((e: ChangeEvent<HTMLInputElement>) => {
         console.log('running')
         setFilterValue(e.target.value)
         const filteredTodos = todos.filter((todo) => {
            if (todo.title.toLocaleLowerCase().includes(e.target.value.toLowerCase())) {
               return todo
            }
         })
         setFilteredTodos(filteredTodos)
      }, 300),
      [todos]
   )

   useEffect(() => {
      setFilteredTodos(todos)
   }, [todos])

   const crtlKListener = (e: KeyboardEvent) => {
      const searchInput = document.getElementById('search-with-shortcut')
      searchInput?.focus()
   }

   useCtrlKEventListener(crtlKListener)

   return (
      <main>
         <Container maxW='container.xl'>
            <Flex direction={['row', 'row']} align={'center'} justify={'center'} py='2' gap={['2', '4']}>
               <Heading
                  as='h1'
                  flex='1'
                  size={['md']}
                  display={['none', 'flex']}
                  alignItems={'center'}
                  fontFamily={'cursive'}
                  gap='2'
               >
                  <PajamasTodoDone /> Todo App
               </Heading>
               <Heading as='h1' flex='1' size={['md', 'lg']} display={['block', 'none']}>
                  <PajamasTodoDone />
               </Heading>
               {todos.length !== 0 && (
                  <SearchBar
                     handleSearchInput={handleSearchInput}
                     searchShortcut={
                        <Box>
                           <span>Ctrl + K</span>
                        </Box>
                     }
                     inputId='search-with-shortcut'
                  />
               )}
               <AppButton onClick={toggleColorMode} colorScheme='purple'>
                  {colorMode == 'dark' ? <MoonIcon /> : <SunIcon />}
               </AppButton>
            </Flex>

            <TodoInput />

            <TodoContainer filteredTodos={filteredTodos} filterValue={filterValue} />
         </Container>
      </main>
   )
}
function debouce(fn: any, delay = 300) {
   let timer: NodeJS.Timer

   return (...args: any) => {
      if (timer) {
         clearTimeout(timer)
      }
      timer = setTimeout(() => fn(...args), delay)
   }
}

export function PajamasTodoDone(props: SVGProps<SVGSVGElement>) {
   return (
      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16' {...props}>
         <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3Zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01L15.78 4.68Z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}
