import React from 'react';
import './globals.css';
import Header from './header.js';
import Search from './search.js';
import Grid from './grid.js';
import Footer from './footer.js';



export default function home(){
    return(
       <>
            <Header/>
            <Search/>
            <Grid/>
            <Footer/>
       </>
  
    )
};
