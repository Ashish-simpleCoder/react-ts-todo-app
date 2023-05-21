import { ChakraProvider } from '@chakra-ui/react'
import { ReduxStoreProvider } from './store/store'
import TodoPage from './pages/Todo.page'

export default function App() {
   return (
      <>
         <ChakraProvider>
            <ReduxStoreProvider>
               <TodoPage />
            </ReduxStoreProvider>
         </ChakraProvider>
      </>
   )
}
