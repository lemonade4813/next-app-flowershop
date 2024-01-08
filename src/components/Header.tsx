'use client'


import Link from 'next/link';
import { styled } from 'styled-components';


const Nav = styled.nav`
    width : 1920px;
    height : 80px;

`

import NavLink from './NavLink';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const Header = () => (
    <div>
      <StyledNav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/thismonth">이달의 꽃</NavLink>
        <NavLink href="/recommend">추천 상품</NavLink>
        <NavLink href="/product">전체 상품보기</NavLink>
      </StyledNav>
    </div>
  );
  

export default Header;




