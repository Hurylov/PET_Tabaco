import React from "react";

import {
  HeaderContainer,
  LogoThumb,
  HeaderLinkArea,
  MenuContainer,
  SiteNav,
  SiteNavItem,
  SiteNavLink,
  AuthNavContainer
} from './Header.styled'

import logo from '../../img/logo-tabaco.png'
import vector from '../../img/Vector 1.svg'
import { AuthNav } from "components/AuthNav/AuthNav";



export const Header = () => {
  return (
    <HeaderContainer>
      <LogoThumb>
        <HeaderLinkArea href="/">
          <img className="header__logo" src={logo} alt="Логотип компанії" />
        </HeaderLinkArea>
      </LogoThumb>
      <MenuContainer data-menu>  
        <nav>
          <SiteNav>
            <SiteNavItem>
              <SiteNavLink href="/">Головна</SiteNavLink>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavLink href="/goods">Товари</SiteNavLink>
            </SiteNavItem>
          </SiteNav>
          <AuthNavContainer>
            <AuthNav />
            </AuthNavContainer>
        </nav>
        <img className="vector" src={vector} alt="vector" width={1100}/>
      </MenuContainer>
    </HeaderContainer>
    
  );
}

