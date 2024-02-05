import * as React from 'react';
import { AppBar, CssBaseline, Typography, Toolbar, Button } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <>
        <CssBaseline/>
        <AppBar>
            <Toolbar>
                <Button variant="text" color="inherit" style={{marginRight: 0, marginLeft: 'auto'}}>Chandu</Button>
            </Toolbar>
        </AppBar>
    </>
  );
}