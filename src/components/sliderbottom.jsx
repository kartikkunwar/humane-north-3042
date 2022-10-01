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
   const [hindi,setHindi]=React.useState([])
   const [movies,setMovies]=React.useState([])
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
          setData(res.data[0].ZeeOriginals),setMovies(res.data[0].Movies),setHindi(res.data[0].Hindi)
          ]
        })
     },[])

     

     return(
      <Box w="80%" margin='auto' mt='40px'>
         <Slider {...settings}> 
            {
            data&&data?.map((el,index)=>{
               return (
                  <div className="pictest">
                     <img width={200} height="100%" src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider><br/><br/>
         <Slider {...settings}> 
            {
            hindi&&hindi?.map((el,index)=>{
               return (
                  <div className="pictest">
                     <img width={200} height="100%" src={el.src}/>
                     <p>{el.p}</p>     
                  </div>
               )
            })
            }
         </Slider>
         <Slider {...settings}> 
            {
            movies&&movies?.map((el,index)=>{
               return (
                  <div className="pictest">
                     <img width={200} height="100%" src={el.src}/>     
                  </div>
               )
            })
            }
         </Slider>
         </Box>
     )
  
}
export default Sliderbottom