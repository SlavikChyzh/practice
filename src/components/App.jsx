import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/HomePage';
import { EventsPage } from 'Pages/EvenstPage';
import { SearchPage } from 'Pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Route>
    </Routes>
  );
};
