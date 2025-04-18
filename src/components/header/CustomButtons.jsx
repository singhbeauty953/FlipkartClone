import { useState , useContext} from 'react';

import React from 'react'
import { Box, Button, styled, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/Dataprovider';
import Profile from './Profile';




const Wrapper = styled(Box)({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > Button, & > p, & > div': {
      marginRight: '40px',
      fontSize: '16px',
      alignItems: 'center',
  },
});




const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const LoginButton = styled(Button)`
    color:#4980d8;
    background: #FFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;

`;


function CustomButtons() {
  

  const [open, setOpen] = useState(false);
  const {account, setAccount} = useContext(DataContext);
  const openDialog = ()=>{
    setOpen(true);
  }
  return (
    <Wrapper>
    
  {account ? 
   <Profile account = {account} setAccount={setAccount}/>
  : 
    <LoginButton aria-label="Login button" variant="contained" onClick={openDialog}>
      Login
    </LoginButton>
  }

       
       <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
       <Typography style={{marginTop: 3}}>More</Typography>
       <Container>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
       </Container>
       <LoginDialog open = {open} setOpen={setOpen}/>


    </Wrapper>
  )
}

export default CustomButtons
