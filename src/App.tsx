import React from 'react';
import { Grommet, Box } from 'grommet';
import CustomRouter from './CustomRouter';
import './styles/global.scss';
import styled from 'styled-components';


const GlobalBox = styled(Box)`
   ${document.body.clientWidth >= 1024 ? 'width: 375px; height: 667px; margin: 0 auto; margin-top: 50px; background-color: #000':''}
`;

// if larger than 1200px

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  layer: {
    zIndex: '10'
  },
};

class App extends React.Component {
  render() {
    return (
        <Grommet theme={theme} full style={{ backgroundColor: '#000' }}>
          <GlobalBox fill>
            <CustomRouter />
          </GlobalBox>
        </Grommet>
    );
  }
}

export default App;
