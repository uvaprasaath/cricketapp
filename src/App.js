import './App.css';
import {Box, Button, Grid, IconButton, Paper, Tab, Tabs, ThemeProvider, Typography, createTheme} from "@mui/material";
import background from "./assets/banner4.jpg";
import logo from "./assets/logo3.png";
import { useEffect, useMemo, useRef, useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import Carousel from 'react-material-ui-carousel'
import prize from "./assets/prize.jpg"
import {RemoveRedEyeRounded} from "@mui/icons-material"


const screens = [<></>,<Gallery/>,<Team/>,<Rewards/>]  

function App() {
  const [value, setValue] = useState(0);
  const componentRef = useRef();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',     
      });
    }
  },[value])
  
  return (
    
    <div className="App">
      
       <Box sx={{width:"100%",height:"100%",position:"relative"}}>
       
          <Box sx={{height:"85%",backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%",position:"relative",display:"flex",flexDirection:"column"}}>
            <Box sx={{
            backgroundColor:"#222",
            position:"absolute",
            height:"100%",
            width:"100%",
            opacity: ".6",
            // zIndex: "3",
            top:"0",
            left:"0",
            content : `""`
          }}></Box>
  <Box sx={{width:"70%",position:"sticky",top:0,height:"80px",display:"flex",flexDirection:"row",alignSelf:"center",justifyContent:"center",alignItems:"center",zIndex:10,gap:4,marginTop:"20px"}}>
       <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",height:"90%"}}>
       <img alt="logo" width="50%" height="100%" style={{filter:"brightness(0) invert(1)"}} src={logo} />
       <Typography sx={{color:"white",fontSize:{xs:'em',sm:"em"},fontFamily:"Oswald, sans-serif",margin:0,padding:0,fontWeight:"bold"}}>UNKNOWN<span style={{fontWeight:"normal",display:"block"}}>cricket club</span></Typography>
       </Box>
       <Box sx={{ maxWidth: { xs: "100%", sm: 480 }}}>
       <Tabs
      TabScrollButtonProps={{
        style:{
         color:"white"
        }
      }} 
       TabIndicatorProps={{
        style:{
          textTransform:"capitalize",
          backgroundColor:"white",
          color:"white !important" 
        }
       }}
       sx={{
        '& .MuiTab-root': {
          textTransform: 'none',
          color:"#FAF0E6 !important" 
        },
        '& .Mui-selected': {
          color: 'white !important', 
          fontWeight:"bold"
        },
       }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Home" />
        <Tab label="Gallery" />
        <Tab label="Team" />
        <Tab label="Rewards" />
      </Tabs>
       </Box>
</Box>
<Box sx={{display:"flex",alignSelf:"center",flex:1,flexDirection:"column",justifyContent:"center",zIndex:3}}>
  <Typography sx={{color:"white",fontSize:{xs:'3em',sm:"6em"},fontFamily:"Oswald, sans-serif",margin:0,padding:0}}>CRICKET <span style={{fontWeight:"bold"}}>MOST</span><span style={{display:'block'}}>WONDERFUL</span><span style={{fontWeight:"bold",display:'block'}}>GAME EVER</span></Typography>
</Box>
          </Box>
          <Box ref={componentRef} sx={{padding:"10px",backgroundColor:"#fff5f7"}}>{screens[value]}</Box> 
       </Box>
 
    </div>
  );
}
const photos = [{"id":"10","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},{"id":"11","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Cm7oKel-X2Q","download_url":"https://picsum.photos/id/11/2500/1667"},{"id":"12","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/I_9ILwtsl_k","download_url":"https://picsum.photos/id/12/2500/1667"},{"id":"13","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/3MtiSMdnoCo","download_url":"https://picsum.photos/id/13/2500/1667"},{"id":"14","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/IQ1kOQTJrOQ","download_url":"https://picsum.photos/id/14/2500/1667"},{"id":"15","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/NYDo21ssGao","download_url":"https://picsum.photos/id/15/2500/1667"},{"id":"16","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/gkT4FfgHO5o","download_url":"https://picsum.photos/id/16/2500/1667"},{"id":"17","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ven2CV8IJ5A","download_url":"https://picsum.photos/id/17/2500/1667"},{"id":"18","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ps2n0rShqaM","download_url":"https://picsum.photos/id/18/2500/1667"},{"id":"19","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/P7Lh0usGcuk","download_url":"https://picsum.photos/id/19/2500/1667"}]

function Gallery(){
  // const photos = [{"id":"10","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},{"id":"11","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Cm7oKel-X2Q","download_url":"https://picsum.photos/id/11/2500/1667"},{"id":"12","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/I_9ILwtsl_k","download_url":"https://picsum.photos/id/12/2500/1667"},{"id":"13","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/3MtiSMdnoCo","download_url":"https://picsum.photos/id/13/2500/1667"},{"id":"14","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/IQ1kOQTJrOQ","download_url":"https://picsum.photos/id/14/2500/1667"},{"id":"15","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/NYDo21ssGao","download_url":"https://picsum.photos/id/15/2500/1667"},{"id":"16","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/gkT4FfgHO5o","download_url":"https://picsum.photos/id/16/2500/1667"},{"id":"17","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ven2CV8IJ5A","download_url":"https://picsum.photos/id/17/2500/1667"},{"id":"18","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ps2n0rShqaM","download_url":"https://picsum.photos/id/18/2500/1667"},{"id":"19","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/P7Lh0usGcuk","download_url":"https://picsum.photos/id/19/2500/1667"}]

  return <Box sx={{display:"flex",width:"100%"}}>
   <Masonry columns={3} spacing={2}>
        {photos.map((item, index) => (
          <div key={index}>
            <img
              // srcSet={`${item.url}?w=162&auto=format&dpr=2 2x`}
              src={`${item.download_url}?w=162&auto=format`}
              alt={item.author}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
  </Box>
}



function Player({player}){
  const [isHovered, setIsHovered] = useState(false);
  return <Box sx={{height:"100%",width:"100%",borderRadius:"5px",border:"1px solid black",position:"relative",backgroundColor:"white"}}       onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
             <Box sx={{height:"70%"}}>
             <img alt='player' height="100%" width="100%"  src={player?.image} />
             </Box>
             <Box  sx={{height:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" ,borderTop: '0.5px solid black'}} >
              <Typography sx={{fontWeight:"bold",fontSize:"1.5em"}}>{player?.name}</Typography>
              <Typography sx={{fontSize:"em",color:"grey"}}>{player?.designation}</Typography>
             </Box>
            {isHovered && <Box  sx={{
            backgroundColor:"#222",
            position:"absolute",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            opacity: ".6",
            // zIndex: "3",
            top:"0",
            left:"0",
          }}><IconButton variant='contained' onClick={()=>{
            window.open(player.profile,"_blank").focus();
          }} sx={{height:"50px",textTransform:"capitalize"}}><RemoveRedEyeRounded color='white' /></IconButton></Box>}
  </Box>
}


const players = [{name:"Prithivi",designation:"Batter",profile:"https://google.com",image:logo},
{name:"Venkatesh",designation:"Batter",profile:"",image:""},
{name:"Raj",designation:"Batter",profile:"",image:""},
{name:"Hari",designation:"Batter",profile:"",image:""},
{name:"Ashok",designation:"Batter",profile:"",image:""},
{name:"Rupesh",designation:"Batter",profile:"",image:""},
{name:"Srikanth",designation:"Batter",profile:"",image:""},
{name:"VigneshWaran",designation:"Batter",profile:"",image:""},
{name:"Gokul",designation:"Batter",profile:"",image:""},
{name:"Vijay",designation:"Batter",profile:"",image:""},
{name:"Srini",designation:"Batter",profile:"",image:""},
{name:"Raghul",designation:"Batter",profile:"",image:""},
]



function Team(){
     return <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"start"}} >
      <Grid container spacing={2}  sx={{width:"60%",alignSelf:"center"}}>
      
        {players.map((player)=><Grid item xs={12} sm={6} xl={3}>
           <Box sx={{height:"265px",width:"100%"}}>
            <Player player={player}/>
           </Box>
        </Grid>)}
        {/* <Grid item xs={12} sm={3}>
           <Box sx={{height:"100px",width:"100%",backgroundColor:"red"}}></Box>
        </Grid><Grid item xs={12} sm={3}>
           <Box sx={{height:"100px",width:"100%",backgroundColor:"green"}}></Box>
        </Grid><Grid item xs={12} sm={3}>
           <Box sx={{height:"100px",width:"100%",backgroundColor:"yellow"}}></Box>
        </Grid> */}

      </Grid>
     </Box>
}

function Rewards(){
  const [isUnlocked,setUnlockStatus] = useState(false);
  const rewards = [
    {image:logo,reward:"Unknown Player of the year 2023"},
    {image:logo,reward:"Best Batsman"},
    {image:logo,reward:"Best Economica Bowler"},
    {image:logo,reward:"Best Allrounder"},
    {image:logo,reward:"Attendence prize"}
  ]
  return <Box sx={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
    <Grid container sx={{height:"90%",width:{sm:"100%",xl:"60%"},borderRadius:"10px",backgroundColor:"white",padding:"8px",position:"relative"}} justifyContent="space-between" >
    {/* {!isUnlocked && <Box  sx={{
            backgroundColor: "white",

            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            height:"400px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            opacity: ".6",
            zIndex: "3",
            top:"0",
            left:"0",
          }}><Button onClick={()=>{
          }} sx={{height:"50px",textTransform:"capitalize"}}>View</Button></Box>}
  */}
     {/* {isUnlocked && <>  */}
     <Grid item xs={12} sm={6} > 
      <Box sx={{height:"100%",width:"100%"}} >
        <img style={{height:"400px",width:"100%"}} src={prize} />
    </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
      <Carousel sx={{height:"100%",width:"100%",backgroundColor:"white"}}>
            {
                rewards.map( (item, i) => <Box sx={{display:"flex",flexDirection:"column",height:"100%",width:"100%",backgroundColor:"white",alignSelf:"center"}}>
                  <img  style={{objectFit:"fill",height:"80%",width:"100%",borderRadius:"10px"}}  src={item.image}/>
                  <Typography>{item.reward}</Typography>
                </Box> )
            }
        </Carousel>
</Grid>
{/* </>
} */}
    </Grid>
  
  </Box>
}


export default App;
