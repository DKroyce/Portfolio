import { Box, Button, Typography } from "@mui/material";

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import image2 from './image2.png';

import { Link } from "react-router-dom";
function About(){
    return(<>
        <Box height={"100vh"}   flex={2}  sx={{ p: 2,    boxSizing: "border-box",pt:{xxs:18,xs:19,sm425:19,sm700:3,md:3,xl:3,xxl:3}}} >
<Box flex={2}   sx={{background:"linear-gradient(289deg, #1e293b76, #12284b8e)",border:"1px solid rgb(255, 255, 255,0.10)"}} color="white" height={"100%"}  borderRadius={"16px"} boxShadow={3}>
    <Box
  color="white"
 
  borderRadius="16px"
  boxShadow={3}
  sx={{
    height:"auto",
    width: {xss: "100%", xs: "100%", sm425: "100%", sm700: "60%" ,md: "60%",lg:"60%",xl: "60%",xk:"80%"},
    // background: "linear-gradient(45deg, #0EA5FF25, #7C3AED55)",
      backgroundImage:
      // "radial-gradient(circle at bottom left, rgb(14, 165, 255,25%) 0%, transparent 60%)",
     `radial-gradient(circle at bottom left,  rgba(14,165,255,0.25) 0%,    rgba(14,165,255,0) 60%),
        radial-gradient(circle at top right,  rgb(124, 58, 237,0.35) 0%,    rgba(124, 58, 237,0) 50%)
  ` 
    
  }}
>
  <Box
    display="flex"
    px={2}
    
    borderRadius="16px"
    justifyContent="space-between"
    sx={{
      flexWrap: "nowrap",
      overflow: "hidden",
      gap: 3,
      height:"100%"
      
    }}
  >
     <Box
      component="img"
      src={image2}
      sx={{
          width:"30%",
flex: "0 0 40%",
        maxWidth: "100%",
        height: {xss: "55%", xs: "55%", sm425: "55%", sm700: "85%" ,md: "85%",lg:"85%",xl: "85%",xk:"85%"},
alignSelf:"center",
        borderRadius: "15px", // optional, makes it circular
        
boxShadow: "0 0 18px #38BDF8",


        display: {xss: "block", xs: "block", sm425: "block", sm700: "block" ,md: "block",lg:"block",xl: "block",xk:"block"},
      }}

      
    />
    {/* LEFT CONTENT */}
    <Box
      
     
      
    sx={{ height:"100%", flex: "0 0 60%",mb:1, display:"flex", flexDirection:"column",minWidth: 0, justifyContent: "start", gap: 1}}
    >
      <Typography
        p={1}
        sx={{
          fontSize: {
            xxs: "9px",
            sm425: "12px",
            sm700: "14px",
            md: "14px",
          },
          color: "#38BDF8",
          border: "1px solid #38BDF8",
          display: "inline-block",
          alignSelf: "flex-start",
          borderRadius: "50px",
          pl: 2,
          pr: 2,
          mt:2,
        }}
      >
        Software Engineer
      </Typography>

      <Typography
        py={0.5}
        sx={{
          fontSize: {
            xxs: "16px",
            sm425: "22px",
            sm700: "25px",
            md: "28px",
          },
        }}
      >
    Dinesh Karthik R
      </Typography>

      <Typography
        
        sx={{
          fontSize: {
            xxs: "8px",
            sm425: "12px",
            sm700: "13px",
            md: "13px",
          },
          color: "grey",mr:1
        }}
      >
        Building scalable web application and intuitive user interface.
        Obsessed with performance, clean code, and modern architecture.
     
      </Typography>

      <Box display="flex" py={0.5} gap={2} sx={{ flexWrap: "wrap" }}>
        <AirplanemodeActiveIcon
          sx={{
            fontSize: {
              xxs: "13px",
              sm425: "14px",
              sm700: "15px",
              md: "16px",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: {
              xxs: "13px",
              sm425: "14px",
              sm700: "15px",
              md: "16px",
            },
          }}
        >
          Chennai
        </Typography>
      </Box>

      <Box display="flex" flexDirection={{xxs:"column",sm700:"row"}}   py={0.5} pr={2} gap={2}>
         <Button
          variant="contained"
          onClick={()=>{window.open("https://image2url.com/r2/default/documents/1770825544848-9a4dd6e3-b2e9-461c-95c0-61845e8647ed.pdf"
            ,"_blank"
          )}}
          sx={{
            transition:"ease-in-out 0.3s",
            "&:hover":{
              transform:"translate(3px,-3px)"
            },
            backgroundColor: "#00A6FF",
            borderRadius: "6px",
            fontSize: {
              xxs: "13px",
              sm425: "13px",
              sm700: "15px",
              md: "16px",
            },
            height:"36px"
          }}
        >
          Resume
        </Button>
  <Link style={{textDecoration:"none",color:"white"}}  to="/projects">
        <Button
          variant="outlined"
          sx={{
             transition:"ease-in-out 0.3s",
            "&:hover":{
              transform:"translate(3px,-3px)"
            },
            color: "white",
            fontSize: {
              xxs: "13px",
              sm425: "13px",
              sm700: "13px",
              md: "13px",
            },
            height:"36px",
            width:"100%",
           
          }}
        >
           Projects
        </Button></Link>
      </Box>
    </Box>

    {/* RIGHT IMAGE */}
  {/* <Box
      component="img"
      src={image3}
      sx={{
          width:"40%",
flex: "0 0 40%",
        maxWidth: "100%",
        height: {xss: "65%", xs: "65%", sm425: "65%", sm700: "85%" ,md: "85%",lg:"85%",xl: "85%",xk:"85%"},
alignSelf:"center",
        borderRadius: "15px", // optional, makes it circular
        



        display: {xss: "block", xs: "block", sm425: "block", sm700: "block" ,md: "block",lg:"block",xl: "block",xk:"block"},
      }}

      
    />*/}
  </Box> 
</Box></Box></Box>
    </>)
}
export default About;