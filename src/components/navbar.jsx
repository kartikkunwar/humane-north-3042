import React from "react";
import { Container,Menu,MenuButton,MenuList,MenuItem,Input,Box,Button,Image} from "@chakra-ui/react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import {Sliders} from "./slider";
import Sliderbottom from "./sliderbottom";
import Footer from "./footer";



const Navbar=()=>{
    document.querySelector("body").style.backgroundColor="black"
    const [search,setSearch]=React.useState([])
    const [flag,setFlag]=React.useState(false)

    const getsearch=(e)=>{
        axios.get(`https://www.omdbapi.com/?apikey=3f8a2d27&s=${e.target.value}`)
        .then((res)=>{
            setFlag(true)
            return setSearch(res.data.Search)
        })
        .catch((err)=>console.log(err))
    } 
    
    if(flag&&search){
        document.getElementById("moviesugg").style.display="block"
    }
    const close=()=>{
        document.getElementById("moviesugg").style.display="none"
    }
   return[
    <Box display='flex'  mt={5} gap='20%' >
        <Box display='flex' alignItems='center' ml='50px' color='white' gap='20px'>
            <Link to="/login"><Image w='40px' h='40px' src='https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40'/></Link>
            <Link>Home</Link>
            <Link>TV Shows</Link>
            <Link>Movies</Link>
            <Link>Web Series</Link>
            <Link>News</Link>
            <Menu>
                <MenuButton>
                    Actions
                </MenuButton>
                <MenuList bgColor='black'>
                    <MenuItem className="list">Download</MenuItem>
                    <MenuItem className="list">Create a Copy</MenuItem>
                    <MenuItem className="list">Mark as Draft</MenuItem>
                    <MenuItem className="list">Delete</MenuItem>
                    <MenuItem className="list">Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Box display='flex' gap={30}>
            <Input w={300} onChange={getsearch} color='white' placeholder='Search for Movies,Shows,Channels etc' />
            <Button colorScheme='blue'>Login</Button>
            <Button color='white' bgColor='#8230c6'>BUY PLAN</Button>
        </Box>
    </Box>,
    <Container display="none" id="moviesugg"><FontAwesomeIcon cursor='pointer' color='white' icon={faXmarkCircle} onClick={close}></FontAwesomeIcon>
        {
            search&&search?.map((el)=>{
                return(
                    <Box textAlign='left' key={el.imdbID} color='white' display='flex'>
                       <Box><Image h='50px' w='50px' src={el.Poster}/></Box>
                       <Box>{el.Title}</Box>
                    </Box>
                )
            })
        }
    </Container>,
    <Sliders/>,
    <Sliderbottom/>,
    <Footer/>

   ]
}
export default Navbar;