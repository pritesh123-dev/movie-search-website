import './App.css';
import React from 'react';
import Card from './componet/card';
import Footer from './componet/footer';
import 'font-awesome/css/font-awesome.min.css';
import Search from './componet/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieDetails : [],
      filterMovie : [],
      movieTitle : ""
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
    .then((response) => {
      return response.json();
    }).then((data) => {
      let {results} = data
      this.setState({movieDetails : results})
    })
  }



  
  searchHandler = (event) => {
    let inputData = event.target.value;
    this.setState({movieTitle : inputData});

    let query = this.state.movieTitle;


    let url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
      
      fetch (url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            movieDetails: data.results
          })
        });
  }

 

  render() {
    let movieData = this.state.movieDetails;
    console.log(this.state.movieTitle)
    return(
      <>
      <Search searchHandler={this.searchHandler}/>
      <div className='container'>
        {movieData.map((ele) => {
          return(
            <Card src={ele.poster_path} titleText={ele.title}/>
          )
        })}
      </div>
        <Footer/>
      </>
      
    )
  }
}

export default App;
