import { useState, useEffect } from "react";
import "./App.css";
import { Box, Button, Text ,Image} from "@chakra-ui/react";
import List from "./List";
function App() {
  const [data, setData] = useState([]);
  const handleAdvice = async () => {
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let data = await res.json();
      let actualData = data.slip;
      setData([actualData]);
      console.log(actualData);
    } catch (error) {
      console.log(error.message);
    }
  };
 
  return (
    <>
    <Box
      w={{ base: "90%", md: "70%", lg: "25%" }}
      backgroundColor='hsl(217, 19%, 24%)'
      margin="auto"
      marginTop={{base:"30%",lg:"16%"}}
      borderRadius='10px'
      
    >
      <Box>
        {data.length===0 ? <Text fontSize='28px' textAlign='center' paddingTop='30px' color='whitesmoke'>"Click on the Icon and get a Advice of the day"</Text>:
        data.map((ele) => (
          <List key={ele.id}
            id={ele.id}
            advice={ele.advice}
          />
        ))}
        
      </Box>
      
      <Image w='85%' margin='auto' marginTop='45px' paddingBottom='50px'  src="./images/pattern-divider-desktop.svg" alt='divider'/>
      
    </Box>
  
    
    <Image margin='auto' _hover={{boxShadow:'dark-lg'}} marginTop='-19' backgroundColor='hsl(150, 100%, 66%)' p='12px' borderRadius='50%' src='./images/icon-dice.svg'  alt='icon-dice' onClick={handleAdvice}/>
  
    </>
  );
}

export default App;
