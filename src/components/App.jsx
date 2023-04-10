import { Component } from 'react';

import { Button } from './Button/Button';
import { fetchMovies } from '../services/moviesApi';
import { List } from './List/List';
export class App extends Component {
  state = {
    isListShow: false,
    page: 1,
    movies: [],
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.isListShow !== this.state.isListShow &&
      this.state.isListShow
    ) {
      this.queryMovies();
    }
  }

  queryMovies = () => {
    this.setState({ isLoading: true });
    fetchMovies(this.state.page)
      .then(response => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...response.data.results],
        }));
      })
      .catch(error => {
        console.log('error :>> ', error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  showList = () => {
    this.setState(prevState => ({ isListShow: !prevState.isListShow }));
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isListShow, movies } = this.state;
    return (
      <div>
        <Button
          text={!isListShow ? 'show list' : 'hide List'}
          clickHandler={this.showList}
        />
        {this.state.isListShow && <List movies={movies} />}
        {this.state.movies.length !== 0 && (
          <Button text={'load more...'} clickHandler={this.loadMore} />
        )}
      </div>
    );
  }
}
