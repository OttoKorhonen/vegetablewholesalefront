import React from 'react';
import './App.css';
import Productlist from './components/Productlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Vegetable wholesale product list
          </Typography>
         
        </Toolbar>
      </AppBar>
     <Productlist/>
    </div>
  );
}

export default App;
