import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
// import SigninPage from "./pages";
import PDF from "./components/PDF/PDF";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/IPCFinanceDeck" component={PDF} exact />
      </Switch>
    </Router>
  );
}

export default App;
