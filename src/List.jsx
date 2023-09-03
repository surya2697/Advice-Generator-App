import React from 'react'
import { Text} from '@chakra-ui/react'
const List = ({id,advice}) => {
  return (
    <div>
      <Text color='hsl(150, 100%, 66%)' fontSize='sm' fontWeight='500' paddingTop='20px' textAlign='center'>ADVICE #{id}</Text>
      <Text fontSize='28px' textAlign='center' paddingTop='30px' color='whitesmoke'>"{advice}"</Text>
    </div>
  )
}

export default List
