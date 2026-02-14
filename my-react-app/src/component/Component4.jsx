import { Box, Typography } from "@mui/material";

import Card2 from "./Card2";
import { Link } from "react-router-dom";
import image1 from './demo1.png';
import image2 from './demo32.png';
function Component4(){
    return(<>

      <Box   color="white" height={"100%"}  mt={{xs:1.5,sm700:0}}     borderRadius={"16px"} boxShadow={3} sx={{background:"linear-gradient(220deg, #142b4f5a, #1e293b32)",border:"1px solid rgb(255, 255, 255,0.10)" }}>
<Box px={2} pt={2} mb={2}  display={"flex"} justifyContent={"space-between"}> <Typography variant="h5">Projects</Typography><Link style={{textDecoration:"none",color:"white"}}  to="/projects"><Typography variant="h6" color="#00A6FF">view all</Typography></Link></Box>
 <Box  sx={{ display:"grid",gap:2, gridTemplateColumns: {
      xxs: "repeat(1, 1fr)",
      xs: "repeat(1, 1fr)",
      sm425: "repeat(1, 1fr)",
      sm700: "repeat(2, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(2, 1fr)",
      xl: "repeat(2, 1fr)",
      xk: "repeat(2, 1fr)",
    }}}> <Card2 url="/demo1" image={image1} linkurl="https://github.com/DKroyce/Learnhub" title="LearnHub - Microservices-Based E-Learning Platform" />
  <Card2
   url="/demo2" image={image2} linkurl="https://github.com/DKroyce/my-shop-admin" title="FreshCart - Fruits & Vegetables Management System"  /></Box>
    </Box>
    </>)
   
}
export default Component4;