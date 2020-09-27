import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  // async : getMovies 함수가 비동기로서 await를 끝날 때까지 기다린 후 진행
  getMovies = async () => {
    const {
      data: { 
        data: { 
          movies 
        } 
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
    // console.log(movies);
  }
  componentDidMount() {
    // setTimeout() : JavaScript함수
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }
  render() {
    // ES6방식 : 원래라면 this.state.isLoading 으로 state에 접근해야 하지만 아래와 같은 ES6방식으로도 접근할 수 있음
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;