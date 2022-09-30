import React from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";

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
 
const Sliderbottom=()=>{
   const [data,setData]=React.useState([])
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
        .then((res)=>setData(res.data[0].ZeeOriginals))
     },[])

     

     return(
      <Box w="80%" margin='auto' mt='40px'>
         <Slider {...settings}> 
            {
            data&&data?.map((el,index)=>{
               return (
                  <div>
                     <img width={200} height={50} src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         <Slider {...settings}> 
            {
            data&&data?.map((el,index)=>{
               return (
                  <div>
                     <img width={200} height={50} src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider>
         </Box>
     )
  
}
export default Sliderbottom