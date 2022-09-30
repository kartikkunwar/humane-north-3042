import React from "react";
import {Container,FormControl,FormLabel,Input,Box,CircularProgress,Button,Alert,AlertIcon} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const details={
    email:"",
    pass:""
 }

const Login=()=>{
   const [flag,setFlag]=React.useState(false)
   const [match,setMatch]=React.useState(details)
   const [back,setBack]=React.useState([])
   const navigate=useNavigate();

   React.useEffect(()=>{
    axios.get("http://localhost:3004/signup")
    .then((res)=>setBack(res.data))
    .catch((err)=>console.log(err))
   },[])
   
const getvalue=(e)=>{
   setMatch({...match,[e.target.name]:e.target.value})
}

const matchData=()=>{
    setFlag(true)
  let filtered=back.filter((el)=>{
    return el.email==match.email&&el.pass==match.pass
  });
  if(filtered.length){
    navigate("/navbar")
  }else{
    alert("wrong");
    setFlag(false)
    setMatch(details)
  }
}

document.querySelector("body").style.backgroundColor="black"
    
    
    return(
      <Container p={100} w="40%" margin="auto" position="relative">
        <Box color="white">
        Login to ZEE5
        </Box>
        <Box marginTop={30} color="white">
        Login to continue enjoying uninterrupted video and personalised experience.
        </Box>
        <Button marginTop={30} p={5} colorScheme='teal' w={320} bgColor="teal" borderRadius="10px" size='xs'>
            Sign in
        </Button>
        <Box marginTop={30} marginLeft="42%" p={3} w="15%" borderRadius="50%" bgColor="violet">
            or
        </Box>
        <Input onChange={getvalue} value={match.email} name="email" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='EMail ID' />
        <Input onChange={getvalue} value={match.pass} name="pass" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='Password' />
        <Box marginTop={50} color="white">
           Forgot Password?
        </Box>
        <Button onClick={matchData} marginTop={50} p={10} colorScheme='teal' w={320} bgColor="black" border="1px solid gray" color="gray" borderRadius="10px" size='xs'>
           {!flag? "Login":<CircularProgress isIndeterminate color='green.300' />}
        </Button>
        
      </Container>
    )
}
export default Login;