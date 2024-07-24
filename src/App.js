import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { Switch, Route } from 'react-router-dom'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/create'><Create /></Route>
          <Route path='/blogs/:id'><BlogDetails /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
