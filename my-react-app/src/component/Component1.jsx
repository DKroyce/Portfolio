import { Box, Button, Typography } from "@mui/material";
import image from './image.png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import image2 from './image2.png';
import image3 from './image3.png';
import { Link } from "react-router-dom";
function Component1(){
  
    return(<>
    {/* <Box  color="white" height={"100%"}   borderRadius={"16px"} boxShadow={3} sx={{ background:"linear-gradient(145deg, #1E293B, #1e293b32)", border: "1px solid #ffffff2e"}}>

    <Box display={"flex"} px={2} py={2} height={"inherit"}  justifyContent={"space-between"} >
       
        <Box ml={2} height={"100%"} justifyContent={"space-between"} >
            <Typography
  p={1}
  sx={{
    fontSize: {
      xxs: "11px",
      sm425: "13px",
      sm700: "14px",
      md: "14px",
    },
    color: "#38BDF8",
    border: "1px solid #38BDF8",
    display: "inline-block",
    borderRadius: "50px",
    pl: 2,
    pr: 2,
  }}
>
  Full Stack Developer
</Typography>

<Typography
  py={0.5}
  sx={{
    fontSize: {
      xxs: "20px",
      sm425: "24px",
      sm700: "28px",
      md: "32px",
    },
  }}
>
  Dinesh Karthik R
</Typography>

<Typography
  py={0.5}
  sx={{
    fontSize: {
      xxs: "13px",
      sm425: "14px",
      sm700: "15px",
      md: "16px",
    },
    color: "grey",
  }}
>
  Building scalable web application and intuitive user interface.
  Obsessed with performance, clean code, and modern architecture.
</Typography>

              <Box display={"flex"} py={0.5}  gap={2}><AirplanemodeActiveIcon sx={{fontSize:  {
      xxs: "13px",
      sm425: "14px",
      sm700: "15px",
      md: "16px",
    },}}/> <Typography sx={{ fontSize: {
      xxs: "13px",
      sm425: "14px",
      sm700: "15px",
      md: "16px",
    },}}> Chennai</Typography></Box>
              <Box display={"flex"}  py={0.5} gap={2}><Button variant="contained" sx={{backgroundColor:"#38bff855",borderRadius:"6px", fontSize: {
      xxs: "13px",
      sm425: "13px",
      sm700: "15px",
      md: "16px",
    },}}>Resume</Button><Button variant="outlined" sx={{color:"white"
        , fontSize: {
      xxs: "13px",
      sm425: "13px",
      sm700: "15px",
      md: "16px",
    },
    }}>View Projects</Button></Box>
        </Box>
         <Box
  component="img"
  src={image2}
  sx={{
    width: {
      xxs: "150px",
      sm425: "200px",
      sm700: "45%",
    },

    height: "auto",
    maxWidth: "100%",
   

    // 🔵 Glow follows PNG shape
    filter: "drop-shadow(0 0 20px #38BDF8)",

    // optional stronger glow
    // filter: "drop-shadow(0 0 10px #38BDF8) drop-shadow(0 0 30px #38BDF8)",

    display: "block",
  }}
/>

    </Box>
    </Box>
     */}

     <Box
  color="white"
  height="100%"
  borderRadius="16px"
  boxShadow={3}
  sx={{
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
    py={2}
    height="inherit"
    justifyContent="space-between"
    sx={{
      flexWrap: "nowrap",
      overflow: "hidden",
      gap: 2,
      
      
    }}
  >
   
    {/* LEFT CONTENT */}
    <Box
      
     
      
    sx={{ flex: "0 0 60%", display:"flex", flexDirection:"column",minWidth: 0, justifyContent: "start", gap: 1}}
    >
      <Typography
        p={1}
        sx={{
          fontSize: {
            xxs: "11px",
            sm425: "13px",
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
        }}
      >
        Open to work
      </Typography>

      <Typography
        py={0.5}
        sx={{
          fontSize: {
            xxs: "18px",
            sm425: "24px",
            sm700: "25px",
            md: "28px",
          },
        }}
      >
       I Craft Fast, Elegant Web Experiences.
      </Typography>

      <Typography
        py={0.5}
        sx={{
          fontSize: {
            xxs: "10px",
            sm425: "14px",
            sm700: "13px",
            md: "13px",
          },
          color: "grey",
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

      <Box display="flex" maxWidth={"100%"}  py={0.5} gap={2}>
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
            maxWidth:"100%",
          }}
        >
           Projects
        </Button></Link>
      </Box>
    </Box>

    {/* RIGHT IMAGE */}
  <Box
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

      
    />
  </Box>
</Box>

    </>)
   }
    export default Component1;