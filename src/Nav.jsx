import styled from 'styled-components';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: ${({ theme }) => theme.sizes.navH};
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.rule};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.sizes.pad};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.3s ease;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.78rem;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink3};
  transition: color 0.2s;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.ink};
  padding: 0.4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.paper2};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.paper3};
    transform: scale(1.1);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const Nav = ({ isDarkMode, toggleTheme }) => {
  return (
    <NavWrapper>
      <NavInner>
        <NavLogo href="#">M.C</NavLogo>
        <NavRight>
          <NavLinks>
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#projects">Projects</NavLink></li>
            <li><NavLink href="#contact">Contact</NavLink></li>
          </NavLinks>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </ThemeToggle>
        </NavRight>
      </NavInner>
    </NavWrapper>
  );
};

export default Nav;
