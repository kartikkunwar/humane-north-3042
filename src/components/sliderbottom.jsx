import React from "react";
import { Box,Image,Text } from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import {useNavigate} from "react-router-dom"
import {AuthContext} from "../components/context/authcontext"

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block", background: "black" }}
       onClick={onClick}
     />
   );
 }
 
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block", background: "black" }}
       onClick={onClick}
     />
   );
 }


function get(){
    return axios.get("https://glorious-tuna-outfit.cyclic.app/homepage")
 }
 
const Sliderbottom=()=>{
   const [data,setData]=React.useState([])
   const [hindi,setHindi]=React.useState([])
   const [movies,setMovies]=React.useState([])
   const [marathi,setMarathi]=React.useState([])
   const {accumulate}=React.useContext(AuthContext)
   const navigate=useNavigate();
   document.querySelector("body").style.backgroundColor="black"

   var settings = {
      buttons: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    React.useEffect(()=>{
        get()
        .then((res)=>{
          return[
          setData(res.data[0].ZeeOriginals),setMovies(res.data[0].Movies),setHindi(res.data[0].Hindi),setMarathi(res.data[0].Marathi)
          ]
        })
     },[])

     const videodata=(rslt)=>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${rslt}&key=AIzaSyD1OpQVFjWfNt9YaNiKfQfgGlGpoTuaLIw`)
        .then((res)=>accumulate(res.data.items))
        .catch((err)=>console.log(err))
         navigate("/movies")
     }

     

     return(
      <Box w="80%" margin='auto' mt='40px' gap="30px"><Text color='white' fontSize={30} textAlign='left'>Top 10 movies</Text><br></br>
         <Slider {...settings}> 
            {
            data&&data?.map((el,index)=>{
               return (
                  <div className="pictest" key={index}>
                     <Image width='90%' height="100%" src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         <Text color='white' fontSize={30} textAlign='left'>Top 10 TV Shows</Text><br></br>
         <Slider {...settings}> 
            {
            hindi&&hindi?.map((el,index)=>{
               return (
                  <div className="pictest" key={index} onClick={()=>videodata(el.p)}>
                     <Image width='90%' height="100%" src={el.src}/>
                     <Text color='white'>{el.p}</Text>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         <Text color='white' fontSize={30} textAlign='left'>Bollywood Movies</Text><br></br>
         <Slider {...settings}> 
            {
            movies&&movies?.map((el,index)=>{
               return (
                  <div className="pictest" key={index}>
                     <Image width='90%' height="100%" src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         <Text color='white' fontSize={30} textAlign='left'>Top 10 Marathi Shows</Text><br></br>
         <Slider {...settings}> 
            {
            marathi&&marathi?.map((el,index)=>{
               return (
                  <div className="pictest" key={index} onClick={()=>videodata(el.p)}>
                     <Image width='90%' height="100%" src={el.src}/>
                     <Text color='white'>{el.p}</Text>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         </Box>
     )
  
}
export default Sliderbottom