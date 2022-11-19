import React from "react";
import {AuthContext} from "../components/context/authcontext"
import {Box,Image,Container,Divider} from "@chakra-ui/react"

const Video=()=>{
    const {authState}=React.useContext(AuthContext)
    const [player,setPlayer]=React.useState(`https://www.youtube.com/embed`)

    const play=(ids)=>{
        setPlayer(`https://www.youtube.com/embed/${ids.id.videoId}`)
    }
    
    
  return <>
        <Box display={{base:'block',md:'block',lg:'flex'}} w='98%' margin='auto' mt={100} >
            <Box w={{base:'100%',md:'100%',lg:'50%'}} m='auto' ml={{base:'0px',md:'0px',lg:'50px'}}>
                <iframe width='100%' src={player} height="400" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Box>
            <Box w={{base:'100%',md:'100%',lg:'50%'}}>
                <Container bgColor='black' id="moviesugg1">
                    {
                        authState&&authState?.map((el,index)=>{
                            return[
                                <Box textAlign='left' key={index} color='white' display='flex' mt="10px" gap={5} alignItems='center' cursor='pointer' onClick={()=>play(el)}>
                                    <Box h='50px' w='20%'><Image h='100%' w='100%' src={el.snippet.thumbnails.medium.url}/></Box>
                                    <Box w="70%">{el.snippet.title}</Box>
                                </Box>,
                                <Divider orientation='horizontal' />
                            ]
                        })
                    }
                </Container> 
            </Box>
        </Box>
  </>
}

export default Video;