export const List = ({ movies, deleteMovie }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, vote_count } = movie;
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{vote_count}</p>
            <button type="button" onClick={() => deleteMovie(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
