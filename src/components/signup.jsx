import React from "react";
import {Container,Input,Box,CircularProgress,Button,Alert,AlertIcon} from "@chakra-ui/react"
import { useNavigate,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons"

const dis={
    opacity:"0.6",
    cursor:"no-drop"
}
const abc={
    backgroundColor:"#8230c6",
    color:"white",
    cursor:"pointer"
}


const Signup=()=>{
   const [flag,setFlag]=React.useState(false)
   const [al,setAl]=React.useState(false)
   const [num,setNum]=React.useState("")
   const navigate=useNavigate();
   let counting=0;
    const sendotp=()=>{
        let x=setInterval(()=>{
            setFlag(true)
            counting++;
            if(counting>5){
                setFlag(false);
                setAl(true);
                clearInterval(x); 
                setTimeout(()=>{
                    setAl(false)
                    navigate("/otp")
                },3000)
            }  
        },1000)
    }

    // const hide=()=>{
    //     setAl(false)
    //     navigate("/otp")
    // }
    const mobile=(e)=>{
        let x=e.target.value;
        if(x.length===10){
            setNum(x);
        }
    }
    
    document.querySelector("body").style.backgroundColor="black"
    return(
      <Box  w={{base:'80%',md:'60%',lg:'30%'}}   position="relative" m='auto' mt='100px'>
        <Box color="white" w='90%' m='auto'  display='flex' justifyContent='center'>
        Create a new account
        </Box>
        <Box color="white" w={{base:'90%',md:'90%',lg:'70%'}} m='auto' mt={50} >
        Create an account to continue enjoying uninterrupted video and personalised experience
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
            <Button mt={30} p={5} colorScheme='teal' bgColor="teal" borderRadius="10px" w='100%'>
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>  Sign in
            </Button>
        </Box>
        <Box  w="10%" borderRadius="50%" m='auto' mt={30}  bgColor="violet">
            or
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
         <Input onChange={mobile} marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='Mobile Number' w="100%"/>
        </Box>
        <Box  color="white" w={{base:'90%',md:'80%',lg:'70%'}} m='auto' mt={50}>
            By Proceeding you agree to our Terms Of Services & Private Policy.
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
            <Button onClick={sendotp} style={num.length==10?abc:dis} marginTop={50} p={10} colorScheme='teal' w="100%" bgColor="black" border="1px solid gray" color="gray" fontSize={21} borderRadius="10px" size='xs'>
            {!flag? "Send OTP":<CircularProgress isIndeterminate color='green.300' />}
            </Button>
        </Box>
        <Box color="white">
            Already a user? <Link color='#8230c6' to="/login">Login</Link>
        </Box>
        {
            al&&<Box position='absolute' w='100%' m='auto' top='0'  display='flex' justifyContent='center' alignItems='center'>
                <Alert status='success'>
                    <AlertIcon />
                    OTP has been sent to {num}
                </Alert>
          </Box>
        }
      </Box>
    )
}
export default Signup;