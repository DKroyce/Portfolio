import { Box, Button, Stack, Typography } from "@mui/material";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image from './demo1.png';
import image1 from './demo1.9.png';
import image2 from './demo1.2.png';
import image3 from './demo1.3.png';
import image4 from './demo1.4.png';

import icon8 from './undo.png'
import '/src/index.css'
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function ViewDemo(){
  const images =[
    { id: 1, src: image1, alt: 'Welcome to learnhub' },
     { id: 2, src: image2, alt: 'Welcome to learnhub' },
     { id: 3, src: image3, alt: 'Welcome to learnhub' },
     { id: 4, src: image4, alt: 'Welcome to learnhub' }
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (activeIndex === 1) {
      video.currentTime = 0;   
      video.play();
    } 
  
    else {
      video.pause();
      video.currentTime = 0;   // reset when slide changes
    }
  }, [activeIndex]);
  useEffect(() => {
    const video2 = videoRef2.current;

    if (!video2) return;

    if(activeIndex === 2) {
      video2.currentTime = 0;   
      video2.play();
    }
    else {
      video2.pause();
      video2.currentTime = 0;   // reset when slide changes
    }
  }, [activeIndex]);

    return(<>
    <Box flex={2} height={"100vh"}   sx={{p: 2,pt:{xxs:18,xs:19,sm425:19,sm700:3,md:3,xl:3,xxl:3},   boxSizing: "border-box"}} >

     <Box  color="white"  height={"100%"}     borderRadius={"16px"} boxShadow={3} sx={{overflowY:{xss:"auto",xs:"auto",sm425:"auto",sm700:"hidden",md:"hidden",xl:"hidden"}, position:"relative", background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid #ffffff2e"}}>
         <Link style={{textDecoration:"none",color:"white"}}  to="/projects">  <Box sx={{position:"absolute",color:"white",top:{xss:15, sm700: 20},left:{xss:20, sm700: 30},zIndex: 10,}} >   <Box component="img" src={icon8} alt={"icon"}  /> </Box></Link>
     
       
    <Box sx={{ width: "100%", height: activeIndex === 0 ? "45vh" : {xs:"45vh", md:"90vh"},  transition: "height 0.4s ease", overflow: "hidden" }}>
  <Splide
    options={{
      type: "loop",
      focus: "center",
      perPage: 1,
      gap: "16px",
      padding: { left: "6%", right: "12%" }, // 👈 PEEK EFFECT
      arrows: true,
      pagination: true,
      autoplay: false,
      pauseOnHover: true,
      
    }}
    onMove={(splide) => setActiveIndex(splide.index)}
    aria-label="Rcb Print Lab Highlights"
  >
     <SplideSlide >
        <Box
          component="img"
          src={image}
          alt={"klklk"}
          sx={{
            width: "100%",
            height: "100%",
            aspectRatio: "16 / 9",
            objectFit: "contain",
            borderRadius: "16px",
          }}
        />
      </SplideSlide>
   
    {/* Video slide */}
    <SplideSlide>
      <Box
        component="video"
        src="https://image2url.com/r2/default/videos/1770648907355-b4949637-aa16-48d7-9b43-90f9a84f1fb2.mp4"
        ref={videoRef}
        muted
        loop
        controls
        sx={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          objectFit: "contain",
          borderRadius: "16px",
        }}
      />
     
    </SplideSlide>
<SplideSlide>
      <Box
        component="video"
        src="https://image2url.com/r2/default/videos/1770651322586-8fbe9967-5d08-458f-aa09-561ce00250ea.mp4"
        
        ref={videoRef2}
        muted
        loop
        controls
        sx={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          objectFit: "contain",
          borderRadius: "16px",
        }}
      />
     
    </SplideSlide>
    {/* Image slides */}
     {images.map((img) => (
      <SplideSlide key={img.id}>
        <Box
          component="img"
          src={img.src}
          alt={img.alt}
          sx={{
            width: "100%",
            height: "100%",
            aspectRatio: "16 / 9",
            objectFit: "contain",
            borderRadius: "16px",
          }}
        />
      </SplideSlide>
    ))}
  </Splide>
</Box>
       

{activeIndex === 0 && (
 <Stack direction={{xs:"column",sm425:"column", sm700:"row"}} spacing={2} sx={{p:2, height:"50%"}}>
<Box flex={{xxs:0, sm700:2}} sx={{ background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid rgba(255, 255, 255, 0)",borderRadius:"8px"}}>

  <Typography sx={{fontSize:{xxs:"20px",xs:"22px",sm425:"22px",sm700:"24px", md:"28px",lg:"28px",xl:"30px",xk:"32px"},ml:2,mt:2}}>LearnHub - Microservices-Based E-Learning Platform</Typography>
  <Typography sx={{fontSize:"16px", color:"grey",ml:2,mt:1}}>Built a scalable e-learning platform using Spring Boot microservices and React with API Gateway, Service Discovery, authentication, and payment processing.</Typography>
  <Typography sx={{fontSize:{xxs:"18px",xs:"20px",sm425:"20px",sm700:"22px", md:"26px"},ml:2,mt:1}}>key features</Typography>
  <Typography  sx={{fontSize:"16px", color:"#ffffff9b",ml:2 }}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Designed a microservices architecture using Spring Boot scalable development.</Typography>
<Typography sx={{fontSize:"16px", color:"#ffffff9b",ml:2}}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Implemented Authentication & Authorization service with JWT-based security.</Typography>
<Typography sx={{fontSize:"16px", color:"#ffffff9b",ml:2}}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Implemented API Gateway for centralized routing, security, and request filtering.</Typography>

<Button  variant='contained' onClick={() =>
    window.open(
      "https://hub.docker.com/repositories/dkroyce",
      "_blank",
      "noopener,noreferrer"
    )
  } sx={{ml:2,mt:2,background:"linear-gradient(45deg, #2DE1FC, #00A6FF)",borderRadius:"8px",color:"black",transition: "transform 0.3s ease",
"&:hover": {
      transform: "translate(3px,-3px)"}}}>Docker hub</Button>
  </Box>

 < Box flex={{xxs:0, sm700:1}} sx={{p:2, background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid #ffffff2e",borderRadius:"8px"}}>

  <Typography sx={{fontSize:{xxs:"20px",xs:"22px",sm425:"22px",sm700:"24px", md:"28px"}}}>Tech Stack</Typography>
  <Typography sx={{fontSize:"16px", color:"#00A6FF"}} >Frontend: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}>React, Material UI, Axios</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Backend: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> Spring Boot, Spring Security, JWT</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Microservices:  <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}>API Gateway, Eureka Service Registry</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Database: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> MySQL / PostgreSQL</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>DevOps:<Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}>Docker, GitHub</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Payments:<Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> Razorpay / Stripe / Mock Payment Gateway</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Build Tool:<Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> Maven / Gradle</Typography></Typography>

  </Box>
</Stack>)}
   </Box>
   </Box>
    </>);

}

export  default ViewDemo;