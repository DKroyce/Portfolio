import { AppBar, Box, Stack} from '@mui/material'
import Menu2 from './component/Menu2'  
import ProductPage from './component/ProductPage'
import {Outlet,Link} from "react-router-dom";
import Appbarr from './component/Appbarr';
function Structure() {
  return (
    <Box>
 <Appbarr/>
  <Stack direction="row" spacing={1} justifyContent='space-between'>
   <Menu2/>
   {/* <Hero/> */}
  {/* <ProductPage/> */}
  
  <Outlet/>
{/* <ViewDemo/> */}
   </Stack>
   </Box>

  )
}
export default Structure