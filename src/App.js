import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";
import store from "./store";
import { Provider } from "react-redux";
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="content-wrap">
            <Navbar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
