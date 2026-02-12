import { Box, Typography } from "@mui/material";
import Card1 from "./Card1";
import image from './demo1.png';
import image2 from './demo32.png';
import image3 from './demo2.1.png';
function ProductPage(){
    return (<>
    <Box flex={2} height={"100vh"}   sx={{  p: 2,  boxSizing: "border-box",pt:{xxs:18,xs:19,sm425:19,sm700:3,md:3,xl:3,xxl:3}}} >

   <Box    sx={{mb:2,overflowY:"auto", background:"linear-gradient(289deg, #1e293b76, #12284b8e)",border:"1px solid rgb(255, 255, 255,0.10)",boxSizing: "border-box"}} color="white" height={"100%"} borderRadius={"16px"} boxShadow={3}>
  
      
    <Typography variant="h5" my={2}mx={2} >Projects</Typography>
    
    <Box  sx={{ display:"grid",mb:2,gap:2, gridTemplateColumns: {
      xxs: "repeat(1, 1fr)",
      xs: "repeat(1, 1fr)",
      sm425: "repeat(1, 1fr)",
      sm700: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(3, 1fr)",
      xk: "repeat(4, 1fr)",
    }}}><Card1 url="/demo1" image={image} title="LearnHub - Microservices-Based E-Learning Platform" description="Built a scalable e-learning platform using Spring Boot microservices and React with API Gateway."/><Card1 url="/demo2" image={image2} title="FreshCart - Fruits & Vegetables Management System" description="Built a full-stack CRUD application using Spring Boot REST API and React with separate Admin."/><Card1 url="/demo3" image={image3} title="Rcb Print Lab - Printing Services Web Application" description="uilt a production-ready React frontend for a printing services business website."/></Box>
    
      </Box>
 </Box>  
  
    </>)
}
export default ProductPage;