import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box ,styled} from '@mui/material'

const Component = styled(Box)({
    padding: '10px',
    background: '#F2F2F2',
    height: '100%',         
  });


function Home() {
  return (
    <>
    <Navbar/>
    <Component>
    <Banner />
    </Component>
    
    </>

  )
}

export default Home
