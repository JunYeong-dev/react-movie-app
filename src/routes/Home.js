import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
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
      // JSX이기 때문에 주의해야 할 것
      // JavaScript class 안에 있으면 component class에 의해 혼동되기 때문에 html태그의 class는 className으로 바꿔줘야함
      // 비슷한 예로 HTML에서 <label for=""> 이란 속성이 있지만 JavaScript에서는 for은 loop를 뜻하기 때문에 <label htmlFor="">으로 써줘야함
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader_text">Loading...</span>
            </div>)
          : (
            <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
            </div>
        )}
      </section>
    );
  }
}

export default Home;