import { SearchIcon } from '@chakra-ui/icons'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, ReactNode, useState } from 'react'
import AppInput from '../Input/AppInput'

export default function SearchBar(props: {
   handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
   searchShortcut?: ReactNode
   inputId?: string
}) {
   const inputBg = useColorModeValue('#f4f4f4', '#404040')
   const [shouldAddFocusClass, setShouldAddFocusClass] = useState(false)

   const handleFocus = () => {
      setShouldAddFocusClass(true)
   }
   const handleBlur = () => {
      setShouldAddFocusClass(false)
   }

   return (
      <Flex
         bg={inputBg}
         borderRadius='base'
         borderColor='whiteAlpha.300'
         borderWidth={'1px'}
         alignItems={'center'}
         paddingX='1rem'
         gap={['1', '2', '3']}
         boxShadow={shouldAddFocusClass ? 'outline' : ''}
      >
         <SearchIcon />
         <AppInput
            id={props.inputId}
            type='search'
            placeholder={'search todos...'}
            onChange={props.handleSearchInput}
            border='none'
            boxShadow='none'
            padding={['0', '0', '0']}
            _focus={{
               border: 'none',
               boxShadow: 'none',
            }}
            _focusVisible={{
               border: 'none',
               boxShadow: 'none',
            }}
            flex='1'
            title='search todos'
            aria-label='search todos'
            onFocus={handleFocus}
            onBlur={handleBlur}
         />
         {props?.searchShortcut}
      </Flex>
   )
}
