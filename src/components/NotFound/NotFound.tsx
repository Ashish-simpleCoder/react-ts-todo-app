import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function NotFound({ children }: { children: ReactNode }) {
   const bg = useColorModeValue('red.200', 'red.500')

   return (
      <HStack
         alignItems={'center'}
         justifyContent='center'
         maxW={'container.sm'}
         minH='100'
         marginInline={'auto'}
         bg={bg}
         mt='10'
         borderRadius={'base'}
      >
         <Box>{children}</Box>
      </HStack>
   )
}
