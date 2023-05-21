import { useEventListener } from '@chakra-ui/react'
import { useRef } from 'react'

export default function useCtrlKEventListener(callback: (e: KeyboardEvent) => void) {
   const keysRef = useRef<string[]>([])

   const handleCtrlPlusK = (e: KeyboardEvent) => {
      if (e.key == 'Control' || e.key == 'k') {
         e.preventDefault()
         if (!keysRef.current.includes(e.key)) {
            keysRef.current = [...keysRef.current, e.key]
         }
         if (keysRef.current[0] == 'Control' && keysRef.current[1] == 'k') {
            callback(e)
            keysRef.current = []
         }
      }
   }

   const popKey = () => keysRef.current.pop()

   useEventListener('keydown', handleCtrlPlusK)
   useEventListener('keyup', popKey)
}
