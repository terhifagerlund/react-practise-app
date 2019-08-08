import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from './backgroundImage.png';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  height: 100%;
`;

const AppBarStyle = styled.div`
background-color: #1A201D;
font-family: 'Roboto Condensed';
`;

const CenterImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Image});
  background-size: auto;
  background-position: center -165px;
  height: 500px;
  text-align: center;
  align-content: space-evenly;
`;

const CenterImageText = styled.div`
  font-family: "Roboto Condensed";
  color: white;
`;
  
const TextStyle = styled.div`
  background: '#1A201D';
  color: #F3F1EA;
  text-align: center;
  margin-left: 146px;
  flex-grow: 1;
  font-size: x-large;
`;

const SignInButton = styled.div`
  font-family: 'Roboto Condensed';
  color: #F3F1EA;
`;

const SignUpButton = styled.div`
  font-family: 'Roboto Condensed';
  color: #F80B64;
`;
  
 
export default function CenteredGrid() {
  return (
    <Container container>
      <Grid item xs>
        <AppBar>
          <Toolbar component={AppBarStyle}> 
            <TextStyle>
                ONEPIRATE
            </TextStyle>
            <Button>
              <SignInButton>Sign in</SignInButton>
            </Button> 
            <Button>
               <SignUpButton>Sign up</SignUpButton>
            </Button>
          </Toolbar>
        </AppBar>
            <Grid container component={CenterImage}>
                <Grid item xs={12}>
                  <Typography variant="h3" component={CenterImageText}> UPGRADE YOUR SUNDAYS</Typography>
                  </Grid> 
                <Grid item xs={12}>
                  <Typography variant="h5"component={CenterImageText}>Enjoy secret offers up to -70% off the best luxury hotels every Sunday</Typography>
                  </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="secondary">
                  <Typography variant="subtitle1">REGISTER</Typography>
                  </Button>
                <Grid item xs={12}>
                  <Typography variant="subtitle1"component={CenterImageText}>Discover the experience</Typography>
                  </Grid>
                </Grid> 
            </Grid> 
        </Grid>   
    </Container>
  )
}




