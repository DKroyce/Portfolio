import { Avatar, Box, Chip, radioGroupClasses, Stack, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import image from "./image2.png";
import icon from "./icon4.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Appbarr(){
    const routeMap = {
  0: "/",
  1: "/projects",
  2: "/skills",
  3: "/about",
  
};
    const [activeChip, setActiveChip] = useState(0);
   const handleClick = (chipIndex) => {
    setActiveChip(chipIndex);
    navigate(routeMap[chipIndex]);
  };
  const navigate = useNavigate();
  
  const categoryMap = {
  0:"Overview",
  1: "Projects",
  2: "Skills",
  3: "About",

  
};

const selectedCategory = categoryMap[activeChip];
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // 👈 threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!isMobile) return null;
    return(<>
    
   <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: 70,
     
        backgroundColor: scrolled ? "#0F172A":"#ffffff15",
        zIndex: 999,
        transition: "all 0.3s ease",
      }}
    >
        <Box display="flex" alignItems="center" justifyContent="space-between" px={2} height={"100%"}>
            <Box display="flex" alignItems="center" gap={1}>
            <Box component="img" src={icon} sx={{ width: 20, height: 20,p:1,background:"#0EA5FF",borderRadius:"8px"}}></Box><Typography color="white">DevSpace</Typography></Box>
     <Box display={"flex"} sx={{background:"#ffffff1b"}} borderRadius={"22px"} alignItems="center" >
     <Box  p={1}><Typography color="white" fontSize={ "13px"} >Dinesh Karthik R</Typography><Typography color="#ffffff73" fontSize={"12px"}>Software Engineer</Typography></Box> <Avatar alt="icon" src={image} sx={{m:1}} />
      </Box>
      
      </Box>
    </Box>
    <Stack direction={"row"} sx={{
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari
    }, overflowX: 'auto', position: "fixed",pt:2,top: 70,zIndex: 998, display:"flex",height:50,justifyContent:"space-between", width:"100%", gap:1, 

boxShadow: "inset 0 1px 0 #ffffff6e, inset 0 -1px 0 #ffffff6e",
    backgroundColor:  scrolled ? "#0F172A":"#ffffff15",transition: "all 0.3s ease"}}>
        <Chip label="OverView"  variant={activeChip === 0 ? 'filled' : 'outlined'}    onClick={() => handleClick(0)} sx={{ml:2, ...(activeChip===0? {color:"#0EA5FF", border: '1px solid #0EA5FF'}:{color:"#ffffffdc"} ) ,'&:hover': {
            backgroundColor: 'rgba(14, 167, 255, 0.13)',
            color:"#0EA5FF",
            border: '1px solid #0EA5FF'
          },}}/>
<Chip label="Projects"  variant={activeChip === 1 ? 'filled' : 'outlined'}   onClick={() => handleClick(1)} sx={{color:"#ffffffdc",'&:hover': {
            backgroundColor: 'rgba(14, 167, 255, 0.13)',
            color:"#0EA5FF",
            border: '1px solid #0EA5FF'
          },}}/>
<Chip label="Skills"  variant={activeChip === 2 ? 'filled' : 'outlined'}   onClick={() => handleClick(2)} sx={{color:"#ffffffdc",'&:hover': {
            backgroundColor: 'rgba(14, 167, 255, 0.13)',
            color:"#0EA5FF",
            border: '1px solid #0EA5FF'
          },}}/>
<Chip label="About me"  variant={activeChip === 3 ? 'filled' : 'outlined'}   onClick={() => handleClick(3)} sx={{mr:2,color:"#ffffffdc",'&:hover': {
            backgroundColor: 'rgba(14, 167, 255, 0.13)',
            color:"#0EA5FF",
            border: '1px solid #0EA5FF'
          },}}/>
    </Stack>
    </>)
}
export default Appbarr;