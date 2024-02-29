import * as React from 'react';
import { AppBar, CssBaseline, Typography, Toolbar, Button } from '@mui/material';
import '../fonts';
import '../styles/Home.css'

const navStyles = {
    backgroundColor: 'rgba(0,0,0,0)'
}

export default function ButtonAppBar() {
  return (
    <>
        <CssBaseline/>
        <AppBar style={navStyles} position='fixed' elevation={0}>
            <Toolbar>
                {/* <Button variant="text" color="inherit" style={{marginRight: 0, marginLeft: 'auto'}}> */}
                <Typography style={{fontWeight: 'bold', fontStyle: 'italic', color: '#eeeeee', fontSize: 24, fontFamily: 'News Gothic'}}>
                    GOPI CHAND PENDYALA
                </Typography>
                <Button variant="text" color="inherit" style={{marginRight: 0, marginLeft: 'auto'}}>
                    <Typography style={{fontWeight: 'bold', fontStyle: 'italic', color: '#eeeeee', fontSize: 24, fontFamily: 'Protest revolution'}}>
                        Resume
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>


        {/* <div style={{perspective: '100px', height: '50vh', overflowY: 'scroll'}}>
            <Typography style={{fontWeight: 'bold', fontStyle: 'italic', color: '#eeeeee', fontSize: 100, fontFamily: 'Protest revolution', transform: 'rotateX(20deg) scaleY(2)'}}>
                GOPI CHAND
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
            </Typography>
        </div> */}





        <div className="Wrapper">
            <div className="Scroll">
            <h1>GOPI CHAND</h1>
            <h1>PENDYALA</h1>
            <Typography>
                GOPI CHAND
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.
                Results oriented product developer with programming and analytical knowledge. Skilled in seamless progress of conceptualizing, developing and delivering highly efficient, client-centric and goal-oriented solutions for a spectrum of real-life problems.

            </Typography>
            </div>
        </div>
         
    </>
  );
}