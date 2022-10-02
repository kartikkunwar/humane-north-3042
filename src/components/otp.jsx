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
        <Container p={100} w="40%" margin="auto">
        <Box color="white">
        Create a new account
        </Box>
        <Box marginTop={50} color="white">
        An OTP has been sent to the entered mobile number 
        </Box>
        <Box marginTop={50}>
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
        <Box display="flex" gap={85} marginTop={5} alignItems='center'  color="white" fontSize={12}>
          <Box>{formattime(count)}</Box>
          <Box display="flex"><p>Did not get the OTP?</p><Button  h="20px" borderRadius="10px" style={count>0?dis:abc} bgColor="black" color='#8230c6 '>Resend</Button></Box>
        </Box>
        <Button cursor="pointer" style={val.length>3?abc:dis} onClick={verify} marginTop={50} p={10} colorScheme='#8230c6' w={320}  border="1px solid gray" borderRadius="10px" size='xs'>
            Verify
        </Button>
      </Container>
    )
}

export default Otp;