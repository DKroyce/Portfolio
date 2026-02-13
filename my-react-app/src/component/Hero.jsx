import {AppBar, Box, Grid} from '@mui/material'
import Component1 from './Component1';
import Component4 from './Component4';
import Component3 from './Component3';
import Component2 from './Component2';
import Appbarr from './Appbarr';
function Hero(){
    return(<>
       
       <Box  flex={2}  sx={{height:"100vh", p:2,   boxSizing: "border-box",pt:{xxs:18,xs:19,sm425:19,sm700:3,md:3,xl:3,xxl:3}}} >
 
        <Grid container spacing={2} sx={{ height: "100%" }}>

  {/* Component 1 */}
  <Grid
    size={{ xxs: 12, sm700: 8 }}
    sx={{ height: { xxs: "auto", sm700: "45%" } }}
  >
    <Component1 />
  </Grid>

  {/* Component 2 */}
  <Grid
    size={{ xxs: 12, sm700: 4 }}
    sx={{ height: { xxs: "auto", sm700: "45%" } }}
  >
    <Component2 />
  </Grid>

  {/* Component 3 */}
  <Grid
    size={{ xxs: 12, sm700: 4 }}
    sx={{ height: { xxs: "auto", sm700: "52%" } }}
  >
    <Component3 />
  </Grid>

  {/* Component 4 */}
  <Grid
    size={{ xxs: 12, sm700: 8 }}
    sx={{ height: { xxs: "auto", sm700: "52%" } }}
  >
    <Component4 />
  </Grid>

</Grid>

    </Box>
    
    </>);
}
export default Hero;