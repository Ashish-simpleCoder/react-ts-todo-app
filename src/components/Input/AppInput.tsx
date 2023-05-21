import { Input, InputProps } from '@chakra-ui/react'

export default function AppInput(props: InputProps) {
   return <Input size={['xs', 'sm', 'md']} {...props} />
}
