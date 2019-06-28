import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './style.css'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#263238' }
  },
});



function Header(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className="header" position="static" color="primary">
        <h1 className="title">Clicky Game</h1>
        <h2>
          <div className="text">
          {props.begin}
          {props.wrongchoice}
          {props.gameover}
          </div>
          <span> Score: {props.score} </span> <span>Top Score: {props.topscore}</span>
        </h2>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header