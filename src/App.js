import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  // async : getMovies 함수가 비동기로서 await를 끝날 때까지 기다린 후 진행
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
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
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading
          ? (<div class="loader">
            <span class="loader_text">"Loading..."</span>
            </div>)
          : (
            <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
            </div>
        )}
      </section>
    );
  }
}

export default App;