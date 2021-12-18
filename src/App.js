import "./App.css";
// import User from "./components/content/User";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nextpage from "./components/nextpage/Nextpage";
import Card from "./components/card";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Card} />
        <Route path="/nextpage" component={Nextpage} />
      </div>
    </Router>
  );
};

export default App;
