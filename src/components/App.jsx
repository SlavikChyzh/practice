import { HomePage } from '../pages/HomePage';
import { Layout } from './Layout/Layout';
import { UsersPage } from '../pages/UsersPage';

const { Routes, Route } = require('react-router-dom');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
