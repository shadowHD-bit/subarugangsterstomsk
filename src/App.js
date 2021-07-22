import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import ShodRazval from './components/page/ShodRazval'
import ChipT from './components/page/ChipT'
import Compress from './components/page/Compress';
import Conditions from './components/page/Conditions';
import Diagnostics from './components/page/Diagnostics';
import Fars from './components/page/Fars';
import Fire from './components/page/Fire';
import OrigDetail from './components/page/OrigDetail';
import Stopped from './components/page/Stopped';
import Woshh from './components/page/Woshh';




function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/svod-razval" component={ShodRazval} />
        <Route path="/chiptuning" component={ChipT} />
        <Route path="/compress" component={Compress} />
        <Route path="/conditions" component={Conditions} />
        <Route path="/diagnostic" component={Diagnostics} />
        <Route path="/originaldetails" component={OrigDetail} />
        <Route path="/fars" component={Fars} />
        <Route path="/fire" component={Fire} />
        <Route path="/stopped" component={Stopped} />
        <Route path="/wash" component={Woshh} />
      </Switch>
      
    </Router>
    
  );
}

export default App;
