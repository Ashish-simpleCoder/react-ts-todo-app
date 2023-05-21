import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import useTodo from '../../store/slices/todo-slice/useTodo'
import AppButton from '../Button/AppButton'

export default function Todo(props: { title: string; id: string; check: boolean }) {
   const [fadeout, setFadeout] = useState(false)
   const bg = useColorModeValue('blue.100', 'blue.600')
   const disablebg = useColorModeValue('gray.300', 'gray.600')

   const { checkTodo, deleteTodo } = useTodo()

   const fadeOutAndDelete = useCallback(
      (id: string) => {
         setFadeout(true)
         checkTodo(id)
      },
      [setFadeout, checkTodo]
   )

   return (
      <>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}>
            <Flex justifyContent={'center'}>
               <HStack
                  onClick={() => fadeOutAndDelete(props.id)}
                  cursor='pointer'
                  className={fadeout ? 'deleteAnimation' : ''}
                  title='click to mark as complete'
                  flex={'true'}
                  maxW='container.sm'
                  w='full'
               >
                  <Text
                     w='container.lg'
                     bg={fadeout ? disablebg : bg}
                     display={'flex'}
                     alignItems='center'
                     h='full'
                     px='4'
                     py={['0', '0']}
                     fontSize={['14px', '16px']}
                     borderRadius={'0.5rem'}
                     overflowY='auto'
                  >
                     {props.title}
                  </Text>

                  <AppButton onClick={() => fadeOutAndDelete(props.id)} colorScheme='teal' title='mark as complete'>
                     <CheckIcon />
                  </AppButton>

                  <AppButton onClick={() => deleteTodo(props.id)} colorScheme='red' title='delete todo'>
                     <DeleteIcon />
                  </AppButton>
               </HStack>
            </Flex>
         </motion.div>
      </>
   )
}
