import { useState, useEffect } from 'react';
import { fetchEventsByName } from '../Servis/Events';
import { useSearchParams, Link } from 'react-router-dom';

const SearchPage = () => {
  const [event, setEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventname = searchParams.get('eventname');

  useEffect(() => {
    if (!eventname) return;
    fetchEventsByName(eventname).then(setEvent);
  }, [eventname]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {event.map(el => {
          return (
            <li key={el.id}>
              <Link>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { SearchPage };
