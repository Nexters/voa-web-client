import React from 'react';
import { Grommet, Box } from 'grommet';
import CustomRouter from './CustomRouter';
import './styles/global.scss';

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
};

class App extends React.Component {
  render() {
    return (
        <Grommet theme={theme} full>
          <Box fill>
            <CustomRouter />
          </Box>
        </Grommet>
    );
  }
}

export default App;
