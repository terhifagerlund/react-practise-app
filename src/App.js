import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from './backgroundImage.png';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bottomimage from './curvyBackground.png';
import IconDeckChair from './IconDeckChair';
import IconUmbrella from './deckChairUmbrella.svg';
import IconWheel from './wheel.svg';
import IconWallet from './wallet.svg';
import CustomAppBar from './CustomAppBar';


const Container = styled.div`
  height: 100%;
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
  
const BottomBackground = styled.div`
  background-image: url(${Bottomimage});
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
            <IconDeckChair backgroundImage={IconUmbrella} title="THE BEST LUXURY HOTELS" body="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few
          subway stops away from your home."></IconDeckChair></Grid>
          <Grid item xs={4}>
            <IconDeckChair backgroundImage={IconWheel} title="NEW EXPERIENCES" body="Privatize a pool, take a Japanese bath or wake up in 900m2 of garden... your
          Sundays will not be alike."></IconDeckChair></Grid>
          <Grid item xs={4}>
            <IconDeckChair backgroundImage={IconWallet} title="EXCLUSIVE RATES" body="By registering, you will access specially negotiated rates that
          you will not find anywhere else."></IconDeckChair></Grid>
        </Grid>
      </Grid>   
    </Container>
  )
}




