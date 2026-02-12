import { Box, Typography } from "@mui/material";
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
function Component2(){
    return(<>
     <Box   display={"flex"}  flexDirection={"column"}   justifyContent={"space-between"} color="white"  height={"98%"}   borderRadius={"16px"} sx={{backgroundImage:`radial-gradient(circle at 70% 30%,  rgb(56, 189, 248,0.2) 0%,    rgba(124, 58, 237,0) 50%)`}} >
        <Box px={2} sx={{ display:"flex",py:0.5,my:{xxs:1,xs:1,sm425:1,sm700:0}, borderRadius:"16px",
    background:"linear-gradient(289deg, #1e293b42, #1e293b3b)", // almost transparent
border:"1px solid rgb(255, 255, 255,0.10)",
    backdropFilter: "blur(50px)",justifyContent:"space-between"}}>
        <Box  >
        <Typography fontSize={16} color="grey" >Experience</Typography>
        <Typography fontSize={28}sx={{fontWeight:"bold"}}>2+</Typography></Box>
        <Box>
            <Box component="img"src={icon1} sx={{ background:"rgba(56, 191, 248, 0.10)",p:1.5,borderRadius:"15px",mt:1}} />
        </Box>
        </Box>
        <Box px={2} sx={{display:"flex",py:0.5,my:{xxs:1,xs:1,sm425:1,sm700:0},border:"1px solid rgb(255, 255, 255,0.10)",justifyContent:"space-between",borderRadius:"16px", background:"linear-gradient(289deg, #1e293b42, #1e293b1c)", // almost transparent

    backdropFilter: "blur(50px)"}}>
        <Box>
       <Typography fontSize={16} color="grey" >Experience</Typography>
        <Typography fontSize={28}sx={{fontWeight:"bold"}}>1+</Typography></Box>
       
          <Box>
            <Box component="img"src={icon2} sx={{ background:"rgba(56, 191, 248, 0.10)",p:1.8,borderRadius:"15px",mt:1}} />
        </Box> </Box>
        <Box px={2} sx={{display:"flex",py:0.5,my:{xxs:1,xs:1,sm425:1,sm700:0},border:"1px solid rgb(255, 255, 255,0.10)",justifyContent:"space-between",borderRadius:"16px", background: "linear-gradient(289deg, #1e293b42, #1e293b1c)", // almost transparent

    backdropFilter: "blur(50px)"}}>
        <Box>
        <Typography fontSize={16} color="grey" >Projects</Typography>
        <Typography fontSize={28}sx={{fontWeight:"bold"}}>3</Typography>
</Box>
 <Box>
            <Box component="img"src={icon3} sx={{ background:"rgba(56, 191, 248, 0.10)",p:1.5,borderRadius:"15px",mt:1}} />
        </Box>
        </Box>
    
    </Box>
    </>)
   }
    export default Component2;