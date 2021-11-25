import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const HowToDownload = lazy(() => import("./pages/HowToDownload"));

const Fallback = () => {
  return <>Loading</>;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/how-to-download" component={HowToDownload} />
            <HomePage />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
