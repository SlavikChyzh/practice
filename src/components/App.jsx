import { HomePage } from '../Pages/HomePage';
import { Layout } from './Layout/Layout';
import { UsersPage } from '../Pages/UsersPage';
import { UserDetailsPage } from 'Pages/UserDetailsPage';

const { Routes, Route } = require('react-router-dom');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
