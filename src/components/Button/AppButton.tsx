import { Button, ButtonProps } from '@chakra-ui/react'

export default function AppButton(props: ButtonProps) {
   return <Button size={['xs', 'sm', 'md']} {...props} />
}
