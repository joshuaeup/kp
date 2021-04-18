import "./App.css";
import { Route, Switch } from "react-router";
// Containers
import Home from "./containers/Home/Home";

// Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
