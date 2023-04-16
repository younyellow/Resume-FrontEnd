import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Mainpage from './component/Mainpage';
function App() {
  return (
    <>
      <Route path="/" component={Mainpage} exact={true} />
    </>
  );
}

export default App;
