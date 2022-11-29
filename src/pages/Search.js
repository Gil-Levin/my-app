import React, { Component } from 'react'
import { moviesMock } from '../mock/movies.mock';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { movies:null };
    this.title = "Search Page";
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(id) {
    const movie = this.state.movies.find((m) => m.id === id);
    if(!!movie){
      movie.isToggleOn = !movie.isToggleOn;
      this.setState(() => ({
        movies: this.state.movies
      }));

    }
  }
  componentDidMount() {
    this.loadMovies();
  }
  loadMovies() {
    this.setState(() => ({ movies: moviesMock }));
  }
  handleChange(event) {
    const moviesGenre = moviesMock.filter(i => i.genre.toLowerCase().includes(event.target.value) || i.title.toLowerCase().includes(event.target.value))
    this.setState(() => ({movies:moviesGenre}))
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <h1>{this.title}</h1>
      <form>
        <label>
          Filter by Genre or :
          <input type="text" onChange={this.handleChange} />
        </label>
      </form>
      {/* or
      <br></br>
      <form>
        <label>
          Name:
          <input type="text" onChange={this.handleChangeTitle} />
        </label>
      </form> */}
            {this.state.movies && this.state.movies.map(movie =><div class="movie-container">
            <div onClick={() => { this.handleClick(movie.id) }}>
            <div  class="movie-Url"><img src={movie.imageUrl} alt=''></img></div>
            <div class="title">{movie.title}</div>
            </div>
            <div class = "genre">{movie.genre}</div>
            {!!movie.isToggleOn && < div >
              <div class="overview">{movie.overview}</div>
              <div class="rating">Rating: {movie.rating}</div>
            </div>}
          </div>)
          }
      </div>

    );
  }
}
export default Contact


