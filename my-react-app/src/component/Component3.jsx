import { Box, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
function Component3(){
    return(<>
   <Box flex={2}   sx={{background:"linear-gradient(289deg, #1e293b76, #12284b8e)",border:"1px solid rgb(255, 255, 255,0.10)"}} color="white" height={"100%"} px={1} borderRadius={"16px"} boxShadow={3}>
   <Typography variant="h5" m>Skills</Typography>
    <Box p={1}>
        <Typography>FrontEnd (React,MUI)</Typography>
        <LinearProgress variant="determinate" borderRadius={2} sx={{color:"brown"}}
    value={80}/>
    </Box>
       <Box p={1}>
        <Typography>Backend (Springboot)</Typography>
        <LinearProgress variant="determinate" borderRadius={2} 
    value={70}/>
    </Box>
       <Box p={1}>
        <Typography>Database (Mysql)</Typography>
        <LinearProgress variant="determinate" borderRadius={2} 
    value={80}/>
    </Box>
    <Box p={1}>
        <Typography>Cloud (AWS,Docker)</Typography>
        <LinearProgress variant="determinate" borderRadius={2} 
    value={70}/>
    </Box>
     <Box p={1}>
        <Typography>Cloud (AWS,Docker)</Typography>
        <LinearProgress variant="determinate" borderRadius={2} 
    value={70}/>
    </Box>
    

   
    </Box>
    </>)
   
}
export  default Component3;