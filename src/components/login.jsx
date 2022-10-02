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
    axios.get("https://zee5-cott.herokuapp.com/signup")
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
      <Container p={100} w="40%" margin="auto" position="relative">
        <Box color="white">
        Login to ZEE5
        </Box>
        <Box marginTop={30} color="white">
        Login to continue enjoying uninterrupted video and personalised experience.
        </Box>
        <Button marginTop={30} p={5} colorScheme='teal' w={320} bgColor="teal" borderRadius="10px" size='xs'>
        <FontAwesomeIcon icon={faGoogle} color='red' padding="10px"></FontAwesomeIcon>  Sign in
        </Button>
        <Box marginTop={30} marginLeft="42%" p={3} w="15%" borderRadius="50%" bgColor="violet">
            or
        </Box>
        <Input onChange={getvalue} value={match.email} name="email" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='EMail ID' />
        <Input onChange={getvalue} value={match.pass} name="pass" marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='Password' />
        <Box marginTop={50} color="white">
           Forgot Password?
        </Box>
        <Button onClick={matchData} style={match.pass!==""&&match.email!==""?abc:dis} marginTop={50} p={10} colorScheme='teal' w={320} bgColor="black" border="1px solid gray" color="gray" borderRadius="10px" size='xs'>
           {!flag? "Login":<CircularProgress isIndeterminate color='green.300' />}
        </Button>
        <Box color="white">
            Not a User? <Link color='#8230c6' to="/signup">Register</Link>
        </Box>
        
      </Container>
    )
}
export default Login;