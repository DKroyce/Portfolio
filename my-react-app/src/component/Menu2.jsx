import {Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'

import { Link } from 'react-router-dom';
import {  useState } from 'react';
import icon1 from './icon6.png';

import icon7 from './icon12.png';
import icon8 from './icon13.png';
import icon9 from './icon14.png';
import icon10 from './icon15.png';

function Menu(){
    const [activeItem, setActiveItem] = useState("overview");
    return(<>
    
    <Box backgroundColor="#1E293B"  flex={0.5} pl={2} pr={2} height={"100vh"} sx={{display:{xxs: "none",    xs: "none",sm425: "none",sm700: "block",  md: "block",lg: "block",xl: "block", xk: "block",    },
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
  }}>
        <List >
             <Link style={{textDecoration:"none",color:"white"}}  to="/"> <ListItem disablePadding>
              <ListItemButton onClick={()=>{setActiveItem("overview")}} sx={{ backgroundColor:activeItem ==="overview" ? "#38bff855" : "transparent",color:activeItem ==="overview" ? "#38BDF8" : "#94A3B8", "&:hover":{
backgroundColor:activeItem ==="overview" ? "#38bff855" : "transparent",
color:"#38BDF8"
                } ,borderRadius:"10px", }} >
                    <ListItemIcon>
                       <Box
                            component="img"
                            src={ icon1}
                            alt="icon"
                            sx={{
                                color:"white",
                               height:"20px",
                               width:"20px",
                              objectFit: "contain",
                              
                            }}
                          />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItemButton>
            </ListItem></Link>
          <Link style={{textDecoration:"none",color:"white"}}  to="/projects">     <ListItem disablePadding>
               <ListItemButton onClick={()=>{setActiveItem("projects")}} sx={{ backgroundColor:activeItem ==="projects" ? "#38bff855" : "transparent",color:activeItem ==="projects" ? "#38BDF8" : "#94A3B8", "&:hover":{
backgroundColor:activeItem ==="projects" ? "#38bff855" : "transparent",
color:"#38BDF8"
                } ,borderRadius:"10px", }} >
                    <ListItemIcon  >
                        <Box
                            component="img"
                             src={ icon9}
                            alt="icon"
                            sx={{
                                color: "#38BDF8" ,
                               height:"20px",
                               width:"20px",
                              objectFit: "contain",
                              
                            }}
                          />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItemButton>
            </ListItem></Link> 
             <Link style={{textDecoration:"none",color:"white"}}  to="/skills"><ListItem disablePadding>
                <ListItemButton onClick={()=>{setActiveItem("skills")}} sx={{ backgroundColor:activeItem ==="skills" ? "#38bff855" : "transparent",color:activeItem ==="skills" ? "#38BDF8" : "#94A3B8", "&:hover":{ 
backgroundColor:activeItem ==="skills" ? "#38bff855" : "transparent",
color: "#38BDF8"  
                } ,borderRadius:"10px", }}>
                    <ListItemIcon >
                        <Box
                            component="img"
                             src={ icon8}
                            alt="icon"
                            sx={{
                                color:"white",
                               height:"20px",
                               width:"20px",
                              objectFit: "contain",
                            }}
                          />
                    </ListItemIcon>
                    <ListItemText primary="Skills"  />
                </ListItemButton>
            </ListItem></Link> 
             <ListItem disablePadding>
                <ListItemButton onClick={()=>{setActiveItem("certificates")}} sx={{ backgroundColor:activeItem ==="certificates" ? "#38bff855" : "transparent",color:activeItem ==="certificates" ? "#38BDF8" : "#94A3B8", "&:hover":{
backgroundColor:activeItem ==="certificates" ? "#38bff855" : "transparent",
color:"#38BDF8"
                } ,borderRadius:"10px", }}>
                    <ListItemIcon>
                        <Box
                            component="img"
                             src={ icon7}
                            alt="icon"
                            sx={{
                                color:"white",
                               height:"20px",
                               width:"20px",
                              objectFit: "contain",
                            }}
                          />
                    </ListItemIcon>
                    <ListItemText primary="Certificates" />
                </ListItemButton>
            </ListItem>
              <Link style={{textDecoration:"none",color:"white"}}  to="/about"> <ListItem disablePadding>
                <ListItemButton onClick={()=>{setActiveItem("about")}} sx={{ backgroundColor:activeItem ==="about" ? "#38bff855" : "transparent",color:activeItem ==="about" ? "#38BDF8" : "#94A3B8", "&:hover":{
backgroundColor:activeItem ==="about" ? "#38bff855" : "transparent",
color:"#38BDF8"
                } ,borderRadius:"10px", }}>
                    <ListItemIcon>
                        <Box
                            component="img"
                             src={icon10}
                            alt="icon"
                            sx={{
                                color:"white",
                               height:"20px",
                               width:"20px",
                              objectFit: "contain",
                            }}
                          />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItemButton>
            </ListItem></Link>
        </List>
        <Box sx={{mt:"100%",mb:"auto", color:"white", background:"linear-gradient(45deg, #3491bb59, #32454e27)", border: "1px solid #ffffff2e",borderRadius:"16px"}} p={2} mt={5} display={"flex"} flexDirection={"column"} alignItems={"left"} gap={1}>
            <Typography color='#8B949E'>Status</Typography>
         <Box display={'flex'} p={1}>   <Box
  sx={{
    width: 10,
    height: 10,
    m:1,
    backgroundColor: "#2ECC71",
    borderRadius: "50%",
    boxShadow: "0 0 6px #22c55e"
  }}
/>
            <Typography> Open to work</Typography></Box>
            <Button  variant='contained'  onClick={()=>{window.open("https://image2url.com/r2/default/documents/1770825544848-9a4dd6e3-b2e9-461c-95c0-61845e8647ed.pdf"
            ,"_blank"
          )}} sx={{background:"linear-gradient(45deg, #2DE1FC, #00A6FF)",borderRadius:"8px",color:"black"}}>Resume</Button>
        </Box>
    </Box>

    </>);

}
export default Menu;