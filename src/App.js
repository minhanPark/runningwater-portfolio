import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "components/Nav";
import Done from "components/Done";
import Channel from "components/Channel";
import NotFound from "components/NotFound";
import Footer from "components/Footer";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Nav />
        <Switch>
          <Route exact path="/runningwater-portfolio" component={Done} />
          <Route path="/channel" component={Channel} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// const Done = () => (
//   <div>
//     <h1>Done</h1>
//   </div>
// );

// const Channel = () => (
//   <div>
//     <h1>Channel</h1>
//   </div>
// );

export default App;
