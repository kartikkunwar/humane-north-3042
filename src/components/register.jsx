import React from "react";
import { Input,Container,Box,Radio,RadioGroup,Stack,FormLabel,Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const details={
   email:"",
   pass:""
}

const Register=()=>{
   const [value, setValue] = React.useState('male')
   const [info,setInfo]=React.useState(details);
   const navigate=useNavigate();

   const getinfo=(e)=>{
     setInfo({...info,[e.target.name]:e.target.value})
   }
   const setData=()=>{
      axios.post("https://glorious-tuna-outfit.cyclic.app/signup",info)
      .then((res)=>console.log(res)).catch((err)=>console.log(err))

      navigate("/login")
   }
   document.querySelector("body").style.backgroundColor="black"
 return(
    <Container w={400} bgColor='white' marginTop={70}>
      <Box>
         <Box>Please update to personalize your watching experience</Box>
         <Input value={info.email} name="email" onChange={getinfo} mt={30} placeholder='E-mail' />
         <Input value={info.pass} name="pass" onChange={getinfo} mt={30} type="password" placeholder='Password' />
         <Box mt={30} ml={10}>
            <RadioGroup onChange={setValue} value={value}>
            <FormLabel>Gender</FormLabel>
               <Stack gap={30} direction='row'>
                  <Radio value='male'>Male</Radio>
                  <Radio value='female'>Female</Radio>
                  <Radio value='other'>Other</Radio>
               </Stack>
            </RadioGroup>
         </Box>
        <Box>
            <FormLabel mt={10}>Date of birth</FormLabel>
            <Input type="date"/>
            <FormLabel>Age should be minimum 18 years</FormLabel>
        </Box>
        <Button onClick={setData} cursor="pointer" marginTop={50} p={5}  w={320}  border="1px solid gray" borderRadius="10px" size='xs'>
            SIGN UP
        </Button>
      </Box>
    </Container>
 )
}
export default Register;