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

const Header = () => {
  
  const menuData = [
    { id: 'menu01', name: 'Home', path: '/' },
    { id: 'menu02', name: '이달의 꽃', path: '/thismonth' },
    { id: 'menu03', name: '추천 상품', path: '/recommend' },
    { id: 'menu04', name: '전체 상품보기', path: '/product' },
  ];

  return(
      <StyledNav>
        {menuData.map((menu) => 
          <NavLink href={menu.path} key={menu.id}>{menu.name}</NavLink>)
        }
      </StyledNav>
  );
}  

export default Header;




