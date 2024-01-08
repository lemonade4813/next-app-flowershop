'use client'


import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';


const StyledNavLink = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#0070f3' : '#333')};
  cursor: pointer;

  &:hover {
    color: #0070f3;
  }
`;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {

  const { pathname } : any = useRouter();

  
  console.log(pathname)
    //   const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <StyledNavLink isActive={isActive}>{children}</StyledNavLink>
    </Link>
  );
};

export default NavLink;