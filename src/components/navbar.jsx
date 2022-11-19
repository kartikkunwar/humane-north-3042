import React from "react";
import { Container,Menu,MenuButton,MenuList,MenuItem,Input,Box,Button,Image,Divider, IconButton} from "@chakra-ui/react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faXmarkCircle} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PassContext } from "./context/passcontext";
import {AuthContext} from "../components/context/authcontext"
import { HamburgerIcon } from "@chakra-ui/icons";



const Navbar=()=>{
    document.querySelector("body").style.backgroundColor="black"
    const [search,setSearch]=React.useState([])
    const [flag,setFlag]=React.useState(false)
    const {log,changelog}=React.useContext(PassContext)
    const {accumulate}=React.useContext(AuthContext)
    const navigate=useNavigate()

    
    
    const getsearch=(e)=>{
        
        axios.get(`https://www.omdbapi.com/?apikey=3f8a2d27&s=${e.target.value}`)
        .then((res)=>{
            setFlag(true)
            return setSearch(res.data.Search)
        })
        .catch((err)=>console.log(err))
    } 
    const move=()=>{
        if(log){
            changelog();
        }else{
        navigate("/login")
        }
    }
    
    if(flag&&search){
        document.getElementById("moviesugg").style.display="block"
        document.getElementById("moviesuggsmall").style.display="block"
    }
    const close=()=>{
        document.getElementById("moviesugg").style.display="none"
        document.getElementById("moviesuggsmall").style.display="none"
    }

    const videodata=(rslt)=>{
        console.log(rslt)
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${rslt}&key=AIzaSyD1OpQVFjWfNt9YaNiKfQfgGlGpoTuaLIw`)
        .then((res)=>accumulate(res.data.items))
        .catch((err)=>console.log(err))
         navigate("/movies")
     }

   return[
    <Box className="navm">
        <Box display='flex' alignItems='center' ml='50px' color='white' gap='20px'>
            <Link to="/"><Image w='40px' h='40px' src='https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40'/></Link>
            <Link className="navhov" to="/">Home</Link>
            <Link className="navhov">TV Shows</Link>
            <Link className="navhov" to='/movies'>Movies</Link>
            <Link className="navhov">Web Series</Link>
        </Box>
        <Box display='flex' gap={30}>
            <Input w={300} onChange={getsearch} color='white' placeholder='Search for Movies,Shows,Channels etc' position='relative' />
            <Button colorScheme='blue' onClick={move}>{!log?"LOGIN":"LOGOUT"}</Button>
            <Button color='white' bgColor='#8230c6'>BUY PLAN</Button>
        </Box>
        <Container position='absolute' top="80%" left='9%' bgColor='black' display="none" id="moviesugg"><FontAwesomeIcon cursor='pointer' color='white' icon={faXmarkCircle} onClick={close}></FontAwesomeIcon>
        {
            search&&search?.map((el)=>{
                return[
                    <Box className="hvchng" textAlign='left' key={el.imdbID} color='white' display='flex' alignItems='center' onClick={()=>videodata(el.Title)} cursor='pointer' mt={2} gap={5}>
                       <Box h='50px' w='20%'><Image h='100%' w='100%' src={el.Poster}/></Box>
                       <Box w="70%">{el.Title}</Box>
                    </Box>,
                    <Divider orientation='horizontal' />
                ]
            })
        }
    </Container>
    </Box>,
    <Box   className="smalls" >
    <Box>
        <Menu>
            <MenuButton as={IconButton} aria-label='Options' bgColor='gray.300' icon={<HamburgerIcon />} variant='outline'/>
            <MenuList color='black'>
                    <Link to='/'><MenuItem className="list">Home</MenuItem></Link>
                    <Link to='/movies'><MenuItem className="list">Movies</MenuItem></Link>
                    <MenuItem className="list">T.V Shows</MenuItem>
                    <MenuItem className="list">Web series</MenuItem>
            </MenuList>
        </Menu>
    </Box>
        <Box position='relative'>
            <Input w="80%" onChange={getsearch} color='white' placeholder='Search for Movies,Shows,Channels etc'  />
        </Box>
        <Box position='absolute' top="80%" left='20%' bgColor='black' display='none' id="moviesuggsmall"><FontAwesomeIcon cursor='pointer' color='white' icon={faXmarkCircle} onClick={close}></FontAwesomeIcon>
            {
                search&&search?.map((el)=>{
                    return[
                        <Box className="hvchng" textAlign='left' key={el.imdbID} color='white' display='flex' alignItems='center' onClick={()=>videodata(el.Title)} cursor='pointer' mt={2} gap={5}>
                        <Box h='50px' w='20%'><Image h='100%' w='100%' src={el.Poster}/></Box>
                        <Box w="70%">{el.Title}</Box>
                        </Box>,
                        <Divider orientation='horizontal' />
                    ]
                })
            }
        </Box>
    
    <Box>
        <Menu>
            <MenuButton><FontAwesomeIcon icon={faUser} color='white' fontSize={30}></FontAwesomeIcon></MenuButton>
            <MenuList color='black'>
                    <MenuItem className="list" onClick={move}>{!log?"Login":"Logout"}</MenuItem>
                    <Link to='/signup'><MenuItem className="list">Signup</MenuItem></Link>                                          
            </MenuList>
        </Menu>
    </Box>
</Box>
   ]
}
export default Navbar;