import React from "react";
import {Container,FormControl,FormLabel,Input,Box, VStack,Button,HStack,PinInput,PinInputField} from "@chakra-ui/react"
import ReactPinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";

const dis={
    opacity:"0.6",
    cursor:"no-drop"
}
const abc={
    backgroundColor:"#8230c6",
    color:"white",
    cursor:"pointer"
}

const fixtime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  const formattime = (time) => {
    const sec = time % 60;
    const min = Math.floor(time / 60) % 60;
    const output = `${fixtime(min)}:${fixtime(sec)}`;
    return output;
  };
  
const Otp=()=>{
    const [count,setCount]=React.useState(10)
    const [val,setVal]=React.useState("");
    const navigate=useNavigate();

    React.useEffect(()=>{
        const timer=count>0&&setInterval(()=>setCount(count-1),1000);
            return()=>clearInterval(timer)
          
    },[count])
    document.querySelector("body").style.backgroundColor="black"

    const getValue=(value,index)=>{
        setVal(value);
        setTimeout(() => {
            document.querySelector(".pincode-input-container").children[
              index - 1
            ].type = "password";
          }, 200);
    }

    const verify=()=>{
        if(val=="1234"){
            navigate("/register")
        }else{
          alert("wrong OTP")
        }
    }

    return(
        <Box w={{base:'80%',md:'60%',lg:'40%'}} m="auto" mt='100px'>
        <Box color="white" w={{base:'90%',md:'80%',lg:'70%'}} m='auto' >
          Create a new account
        </Box>
        <Box  color="white" w={{base:'90%',md:'80%',lg:'70%'}} m='auto' mt={50}>
        An OTP has been sent to the entered mobile number 
        </Box>
        <Box  w={{base:'90%',md:'80%',lg:'70%'}} m='auto' mt={50}>
        <ReactPinInput  length={4}  inputStyle={{
            borderColor: "white",
            margin: "0 13px",
            color:"white",
            fontSize:"40px",
            borderLeftStyle:"hidden",
            borderRightStyle:"hidden",
            borderTopStyle:"hidden"
          }}  onChange={getValue} inputFocusStyle={{ borderColor: "#8230c6" }} secret/>
        </Box>
        <Box display="flex" gap={{base:'35px',md:'55px',lg:'65px'}}  alignItems='center' justifyContent='center'  color="white" w={{base:'90%',md:'80%',lg:'70%'}} m="auto" mt={5} fontSize={12} >
          <Box>{formattime(count)}</Box>
          <Box display="flex"><p>Did not get the OTP?</p><Button  h="20px" borderRadius="10px" style={count>0?dis:abc} bgColor="black" color='#8230c6 '>Resend</Button></Box>
        </Box>
        <Box w={{base:'90%',md:'80%',lg:'70%'}} m='auto'>
          <Button cursor="pointer" style={val.length>3?abc:dis} onClick={verify} marginTop={50} p={10} colorScheme='#8230c6' border="1px solid gray" borderRadius="10px" w='100%'>
              Verify
          </Button>
        </Box>
      </Box>
    )
}

export default Otp;