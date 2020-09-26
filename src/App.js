import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    moview: []
  }
  componentDidMount() {
    // setTimeout() : JavaScript함수
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render() {
    // ES6방식 : 원래라면 this.state.isLoading 으로 state에 접근해야 하지만 아래와 같은 ES6방식으로도 접근할 수 있음
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;