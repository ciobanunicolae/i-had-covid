import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

const Wrapper = styled.div`
max-width: 1000px;
color : red;
align-items: center;
margin: 0 auto;
`
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
