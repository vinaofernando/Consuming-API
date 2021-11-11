import React from "react";
import "./App.css";
import fetch from "isomorphic-fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Dollar: null,
      Euro: null,
      loading: true,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3002/exchange-rate")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          Euro: result.Euro,
          Dollar: result.Dollar,
        });
      });
  }
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <>
        <header>
          <h1>Exchange rates for Real currency</h1>
        </header>
        <ul>
          <li>Euro:{this.state.Euro}</li>
          <li>Dollar:{this.state.Dollar}</li>
        </ul>
      </>
    );
  }
}

export default App;
