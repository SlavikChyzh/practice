import { HomePage } from '../Pages/HomePage';
import { Layout } from './Layout/Layout';
import { UsersPage } from '../Pages/UsersPage';
import { UserDetailsPage } from 'Pages/UserDetailsPage';
import { AddUserPage } from 'Pages/AddUserPage';
import { EditUserPage } from 'Pages/EditUserPage';

const { Routes, Route } = require('react-router-dom');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/add" element={<AddUserPage />} />
        <Route path="users/:id/edit" element={<EditUserPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
