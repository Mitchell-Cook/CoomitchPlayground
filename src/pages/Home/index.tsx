import { Box } from '@mui/system';
import React from 'react';

import ButtonAppBar from '../../components/ButtonAppBar';

import './Home.css';
import logo from './logo.svg';

function Home() {
  return (
    <Box>
      <ButtonAppBar />
      <img src={logo} className="logo-image" alt="website logo" />
    </Box>
  );
};

export default Home;