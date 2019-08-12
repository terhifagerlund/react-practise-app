import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';


const DeckChairIcon = styled.div`
  background-image: url(${props => props.terhinImage});
  background-repeat: no-repeat;  
  background-position: center;
  margin-top: 72px;
  height: 50px;
  width: 100%;  
  `;
  
const IconHeaderText = styled.div`
  margin-top: 50px;  
  text-align: center;
  font-weight: bold;
  `;

const IconText = styled.div`
  text-align: left;
  padding: 68px;
  `;  

export default function IconDeckChair(props) {
    return (
        <Grid container direction="column">
            <Grid item>
                <DeckChairIcon terhinImage={props.backgroundImage} />
                <IconHeaderText>{props.title}</IconHeaderText>
                <IconText>{props.body}</IconText>
            </Grid> 
        </Grid>   
    );
}
