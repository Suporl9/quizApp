import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Quizapp } from "./components/Quizapp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Quizapp} />
      </Switch>
    </Router>
  );
}

export default App;
