import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EachMovie from "./EachMovie";
import useStyles from './styles'
import {Typography, Container, Grid, Card, CardMedia, CardContent} from '@material-ui/core';



const App = () => {
  const [movie, setMovie] = useState({});
  const [search, setSearch] = useState("");
  const classes = useStyles():



  

  

  

  const loadData = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?s=movies&apikey=416bc9c6"
    );
    const data = await response.json();
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, [search]);
  
  return (
    <>
      <Header />
     <main>
       <div className = {classes.container}>
         <Container maxWidth = 'sm'>
           <Typography variant = 'h3' align = 'left' color = 'textPrimary' gutterBottom>
             Search:
           </Typography>
          <input type = 'text' value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = 'spiderman'/>

         </Container>
    
        </div>
    <Container className = {classes.cardGrid} maxWidth = 'md'>
            <Grid container spacing = {4}>
               { 
                 movie.map(({Poster, Title}) => (
                  <Grid item key = {Title} xs = {12} sm ={6} md = {4}>
                    <Card className = {classes.card}>
                      <CardMedia className = {classes.cardMedia} image = `${Poster}`title = 'Image Title'/>
                         <CardContent className = {classes.cardContent}>
                           <Typography variant = 'h5' gutterBottom>
                             {Title}
                           </Typography>
                        </CardContent>
                        </Card>
                   </Grid>
                 ))
              
              }
              
              
              
      </Grid>
            
            
    </Container>
   </main>
      
      
   


      
        
      
        
          
            
            
            
          
        
     
      
        


      <Footer />
    </>
  );
};

export default App;
