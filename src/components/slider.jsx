import React from "react";
import { Container,Box } from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"

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
   return axios.get("http://localhost:3004/homepage")
}

const Sliders=()=>{
 const [data,setData]=React.useState([])
 

 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
 };
 
   React.useEffect(()=>{
      get()
      .then((res)=>setData(res.data[0].bigposter))
   },[])

   
    return(
       <Box w="80%" margin='auto' mt='40px'>
         <Slider {...settings}>
          {
            data&&data?.map((el,index)=>{
               return(
                  
                   <img src={el.src} alt="hi" className="image"/>    

               )
            })
          }
          </Slider>
                   
       </Box>
    )
}
export {Sliders}