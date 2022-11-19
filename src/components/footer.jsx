import { Container,Box,HStack,Image,Center,Divider,UnorderedList,ListItem, VStack } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faFacebook,faInstagram,faGooglePlay} from "@fortawesome/free-brands-svg-icons"

const Footer=()=>{
    document.querySelector("body").style.backgroundColor="black"
  return(
    <Box mt="30px"  width={{base:'100%',md:'90%',lg:'80%'}} margin='auto'>
        <Box display={{base:'block',md:'block',lg:'flex'}} justifyContent='space-between'>
            
                <Box  color='white' display='flex' gap="20px">
                    Download Apps
                    <Box><Image src="https://www.zee5.com/images/play_store.png?ver=2.52.40"/></Box>
                    <Box><Image src="https://www.zee5.com/images/app_store.png?ver=2.52.40"/></Box>
                </Box>
                <Box color='white' gap="30px" display='flex' mt={{base:'50px',md:'50px',lg:'0px'}}>
                    Connect with us
                    <Box className="brand" ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Box>
                    <Box className="brand" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Box>
                    <Box className="brand" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Box>                  
                    <Box className="brand" ><FontAwesomeIcon icon={faGooglePlay}></FontAwesomeIcon></Box> 
                </Box>
           
        </Box>
        <Box color='white'  mt='30px'>
            <HStack >
               <Box display='flex' gap='10px'>
                 About Us 
                <Center height='30px'>
                    <Divider orientation='vertical' />
                </Center>
                Help Center
                <Center height='30px'>
                    <Divider orientation='vertical' />
                </Center>
                Privacy Policy
                <Center height='30px'>
                    <Divider orientation='vertical' />
                </Center> 
                Help Center
                </Box>
            </HStack>
        </Box>
        <Box color='white'  mt='30px' display={{base:'block',md:'block',lg:'flex'}} justifyContent='space-between'>
             <Box>
                <UnorderedList id="lasting">
                    <ListItem>Popular TV shows</ListItem>
                    <ListItem className="item">Kumkum Bhagya</ListItem>
                    <ListItem className="item">Kunadali Bhagya</ListItem>
                    <ListItem className="item">Bhagya Lakshami</ListItem>
                </UnorderedList>
             </Box>
             <Box>
                <UnorderedList id="lasting">
                    <ListItem>Premium Movies</ListItem>
                    <ListItem className="item">Kumkum Bhagya</ListItem>
                    <ListItem className="item">Kunadali Bhagya</ListItem>
                    <ListItem className="item">Bhagya Lakshami</ListItem>
                </UnorderedList>
             </Box>
             <Box>
                <UnorderedList id="lasting">
                    <ListItem>Popular Web Series</ListItem>
                    <ListItem className="item">Kumkum Bhagya</ListItem>
                    <ListItem className="item">Kunadali Bhagya</ListItem>
                    <ListItem className="item">Bhagya Lakshami</ListItem>
                </UnorderedList>
             </Box>
             <Box>
                <UnorderedList id="lasting">
                    <ListItem>Popular Live TV Channels</ListItem>
                    <ListItem className="item">Kumkum Bhagya</ListItem>
                    <ListItem className="item">Kunadali Bhagya</ListItem>
                    <ListItem className="item">Bhagya Lakshami</ListItem>
                </UnorderedList>
           </Box>
        </Box>
        <Box color='white'  mt='50px' w='100%' textAlign="left" fontSize='13px'>
        Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+
        Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.
        </Box>
    </Box>
  )
}
export default Footer;