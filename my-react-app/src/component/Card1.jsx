import { Box, Button, Paper, Typography } from "@mui/material";
import image from './imag.png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Link } from "react-router-dom";
import icon from './icon5.png';
function Card1(props){
    return(<>
    <Paper elevation={4} sx={{display:"flex",gap:2,flexDirection:"column",pb:2, boxSizing:"border-box", height:"auto",
  width: "100%",
   background:"linear-gradient(135deg, rgb(30, 41, 59,40%), #1e293b32)", border: "1px solid #ffffff2e",boxShadow:"0 0 6px #ffffff57",borderRadius:"16px"}}   >
        <Box
        component="img"
        src={props.image}
        width={"100%"}
        height={190}
borderRadius={"14px"} 

        />
        
        <Typography color="white"  sx={{px:2,fontSize:"18px"}}>{props.title}</Typography>
         <Typography color="grey"  sx={{px:2,fontSize:"14px"}}>{props.description} </Typography>
       <Box display={"flex"} px={2} justifyContent={"space-between"}  >    <Link style={{textDecoration:"none",color:"white"}}  to={props.url}><Button sx={{ width:230,backgroundColor:"rgb(56, 189, 248,10%)",color:"#38BDF8",border:"1px solid rgb(56, 189, 248,20%)"}}  variant="contained" >View Demo</Button></Link>
    <Button variant="outlined" sx={{width:"15px" ,backgroundColor:"#474e5151",border:"1px solid #38bff812"}}><Box
        component="img"
        src={icon}
        alt="icon"
        sx={{
            color:"white",
           height:"20px",
           width:"20px",
          objectFit: "contain",
        }}
      /></Button></Box> 
    </Paper>
    </>)
}
export default Card1;