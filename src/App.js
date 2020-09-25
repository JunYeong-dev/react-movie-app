import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    moview: []
  }
  componentDidMount() {
    // setTimeout() : JavaScript함수
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    // ES6방식 : 원래라면 this.state.isLoading 으로 state에 접근해야 하지만 아래와 같은 ES6방식으로도 접근할 수 있음
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;