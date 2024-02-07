import * as React from 'react';
import { AppBar, CssBaseline, Typography, Toolbar, Button } from '@mui/material';
import '../fonts';

const navStyles = {
    backgroundColor: 'rgba(0,0,0,0)'
}

export default function ButtonAppBar() {
  return (
    <>
        <CssBaseline/>
        <AppBar style={navStyles} position='static' elevation={0}>
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


        <div style={{perspective: '100px', height: '100vh'}}>
            <Typography style={{fontWeight: 'bold', fontStyle: 'italic', color: '#eeeeee', fontSize: 100, fontFamily: 'News Gothic', transform: 'rotateX(10deg) scaleY(2)'}}>
                GOPI CHAND
            </Typography>
            <Typography style={{fontWeight: 'bold', fontStyle: 'italic', color: '#eeeeee', fontSize: 100, fontFamily: 'News Gothic', transform: 'rotateX(10deg)'}}>
                PENDYALA
            </Typography>

        </div>
         
    </>
  );
}