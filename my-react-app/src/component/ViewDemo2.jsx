import { Box, Button, Stack, Typography } from "@mui/material";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image from './demo32.png';
import '/src/index.css'
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import { useEffect, useRef, useState } from "react";
import image1 from './demo3.9.png';
import image2 from './demo31.png';
import image3 from './demo33.png';
import image4 from './demo34.png';
import image5 from './demo31.png'
import icon8 from './undo.png'
import { Link } from "react-router-dom";
function ViewDemo2(){
  const images =[
      { id: 1, src: image1, alt: 'Welcome to learnhub' },
       { id: 2, src: image2, alt: 'Welcome to learnhub' },
       { id: 3, src: image3, alt: 'Welcome to learnhub' },
        { id: 4, src: image4, alt: 'Welcome to learnhub' },
       
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
      const video = videoRef2.current;
  
      if (!video) return;
  
     
      if(activeIndex === 2) {
        video.currentTime = 0;   
        video.play();
      }
      else {
        video.pause();
        video.currentTime = 0;   // reset when slide changes
      }
    }, [activeIndex]);
  
    return(<>
    <Box flex={2} height={"100vh"}   sx={{p: 2,pt:{xxs:18,xs:19,sm425:19,sm700:3,md:3,xl:3,xxl:3},    boxSizing: "border-box"}} >

      <Box  color="white"  height={"100%"}     borderRadius={"16px"} boxShadow={3} sx={{overflowY:{xss:"auto",xs:"auto",sm425:"auto",sm700:"hidden",md:"hidden",xl:"hidden"},position:"relative", background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid #ffffff2e"}}>
        <Link style={{textDecoration:"none",color:"white"}}  to="/projects">  <Box sx={{ position:"absolute",color:"white",top:20,left:30,zIndex: 10,}} >   <Box component="img" src={icon8} alt={"icon"}  /> </Box></Link>
     
   
       
    <Box sx={{ width: "100%",height: activeIndex === 0 ? "45vh" : {xs:"45vh", md:"90vh"},  transition: "height 0.4s ease", overflow: "hidden" }}>
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
        src="https://image2url.com/r2/default/videos/1770804671188-4f5170a1-c82b-4738-ae78-8c9b0cdf12d6.mp4"
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
        src="https://image2url.com/r2/default/videos/1770808701685-0b6f12a4-a5ba-4046-a5b2-4bcb923cccf3.mp4"
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
        {/* <Box
  component="video"
  src={video}
  autoPlay
  muted
  loop
  controls
  sx={{
    width: "100%",
    borderRadius: "16px",
    height:"50%",
    objectFit: "cover",
   
  }}
/> */}

{activeIndex === 0 && ( <Stack direction={{xs:"column",sm425:"column", sm700:"row"}} spacing={2} sx={{p:2, height:"50%"}}>
<Box flex={2} sx={{ background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid rgba(255, 255, 255, 0)",borderRadius:"8px"}}>

  <Typography sx={{fontSize:{xxs:"20px",xs:"22px",sm425:"22px",sm700:"24px", md:"28px"},ml:2,mt:2}}>FreshCart - Fruits & Vegetables Management System</Typography>
  <Typography sx={{fontSize:"16px", color:"grey",ml:2,mt:1}}>Built a full-stack CRUD application using Spring Boot REST API and React with separate Admin for managing fruits and vegetables inventory.</Typography>
  <Typography sx={{fontSize:{xxs:"18px",xs:"20px",sm425:"20px",sm700:"22px", md:"26px"},ml:2,mt:1}}>key features</Typography>
  <Typography sx={{fontSize:"16px", color:"#ffffff9b",ml:2}}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Developed a Spring Boot REST API to manage fruits and vegetables data.</Typography>
<Typography sx={{fontSize:"16px", color:"#ffffff9b",ml:2}}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Built Admin dashboard for Create, Read, Update, and Delete (CRUD) operations.</Typography>
<Typography sx={{fontSize:"16px", color:"#ffffff9b",ml:2}}><CrueltyFreeIcon sx={{color:"#00A6FF",verticalAlign: "middle",mr:0.5}}/>Built User interface for viewing available fruits and vegetables.</Typography>

<Box mt={2} ml={2} display={"flex"} flexDirection={{xs:"column",sm425:"column", sm700:"row"}} gap={2}>
<Button  variant='contained'  onClick={() =>
    window.open(
      "https://hub.docker.com/repository/docker/dkroyce/groceris-backend/general",
      "_blank",
      "noopener,noreferrer"
    )
  } sx={{ml:2,mt:2,background:"linear-gradient(45deg, #2DE1FC, #00A6FF)",borderRadius:"8px",color:"black",transition: "transform 0.3s ease",
"&:hover": {
      transform: "translate(3px,-3px)",}}}>Docker hub</Button>
<Button  variant='contained'  onClick={() =>
    window.open(
      "https://my-grocery-app.onrender.com/",
      "_blank",
      "noopener,noreferrer"
    )
  } sx={{ml:2,mt:2,background:"linear-gradient(45deg, #37fc2d, #00ff88)",borderRadius:"8px",color:"black",transition: "transform 0.3s ease",
"&:hover": {
      transform: "translate(3px,-3px)",}}}>Live User</Button>
<Button  variant='contained'  onClick={() =>
    window.open(
      "https://my-shop-admin-wmp5.onrender.com/",
      "_blank",
      "noopener,noreferrer"
    )
  } sx={{ml:2,mt:2,background:"linear-gradient(45deg, #37fc2d, #00ff88)",borderRadius:"8px",color:"black",transition: "transform 0.3s ease",
"&:hover": {
      transform: "translate(3px,-3px)",}}}>Live Admin</Button></Box>
  </Box>

 < Box flex={1} sx={{p:2, background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid #ffffff2e",borderRadius:"8px"}}>

  <Typography sx={{fontSize:{xxs:"20px",xs:"22px",sm425:"22px",sm700:"24px", md:"28px"}}}>Tech Stack</Typography>
  <Typography sx={{fontSize:"16px", color:"#00A6FF"}} >Frontend: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}>React, Material UI, Axios</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Backend: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> Spring Boot, Spring REST,Spring Jpa</Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Database: <Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> MySQL </Typography></Typography>
<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>cloud:<Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}>Docker, GitHub</Typography></Typography>

<Typography sx={{fontSize:"16px", color:"#00A6FF"}}>Build Tool:<Typography component="span" sx={{fontSize:"16px", color:"#ffffff9b" }}> Maven</Typography></Typography>

  </Box>
</Stack>)}
   </Box>
   </Box>
    </>);

}

export  default ViewDemo2;