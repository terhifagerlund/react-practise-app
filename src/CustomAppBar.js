import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';


const AppBarStyle = styled.div`
  background-color: #1A201D;
  font-family: 'Roboto Condensed';
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

export default function CustomAppBar(props) {
    return (
        <AppBar position="relative">
          <Toolbar component={AppBarStyle}> 
            <TextStyle>
                {props.title}
            </TextStyle>
            <Button>
              <SignInButton>Sign in</SignInButton>
            </Button> 
            <Button>
               <SignUpButton>Sign up</SignUpButton>
            </Button>
          </Toolbar>
        </AppBar>
    );
}