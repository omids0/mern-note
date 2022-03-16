import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Regester from "./components/Regester";
import Navbar from "./components/Navbar";
import Newnote from "./components/Newnote";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <>
          <div>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/addnewnote" component={Newnote} exact />
              <Route path="/addnewnote" component={Login} exact />
              <Route path="/addnewnote" component={Regester} exact />
            </Switch>
          </div>
        </>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
