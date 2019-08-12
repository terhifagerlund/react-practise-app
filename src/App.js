import React from 'react';
import Grid from '@material-ui/core/Grid';
import background_image from './background_image.png';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import curvy_background from './curvy_background.png';
import IconAndText from './IconAndText';
import icon_umbrella from './icon_umbrella.svg';
import icon_wheel from './icon_wheel.svg';
import icon_wallet from './icon_wallet.svg';
import CustomAppBar from './CustomAppBar';


const Container = styled.div`
  height: 100%;
`;

const CenterImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background_image});
  background-size: auto;
  background-position: center -165px;
  height: 500px;
  text-align: center;
  align-content: space-evenly;
`;

const CenterImageText = styled.div`
  color: white;
`;
  
const BottomBackground = styled.div`
  background-image: url(${curvy_background});
  background-size: cover;
  height:500px;
  background-position: center;
  `;

export default function CenteredGrid() {
  return (
    <Container container>
      <Grid item xs>
        <CustomAppBar title="ONEPIRATE"/>
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
              <Typography variant="subtitle1"component={CenterImageText}>Discover the experience</Typography>
            </Grid> 
        </Grid> 
        <Grid container component={BottomBackground}>
          <Grid item xs={4}>
            <IconAndText backgroundImage={icon_umbrella} title="THE BEST LUXURY HOTELS" body="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few
          subway stops away from your home."></IconAndText></Grid>
          <Grid item xs={4}>
            <IconAndText backgroundImage={icon_wheel} title="NEW EXPERIENCES" body="Privatize a pool, take a Japanese bath or wake up in 900m2 of garden... your
          Sundays will not be alike."></IconAndText></Grid>
          <Grid item xs={4}>
            <IconAndText backgroundImage={icon_wallet} title="EXCLUSIVE RATES" body="By registering, you will access specially negotiated rates that
          you will not find anywhere else."></IconAndText></Grid>
        </Grid>
      </Grid>   
    </Container>
  )
}




