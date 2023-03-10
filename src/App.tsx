import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/global';

function App() { 
  return(
    <ThemeProvider theme={[]}>
      <Router>
        <Routes />
      </Router>
      
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
