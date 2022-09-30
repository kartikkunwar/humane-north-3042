import React from "react";
import {Container,FormControl,FormLabel,Input,Box,CircularProgress,Button,Alert,AlertIcon} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";


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
            }  
        },1000)
    }

    const hide=()=>{
        setAl(false)
        navigate("/otp")
    }
    const mobile=(e)=>{
        let x=e.target.value;
        if(x.length===10){
            setNum(x);
        }
    }
    
    document.querySelector("body").style.backgroundColor="black"
    return(
      <Container p={100} w="40%" margin="auto" position="relative">
        <Box color="white">
        Create a new account
        </Box>
        <Box marginTop={30} color="white">
        Create an account to continue enjoying uninterrupted video and personalised experience
        </Box>
        <Button marginTop={30} p={5} colorScheme='teal' w={320} bgColor="teal" borderRadius="10px" size='xs'>
            Sign in
        </Button>
        <Box marginTop={30} marginLeft="42%" p={3} w="15%" borderRadius="50%" bgColor="violet">
            or
        </Box>
        <Input onChange={mobile} marginTop={50} backgroundColor="black" color="white" borderTopStyle="hidden" borderRightStyle="hidden" borderLeftStyle="hidden" placeholder='Mobile Number' />
        <Box marginTop={50} color="white">
            By Proceeding you agree to our Terms Of Services & Private Policy.
        </Box>
        <Button onClick={sendotp} marginTop={50} p={10} colorScheme='teal' w={320} bgColor="black" border="1px solid gray" color="gray" borderRadius="10px" size='xs'>
           {!flag? "Send OTP":<CircularProgress isIndeterminate color='green.300' />}
        </Button>
        {
            al&&<Box id="alertBox"><Alert  status='success'>
                        <AlertIcon id="icon" w={30} />
                    <p>OTP sent to your mobile number {num}</p>
                    <Button id="butt" onClick={hide}>OK</Button>
            </Alert>
          </Box>
        }
      </Container>
    )
}
export default Signup;