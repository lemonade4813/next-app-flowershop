'use client'


import Link from 'next/link';
import { createGlobalStyle, styled } from 'styled-components';
import { Allura } from 'next/font/google';


// const allura = Allura({ subsets : ['latin'], weight : '400'})


// const CustomFontStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'Allura';
//     src: url('https://fonts.gstatic.com/s/allura/v12/9oRPNYsQpS4zjuAPjAIXyjI.woff2') format('woff2');
//   }

//   .custom-font {
//     font-family: 'Allura', sans-serif;
//   }
// `;

const Nav = styled.nav`
    width : 1920px;
    height : 80px;

`

const HeaderContainer = styled.header`

  height : 60px;
  line-height : 60px;
  text-align : center;
  font-family : 'Allura';
  font-size : 30px;

`

import NavLink from './NavLink';
import GlobalStyle from './GlobalStyle';

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
      <HeaderContainer>
        <h1>La Roseraie</h1>
      </HeaderContainer>
      <StyledNav>
        {menuData.map((menu) => 
          <NavLink href={menu.path} key={menu.id}>{menu.name}</NavLink>)
        }
      </StyledNav>
      </>
  );
}  

export default Header;




