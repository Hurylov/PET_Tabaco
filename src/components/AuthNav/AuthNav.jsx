import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthNavCss, } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavCss>
      <li>
        <NavLink href="/login"> Log IN  </NavLink>
      </li>
      <li>
        <NavLink href="/register"> Register </NavLink>
      </li>
    </AuthNavCss>
  );
};

