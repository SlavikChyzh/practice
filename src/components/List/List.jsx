export const List = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, vote_count } = movie;
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{vote_count}</p>
          </li>
        );
      })}
    </ul>
  );
};
