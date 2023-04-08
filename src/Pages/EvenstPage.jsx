import { fetchEvents } from '../Servis/Events';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <ul>
      {events.map(el => {
        return (
          <li key={el.id}>
            <Link>{el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { EventsPage };
