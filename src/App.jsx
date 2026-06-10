import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { portfolioData } from './portfolioData';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Main>
          <Hero data={portfolioData.hero} />
          <About data={portfolioData.about} />
          <Projects data={portfolioData.projects} />
          <Contact data={portfolioData.contact} />
        </Main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.paper};
  transition: background 0.3s ease;
`;

const Main = styled.main`
  flex: 1;
`;
