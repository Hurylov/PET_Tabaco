import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthNavCss, } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavCss>
      <li>
        <NavLink href="/register">Реєстрація</NavLink>
      </li>
      <li>
        <NavLink href="/login"> Увійти </NavLink>
      </li>
    </AuthNavCss>
  );
};

