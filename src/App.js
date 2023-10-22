
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Error from './pages/Error';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import SingleMail from './pages/SingleMail';

function App() {
  return (
    <Router>
       <Provider store={appStore}>
  
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/mail/:id' element={<SingleMail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </Provider>
    </Router>
  );
}

export default App;
