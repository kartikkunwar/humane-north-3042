import React from "react";
import {Container,Input,Box,CircularProgress,Button,Alert,AlertIcon} from "@chakra-ui/react"
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import { PassContext } from "./context/passcontext";

const details={
    email:"",
    pass:""
 }
 const dis={
  opacity:"0.6",
  cursor:"no-drop"
}
const abc={
  backgroundColor:"#8230c6",
  color:"white",
  cursor:"pointer"
}

const Login=()=>{
   const [flag,setFlag]=React.useState(false)
   const [match,setMatch]=React.useState(details)
   const [back,setBack]=React.useState([])
   const {log,changelog}=React.useContext(PassContext)
   const navigate=useNavigate();

   React.useEffect(()=>{
    axios.get("https://glorious-tuna-outfit.cyclic.app/signup")
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
    changelog();
    navigate("/")
  }else{
    alert("wrong");
    setFlag(false)
    setMatch(details)
  }
}

document.querySelector("body").style.backgroundColor="black"
    
    
    return(
      <Box w={{base:'80%',md:'50%',lg:'30%'}}   position="relative" m='auto' mt='100px'>
        <Box color="white" w='90%' m='auto'  display='flex' justifyContent='center'>
        Login to ZEE5
        </Box>
        <Box color="white" w={{base:'90%',md:'90%',lg:'80%'}} m='auto' mt={50} >
        Login to continue enjoying uninterrupted video and personalised experience.
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
          <Button marginTop={30} p={5} colorScheme='teal' bgColor="teal" borderRadius="10px" w='100%'>
          <FontAwesomeIcon icon={faGoogle} color='red' padding="10px"></FontAwesomeIcon>  Sign in
          </Button>
        </Box>
        <Box w="10%" borderRadius="50%" m='auto' mt={30}  bgColor="violet">
            or
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
          <Input onChange={getvalue} value={match.email} name="email" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='EMail ID' w='100%' />
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
        <Input onChange={getvalue} value={match.pass} name="pass" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='Password' w='100%'/>
        </Box>
        <Box color="white" w={{base:'90%',md:'90%',lg:'80%'}} m='auto' mt={50} >
           Forgot Password?
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
          <Button onClick={matchData} style={match.pass!==""&&match.email!==""?abc:dis} marginTop={50} p={10} colorScheme='teal' w='100%' bgColor="black" border="1px solid gray" color="gray" borderRadius="10px" size='xs'>
            {!flag? "Login":<CircularProgress isIndeterminate color='green.300' />}
          </Button>
        </Box>
        <Box color="white">
            Not a User? <Link color='#8230c6' to="/signup">Register</Link>
        </Box>
        
      </Box>
    )
}
export default Login;