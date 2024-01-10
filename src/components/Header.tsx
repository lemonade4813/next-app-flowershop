'use client'


import Link from 'next/link';
import { styled } from 'styled-components';
import { Allura } from 'next/font/google';


const allura = Allura({ subsets : ['latin'], weight : '400'})


const Nav = styled.nav`
    width : 1920px;
    height : 80px;

`


const HeaderContainer = styled.header`

  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

  height : 50px;
  text-align : center;
  line-height : 50px;
  font-family : 'Allura', cursive;

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
      <>
      <HeaderContainer>La Roseraie</HeaderContainer>
      <StyledNav>
        {menuData.map((menu) => 
          <NavLink href={menu.path} key={menu.id}>{menu.name}</NavLink>)
        }
      </StyledNav>
      </>
  );
}  

export default Header;




