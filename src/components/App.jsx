import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { fetchMovies } from '../services/moviesApi';
import { List } from './List/List';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [isListShow, setIsListShow] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryMovies = () => {
      setIsLoading(true);
      fetchMovies(page)
        .then(response => {
          setMovies(prevState => [...prevState, ...response.data.results]);
        })
        .catch(error => {
          console.log('error :>> ', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (isListShow) {
      queryMovies();
    }

    if (!isListShow) {
      setMovies([]);
      setPage(1);
    }
  }, [isListShow, page]);

  const showList = () => {
    setIsListShow(prevState => !prevState);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const deleteItem = id => {
    setMovies(prevState => [prevState.filter(item => item.id !== id)]);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Button text={isListShow ? 'hide List' : 'show List'} clickHandler={showList} />
      <List movies={movies} deleteMovie={deleteItem} />
      {movies.length !== 0 && <Button text={'Load more...'} clickHandler={loadMore} />}
    </div>
  );
};

// ================================================================

// import { Component } from 'react';

// import { Button } from './Button/Button';
// import { fetchMovies } from '../services/moviesApi';
// import { List } from './List/List';
// export class App extends Component {
//   state = {
//     isListShow: false,
//     page: 1,
//     movies: [],
//     isLoading: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { isListShow, page } = this.state;

//     if ((prevState.isListShow !== isListShow || prevState.page !== page) && isListShow) {
//       this.queryMovies();
//     }

//     if (prevState.isListShow !== isListShow && isListShow === false) {
//       this.setState({
//         page: 1,
//         movies: [],
//       });
//     }
//   }

//   queryMovies = () => {
//     this.setState({ isLoading: true });
//     fetchMovies(this.state.page)
//       .then(response => {
//         this.setState(prevState => ({
//           movies: [...prevState.movies, ...response.data.results],
//         }));
//       })
//       .catch(error => {
//         console.log('error :>> ', error);
//       })
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   };

//   showList = () => {
//     this.setState(prevState => ({ isListShow: !prevState.isListShow }));
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   delete = id => {
//     this.setState(prevState => ({
//       movies: prevState.movies.filter(item => item.id !== id),
//     }));
//   };

//   render() {
//     const { isListShow, movies } = this.state;
//     return (
//       <div>
//         <Button text={!isListShow ? 'show list' : 'hide List'} clickHandler={this.showList} />
//         <List movies={movies} deleteMovie={this.delete} />
//         {this.state.movies.length !== 0 && (
//           <Button text={'load more...'} clickHandler={this.loadMore} />
//         )}
//       </div>
//     );
//   }
// }
